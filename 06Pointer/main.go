package main

import "fmt"

func main() {
	fmt.Println("Lets explore Pointers")

	var ptr *int
	fmt.Println("Value of pointer is ",ptr)
	fmt.Println("Address of pointer is ",&ptr)

	num := 23

	var ptr1 = &num
	fmt.Println("Value of Pointer is",ptr1) // refernce to that variable 
	fmt.Println("Value of Pointer is",*ptr1)

	*ptr1 = *ptr1 * 2
	fmt.Println(*ptr1) // 46 -> actuall change in num [reflected]
	fmt.Println(num) // 46
}

/*
When we want the gaurantte that exaclty the value should be passed ,then we prefer to pass the pointers 
Pointer is nothing , just a  direct refernce of memory address to a variable
*/