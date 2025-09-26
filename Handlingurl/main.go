package main

import (
	"fmt"
	"net/url"
)
 
const myurl string = "https://lcu.dev:3000/learn?coursename=reactjs&paymentid=ghd3her3k4"
func main() {
	fmt.Println("Welcome to Handling url !!")
	fmt.Println(myurl)

	// parsing the url : extracting info from url
	res,_ := url.Parse(myurl)
	fmt.Println("Scheme:",res.Scheme)
	fmt.Println("Host:",res.Host)
	fmt.Println("Path:",res.Path)
	fmt.Println("Port:",res.Port())
	fmt.Println("RawQuery:",res.RawQuery)
 
	qparams  := res.Query()
	fmt.Printf("Type of Query Params: %T \n",qparams) // key value pair
    fmt.Println("coursename:",qparams["coursename"])
    fmt.Println("paymentid:",qparams["paymentid"])

	for key,val := range qparams {
		fmt.Printf("Key is [%v] :: Value is [%v] \n",key,val)
	}


	// construct the url
	partsofurl := &url.URL{
	   Scheme: "https",
	   Host:"amit.dev",
	   Path:"/hack",
	   RawQuery: "tool=metasploit",
	}
	newurl := partsofurl.String()
	fmt.Println("New Constructed Url ::",newurl)
}