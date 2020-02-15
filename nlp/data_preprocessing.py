import re
import sys
import json
from typing import List, Any


def is_time_stamp(l):
    if l[:2].isnumeric() and l[2] == ':':
        return True
    return False


def has_letters(line):
    if re.search('[a-zA-Z]', line):
        return True
    return False


def is_lowercase_letter_or_comma(letter):
    if letter.isalpha() and letter.lower() == letter:
        return True
    if letter == ',':
        return True
    return False


def has_no_text(line):
    l = line.strip()
    if not len(l):
        return True
    if l.isnumeric():
        return True
    if is_time_stamp(l):
        return True
    if l[0] == '(' and l[-1] == ')':
        return True
    if not has_letters(line):
        return True
    return False


def contains_markup(line):
    l = line.strip()
    if "<i>" in line or "</i>" in line:
        return True


def clean_up(lines):
    """
  Get rid of all non-text lines and
  try to combine text broken into multiple lines
  """
    new_lines = []
    for line in lines[1:]:

        if contains_markup(line):
            line = line.replace("<i>", "")
            line = line.replace("</i>", "")

        if has_no_text(line):
            continue
        elif len(new_lines) and is_lowercase_letter_or_comma(line[0]):
            # combine with previous line
            new_lines[-1] = new_lines[-1].strip() + ' ' + line
        else:
            # append line
            new_lines.append(line.rstrip())

        separator = " "
        final_string = separator.join(new_lines)
        final_string = final_string.replace("\n" ," ")

    return final_string


def new_file(file_name, file_encoding):
    with open(file_name, encoding=file_encoding, errors='replace') as f:
        lines = f.readlines()
        new_lines = clean_up(lines)
    new_file_name = file_name[:-4] + '.txt'
    with open(new_file_name, 'w') as f:
        f.write(new_lines)

def main(args):
    new_file("01.eng.srt", 'utf-8')

    subtitles = open('01.eng.txt', 'r').read()

    #for loop in later implementation
    dict_for_json = {
        "documents": [
            {"language": "en",
             "id": 1,
             "text": subtitles}
        ]
    }
    #turning dict back into string
    json_file = json.dumps(dict_for_json)

    print("data preprocessing completed, creating json input file for episode script")
    with open('input.json', 'w') as outfile:
        outfile.write(json_file)

if __name__ == '__main__':
    main(sys.argv)
