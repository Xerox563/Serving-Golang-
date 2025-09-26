package main

import (
	"fmt"
	"io/ioutil"
	"net/http"
)

const url = "https://lco.dev"

// nethttp -> handling web request
func main() {
	fmt.Println("Handling web requests in Golang !!")

	response,err := http.Get(url)
	if(err != nil) {
		panic(err)
	}
	fmt.Printf("Response Type:%T \n",response)
    
	response.Body.Close()
	// callers responsibility to close the connection

	// reading response
	dataBytes,err := ioutil.ReadAll(response.Body)
	if(err != nil) {
		panic(err)
	}
	content := string(dataBytes)
	fmt.Println("Response from url is: ",content)
}

// Type response : When ever we make a web request we get a response object which is super useful to us.
// response object -> contains whole lot of properties : [status]
// checking status code is super helpful
// Close bool : close the response
