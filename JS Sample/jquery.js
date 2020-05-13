var settings = {
  "url": "https://www.potterapi.com/v1/characters?key=INSERT_APIKEY_HERE",
  "method": "GET",
  "timeout": 0,
  "headers": {
    "Cookie": "COOKIE"
  },
};

$.ajax(settings).done(function (response) {
  console.log(response);
});