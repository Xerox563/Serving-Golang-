package main

import (
	"fmt"
	"io/ioutil"
	"net/http"
	"net/url"
	"strings"
)

const Mygeturl string = "http://localhost:8000/get"
const Myposturl string = "http://localhost:8000/post"
const Myformurl string = "http://localhost:8000/postform"
func main() {
	fmt.Println("Welcome to web Request [http:[get,post] !!")
    // PerformGetRequest(Mygeturl)
    // PerformPostJsonRequest(Myposturl)
	PerformFormRequest(Myformurl)
}


func PerformPostJsonRequest(myurl string) {
	// generate fake json data
	requestBody := strings.NewReader(`
	 {
	    "Name":"Dextrr",
		"society":"Anonymous",
		"tools":"Wireshark",
		"specialization":"Black Hat hacking",
		"age":22
	  }
	`)

	// send request

	res,err := http.Post(myurl,"application/json",requestBody) // {url[where to post data],content-type,data}
    if(err != nil) {
		panic(err)
	}

	// grab the response
	content,err := ioutil.ReadAll(res.Body)
	if(err != nil) {
		panic(err)
	}
    
	fmt.Println(string(content))
}

func PerformFormRequest(myurl string) {
  
	// form data
	data := url.Values{}
    data.Add("Name","Dextrr")
  	data.Add("society","Anonymous")
  	data.Add("society","Anonymous")
  	data.Add("tools","Wireshark")
  	data.Add("specialization","Black Hat hacking")
    
	response,err := http.PostForm(myurl,data)
	if(err != nil) {
		panic(err)
	}
    defer response.Body.Close()

	content,err := ioutil.ReadAll(response.Body)
    if(err != nil) {
		panic(err)
	}
	fmt.Println("Content [Form one]",string(content))
}




func PerformGetRequest(myurl string) {
	res,err := http.Get(myurl)
	if(err != nil) {
		panic(err)
	}
   // our job is to close the request : whenever everything completes , it closes the request !!
	defer res.Body.Close()
	// fmt.Println("Status Code: ",res.StatusCode)
	// fmt.Println("Content length: ",res.ContentLength)
    

	// Method : 1 [using the string(bytedata) -> convert the byteData to string]
	// content,_ := ioutil.ReadAll(res.Body)
	// fmt.Println("Content Length :: ",len(content))
	// fmt.Println("Content [String Format] :: ",string(content))
	// fmt.Println("Content [Byte Format] : ",content)
// fmt.Printf("--------------------------------\n")
	// Method : 2 [building string]
	// create a builder for converting byte data to any format
    var responseString strings.Builder  
    data,_ := ioutil.ReadAll(res.Body)
	byteCount,_ := responseString.Write(data) // responseString -> contains the raw data in byte format
	fmt.Println("Bytes Count :: ",byteCount)
	fmt.Println("Content :: ",responseString.String())	
}

