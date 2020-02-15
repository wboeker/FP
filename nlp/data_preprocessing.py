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
            new_lines.append(line.replace("\n", " "))

    return new_lines


# dividing subtitle lines into chunks
def split_subtitles(lines):
    list_len = len(lines)
    split = 10
    n = int(round(list_len / split))

    sub_lists = []

    for i in range(0, list_len, n):
        x = i
        sub_lists.append(lines[x:x + n])

    separator = ""
    chunks = []

    for i, l in enumerate(sub_lists):
        chunk = separator.join(sub_lists[i])
        chunks.append(chunk.replace("\n", " "))

    return chunks


def read_file(file_name, file_encoding):
    with open(file_name, encoding=file_encoding, errors='replace') as f:
        lines = f.readlines()
        new_lines = clean_up(lines)

    chunks = split_subtitles(new_lines)

    return chunks


def main(args):
    chunks = read_file("01.eng.srt", 'utf-8')

    dicts = []
    for i, chunk in enumerate(chunks):
        dict = {"language":"en", "id":i+1 , "text":chunk}
        dicts.append(dict)

    json_dict = { "documents": dicts }

    json_file = json.dumps(json_dict)

    with open('input.json', 'w') as outfile:
        outfile.write(json_file)

if __name__ == '__main__':
    main(sys.argv)
