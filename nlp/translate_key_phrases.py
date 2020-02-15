from googletrans import Translator

translator = Translator()

#opening the script data into json object
with open('key_phrases.json', 'r') as myfile:
    data=myfile.read()

#src is source language code and dest is destination language code
#Japanese is 'ja' and english is 'en'
translated = translator.translate('bad', src='en', dest='ja')
print(translated.text)