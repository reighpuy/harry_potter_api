import http.client
import mimetypes

conn = http.client.HTTPSConnection("www.potterapi.com")
payload = ''
headers = {
  'Cookie': 'COOKIE'
}
conn.request("GET", "/v1/characters?key=INSERT_APIKEY_HERE", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))