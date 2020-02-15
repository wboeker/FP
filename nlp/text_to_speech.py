import os
import requests
import time
from xml.etree import ElementTree
import json

try:
    input = raw_input
except NameError:
    pass

class TextToSpeech(object):
    def __init__(self, subscription_key):
        self.subscription_key = subscription_key
        # self.tts = input("What would you like to convert to speech: ")
        self.timestr = time.strftime("%Y%m%d-%H%M")
        self.access_token = None

    def get_token(self):
        fetch_token_url = "https://eastus.api.cognitive.microsoft.com/sts/v1.0/issuetoken"
        headers = {
            'Ocp-Apim-Subscription-Key': self.subscription_key
        }
        response = requests.post(fetch_token_url, headers=headers)
        self.access_token = str(response.text)

    def save_audio(self):
        base_url = 'https://eastus.tts.speech.microsoft.com/'
        path = 'cognitiveservices/v1'
        constructed_url = base_url + path
        headers = {
            'Authorization': 'Bearer ' + self.access_token,
            'Content-Type': 'application/ssml+xml',
            'X-Microsoft-OutputFormat': 'riff-24khz-16bit-mono-pcm',
            'User-Agent': 'YOUR_RESOURCE_NAME'
        }
        xml_body = ElementTree.Element('speak', version='1.0')
        xml_body.set('{http://www.w3.org/XML/1998/namespace}lang', 'ja-jp')
        voice = ElementTree.SubElement(xml_body, 'voice')
        voice.set('{http://www.w3.org/XML/1998/namespace}lang', 'ja-JP')
        voice.set(
            'name', 'Microsoft Server Speech Text to Speech Voice (ja-JP, Ayumi, Apollo)')

        #opening the vocab json to create speech from japanese
        with open('vocab_phrases.json', 'r') as myfile:
            data = myfile.read()

        # for loop for all the phrases begins here:
        vocab_phrases = json.loads(data)["vocab"]
        for phrase in vocab_phrases:
            voice.text = phrase["word"]
            body = ElementTree.tostring(xml_body)

            response = requests.post(constructed_url, headers=headers, data=body)
            if response.status_code == 200:
                with open(phrase['english'] + '.wav', 'wb') as audio:

                    #these eventually need to go into a subdirectory, not worth figuring out rn though.
                    audio.write(response.content)
                    print("\nStatus code: " + str(response.status_code) +
                          "\nYour TTS is ready for playback.\n")
            else:
                print("\nStatus code: " + str(response.status_code) +
                      "\nSomething went wrong. Check your subscription key and headers.\n")

if __name__ == "__main__":
    subscription_key = '55ac863576354b1dbe7bdbe717944b5d'
    app = TextToSpeech(subscription_key)
    app.get_token()
    app.save_audio()