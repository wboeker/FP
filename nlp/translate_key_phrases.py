from googletrans import Translator
import json

translator = Translator()

#opening the script data into json object
with open('key_phrases.json', 'r') as myfile:
    data=myfile.read()

document_list = json.loads(data)['documents']

print(document_list)

print()

#making a dict of bags of words, each bag of words represent the key phrases in an episode.
# bags_of_words = []

for document in document_list:
    print("Translating most relevant words in episode " + document['id'])
    japanese_key_phrases = []
    for word in document['keyPhrases']:
        translated = translator.translate(word, src='en', dest='ja')
        japanese_key_phrases.append(translated.text)

    print(japanese_key_phrases)
        # print(translated.text)
#     bag_of_word = document['keyPhrases']
#     episode_bag = {}
#     episode_bag['episode_id'] = document['id']
#     episode_bag['bag_of_words'] = bag_of_word
#     print(episode_bag)
#     bags_of_words.append(episode_bag)

# print(bags_of_words)

#src is source language code and dest is destination language code
#Japanese is 'ja' and english is 'en'
