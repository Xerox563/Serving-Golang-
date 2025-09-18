package main

import (
	"bufio"
	"fmt"
	"os"
)

func main() {
	welcome := "This is a Simple Welcome to user Input"
	fmt.Println(welcome)

	reader := bufio.NewReader(os.Stdin)
	fmt.Println("Enter the Rating for Our Pizza")

	// comma ok // err ok
	input,_ := reader.ReadString('\n')
    fmt.Println("Thanks for Rating, ",input)
	fmt.Printf("the type is : %T \n",input)
}