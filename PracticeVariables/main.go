package main

import "fmt"

func main() {
	// %s -> prints text
	name := "Alice"
    fmt.Printf("Name: %s \n",name)

	// Integers [{%b:decimal},{%b:binary},{%o:Octal},{%x:hexadecimal(lowercase)},{%X:hexadecimal}]
	n := 42
	fmt.Printf("decimal:%d , binary:%b , Octal:%o ,hexadecimal:%x,hexadecimal: %X\n",n,n,n,n,n)

	// Floating Pointing Numbers
	pi:=3.14289
	fmt.Printf("float:%f,floating-point[2digits]:%.3f \n",pi,pi)

	// Booleans
	flag := true
	fmt.Printf("%t\n",flag)

	// characters
	ch := 'a'
	fmt.Printf("char: %c \n",ch)
    
	// formatting tricks
	x := 42
    fmt.Printf("%v\n", x)   // 42
    fmt.Printf("%#v\n", x)  // 42
    fmt.Printf("%T\n", x)   // int
}


