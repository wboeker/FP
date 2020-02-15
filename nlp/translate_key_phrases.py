from googletrans import Translator
import http.client, urllib.request, urllib.parse, urllib.error, base64
import requests
import json

def prepare_document_list():

    #opening the script data into json object
    with open('key_phrases.json', 'r') as myfile:
        data=myfile.read()

    document_list = json.loads(data)['documents']

    print(document_list)

    return document_list

#making a dict of bags of words, each bag of words represent the key phrases in an episode.
# bags_of_words = []

def translations(document_list):
    # src is source language code and dest is destination language code
    # Japanese is 'ja' and english is 'en'
    translator = Translator()
    for document in document_list:
        print("Translating most relevant words in episode " + document['id'])
        vocab_list = []
        for word in document['keyPhrases']:
            translation_response = translator.translate(word, src='en', dest='ja')
            translated = translation_response.text
            hiragana = hiragana_translation(translated)
            vocab = {
              "word": translated,
              "reading": hiragana,
              "english": word,
              "isInput": False
            }
            vocab_list.append(vocab)

        with open('vocab_phrases.json', 'w') as outfile:
            outfile.write(vocab_list)

def hiragana_translation(data):
    headers = {
        # Request headers
        'Content-Type': 'application/json',
    }

    # params = urllib.parse.urlencode({
    #     # Request parameters
    #     'showStats': '{boolean}',
    # })

    body = {"app_id": "ef474b5d0771ae90627d3a4d249ac54c5bb46517357e0faeed61f6c48dbb4962",
            "sentence": data, "output_type": "hiragana"}

    try:
        # The equivalent longer version
        resp = requests.post('https://labs.goo.ne.jp/api/hiragana',
                             data=json.dumps(body),
                             headers=headers)
        # resp.encoding = 'utf-8'
        hiragana_response = json.loads(resp.content)
        # print(hiragana_response['converted'])
        return hiragana_response['converted']

    except Exception as e:
        print("[Errno {0}] {1}".format(e.errno, e.strerror))


if __name__ == '__main__':

    document_list = prepare_document_list()
    translations(document_list)