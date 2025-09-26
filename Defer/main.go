package main

import "fmt"

func main() {
	fmt.Println("Defer in Golang !!!!")
	defer fmt.Println("Hello")
	defer fmt.Println("World")
	fmt.Println("Oyee")
	validFun()
}

// exec: seen you seeing currently -> Defer in Golang !!!! Oye 4 3 2 1 0 World Hello

func validFun() {
	for i:=0;i<5;i++{
	    defer fmt.Println(" ",i)
	}
}


// Defer -> when u put defer keyword before the line which is marked to be executed will now be going to be executed at the very end of the function itseelf.
// order is [LIFO [basically in reversal order]]

