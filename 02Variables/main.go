package main

import "fmt"

// jwttoken := xerojfjwfwwwnv  // error[walrus operator cant be used outside any method: will through the error.]
var y = "xerojfjwfwwwnv" // fine
var x int = 34  // fine
var y string="String"
const LoginToken string = "yrruiojqfvbsndvlk3y3428nbkjnnn42klt"  // L -> public keyword -> accessible global
func main() {
    
	//string
	var username string ="Ritika Mishra"
	fmt.Println(username)
	fmt.Println(y)
   fmt.Printf("Type of the Variable is: %T",username)
    
	//bool
	var isLogged bool = false
	fmt.Println(isLogged)
	fmt.Printf("Variable is of type: %T \n",isLogged)

	//uint/int
	var val uint8 = 255  // Use when specifiic to OS.
	var x int = 256
	fmt.Println(val,x)
	fmt.Printf("Variable is of type: %T \n",val)

	//float
	var val1 float32 = 255.4327498374710  // stores till 5 decimal placess
	var val2 float64 = 746.7413324234233641379 // stores till >5 decimal placess
	fmt.Println(val1,val2)
	
	// default values and some aliases
	var anotherVariable bool  // 0 -> empty -> false
	fmt.Println(anotherVariable)
	fmt.Printf("Variable is of type:%T \n",anotherVariable)
    
	// implicit type -> decided by lexer [automatically decides by lexer some type]
	var web = "alphaxerox.com"
	fmt.Println(web)
	fmt.Printf("Variable is of type:%T \n",web)
	
	// no var style
    numberofuser := 3000.1
	fmt.Println(numberofuser)
	
	
	// global variable
	println(LoginToken)
	fmt.Printf("Variable is of type:%T \n",LoginToken)
}


/*
: bufio -> for effiecient reading & buffered[ip is stored in mem. before processing] ip/op.
: os -> or interacting with os(os.Stdin)
: fmt -> for printing the op.

*/

