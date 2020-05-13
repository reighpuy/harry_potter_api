package main

import (
  "fmt"
  "net/http"
  "io/ioutil"
)

func main() {

  url := "https://www.potterapi.com/v1/characters?key=INSERT_APIKEY_HERE"
  method := "GET"

  client := &http.Client {
  }
  req, err := http.NewRequest(method, url, nil)

  if err != nil {
    fmt.Println(err)
  }
  req.Header.Add("Cookie", "COOKIE")

  res, err := client.Do(req)
  defer res.Body.Close()
  body, err := ioutil.ReadAll(res.Body)

  fmt.Println(string(body))
}