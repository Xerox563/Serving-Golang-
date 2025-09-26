package main

import "fmt"

func main() {
	fmt.Println("This is a Valid Function !!")
	greating()
	// greeting2()
    res := adder("3","5")
	res2,msg := proAdder(13,3224,14,431431,4313,231,47,87)
	fmt.Println("Result [Adder] is:",res)
	fmt.Printf("Result [ProAdder] is: %v && message is: %v \n",res2,msg)
}

func greating() {
	fmt.Println("Namaste from Golang !!")
}

func adder(val1 string,val2 string) string {
	return val1 + val2
}

func proAdder(values ...int) (int,string) {
	// values -> slice[for ref : array]
	total := 0;

	for _,val := range values {
	    total += val
	}
	return total,"Mjae Ko !!"
}

// func greeting2(){
// 		fmt.Println("Namaste from JS !!")
// 	}


// Just declared the function , not called it : Evem then its working . [main -> entry point[from where the program starts]]
// sognatures: what kind of value a function expects to process and what kind of value a function expects to return after prcessing .