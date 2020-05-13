var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "https://www.potterapi.com/v1/characters?key=INSERT_APIKEY_HERE");
xhr.setRequestHeader("Cookie", "COOKIE");

xhr.send();