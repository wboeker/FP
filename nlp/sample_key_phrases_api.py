########### Python 3.2 #############
import http.client, urllib.request, urllib.parse, urllib.error, base64
import json

headers = {
    # Request headers
    'Content-Type': 'application/json',
    'Ocp-Apim-Subscription-Key': '4a7bfb6d1f82406b8cdf036fedbf202b',
}

params = urllib.parse.urlencode({
    # Request parameters
    'showStats': '{boolean}',
})

with open('sample.json', 'r') as myfile:
    data=myfile.read()

print(type(data))

try:
    conn = http.client.HTTPSConnection('eastus.api.cognitive.microsoft.com')
    conn.request("POST", "https://flashpopzkeyphrases.cognitiveservices.azure.com/text/analytics/v2.1/keyPhrases?%s" % params, data, headers)
    response = conn.getresponse()
    data = response.read()
    print(data)
    conn.close()
except Exception as e:
    print("[Errno {0}] {1}".format(e.errno, e.strerror))

####################################