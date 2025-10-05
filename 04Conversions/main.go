package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

func main() {
	fmt.Println("Welcome to our Pizza Shop !!")
	fmt.Println("Please rate our Pizza between 1 and 5")

	reader := bufio.NewReader(os.Stdin)

	input,_ := reader.ReadString('\n');
	println("Rating is :",input)
    
	newRating,err := strconv.ParseFloat(strings.TrimSpace(input),64)
    
	if err != nil {
		fmt.Println(err)
	} else {
		newRating+=1
		fmt.Println("New Rating is :",newRating)
	}
}

