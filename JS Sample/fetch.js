var myHeaders = new Headers();
myHeaders.append("Cookie", "COOKIE");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://www.potterapi.com/v1/characters?key=INSERT_APIKEY_HERE", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));