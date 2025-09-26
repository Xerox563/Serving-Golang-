package main

import (
	"encoding/json"
	"fmt"
)

// syntax : type name struct
type course struct {
	Name string `json:"coursename"`
	Price int
	Platform string
	Password string `json:"-"`
	Tags []string `json:"tags,omitempty"`
}
func main() {
	fmt.Println("Lets explore json in golang !!")
    // EncodeJson()
	decodeJson()
}

func EncodeJson() {
	vals := []course{
		{"Reactjs",24000,"udemy","xyz4265",[]string{"web","dev"}},
		{"Blockchain",23000,"coursera","903912kefmlwm37",[]string{"solidity","crypto"}},
		{"After Effects",7600,"coursera","whw023k",[]string{"editing","color grading"}},
		{"DSA",78000,"Youtube","hhvh6h7khd",[]string{"Graph","placement"}},
	}
    // Package this data as JSON
	// finalJson,err := json.Marshal(vals)
	finalJson,err := json.MarshalIndent(vals,"","\t")
	if(err != nil) {
		panic(err)
	}
	fmt.Println(string(finalJson))

}
func decodeJson() {
	jsonDataFromWeb := []byte(`
	[
        {
                "coursename": "Reactjs",
                "Price": 24000,
                "Platform": "udemy",
                "tags": ["web","dev"]
        },
        {
                "coursename": "Blockchain",
                "Price": 23000,
                "Platform": "coursera",
                "tags": ["solidity","crypto"]
        },
        {
                "coursename": "After Effects",
                "Price": 7600,
                "Platform": "coursera",
                "tags": ["editing","color grading"]
        },
        {
                "coursename": "DSA",
                "Price": 78000,
                "Platform": "Youtube",
                "tags": ["Graph","placement"]
        }
    ]
	`)

	var lcoCourses []course
    
	checkValid := json.Valid(jsonDataFromWeb)
    
	if checkValid {
		fmt.Println("JSON was valid!!")
		err := json.Unmarshal(jsonDataFromWeb, &lcoCourses)
		if err != nil {
			fmt.Printf("Error unmarshaling JSON: %v\n", err)
			return
		}
		for _, course := range lcoCourses {
			fmt.Printf("%#v\n", course)
		}
	} else {
		fmt.Println("JSON was not valid!!")
		return
	}

	// some cases where you just want to add data to key value
	var myOnlineData []map[string]interface{}
	err := json.Unmarshal(jsonDataFromWeb, &myOnlineData)
	if err != nil {
		fmt.Printf("Error unmarshaling to map: %v\n", err)
		return
	}
	fmt.Printf("%#v\n", myOnlineData)

	for k,v := range myOnlineData {
		fmt.Printf("Key is %v , Value is %v and Type is %T \n",k,v)
	}
	
}
