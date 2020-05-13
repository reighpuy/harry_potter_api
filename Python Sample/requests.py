import requests

url = "https://www.potterapi.com/v1/characters?key=INSERT_APIKEY_HERE"

payload = {}
headers = {
  'Cookie': 'COOKIE'
}

response = requests.request("GET", url, headers=headers, data = payload)

print(response.text.encode('utf8'))