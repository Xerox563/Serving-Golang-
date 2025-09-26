package main

import (
	"fmt"
	"io"
	"io/ioutil"
	"os"
)

func main() {
	fmt.Println("Lets know how to work with files in Golang !!")
	content := "I am a developer and an CEH.11 certified ethical hacking[Basic do stuffs that makes anyone feel Great !!]"
    
	file,err := os.Create("./secrets.txt")
	if err != nil {
		panic(err) // It shut downs the execution of the program and will show us the error ..
	}
	length, err := io.WriteString(file,content)
	checknilError(err)
	fmt.Println("Length is: ",length)
    defer file.Close()
	readFile("./secrets.txt")
}

func readFile(filename string) {
 // we need file path to read it
   ByteData,err := ioutil.ReadFile(filename)
   checknilError(err)
	fmt.Println("Daya of file is: ",string(ByteData))
}

func checknilError(err error)  {
    if err != nil {
		panic(err) 
	}
}

