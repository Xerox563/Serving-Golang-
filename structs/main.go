package main

import "fmt"

func main() {
	// no inheritance, no super or parent in golang
	fmt.Println("Structs in Golang !!")
	amit := User{"Amit", "amit@go.dev", true, 19}
	fmt.Println(amit)
	fmt.Printf("Amit Details are: %+v", amit)
}

type User struct {
	Name   string // first letter capital means : It is accessible globally
	Email  string
	Status bool
	age    int
}
