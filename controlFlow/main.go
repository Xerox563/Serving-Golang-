package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

func main() {
	fmt.Println("Control Flow in Golang")
	// Taking salary Input
	fmt.Println("Enter Your Salary [in lakhs] !!")
    input := bufio.NewReader(os.Stdin)
    
    // Reading that input salary
	val,_ := input.ReadString('\n')
	fmt.Println("Salary is :",val) // string
	salary,_ := strconv.ParseFloat(strings.TrimSpace(val),64)
	
	var company string
	if salary <= 10 {
		company = "Service Based"
	} else if salary > 10 && salary <= 20 {
        company = "Startup/Mid Companies"
   } else if salary > 20 && salary <=60 {
	   company = "Product Based Companies"
   } else {
		company = "HFTs"
	}
	fmt.Printf("[%v] whose salary is %v",company,salary)

	// Something cool
    if num:=15; num % 2  == 1 {
		fmt.Printf("Number: %v is -> Odd",num)
	} else {
		fmt.Printf("Number: %v is -> Even",num)
	}
}

// if err != nil {}