package main

import (
	"fmt"
	"strconv"
)

func main() {
	// implicit type conversion not in go : only explicit conversion allowed !!
	// var a int = 10
	// var c float32 = 4.3535
	// var d int = int(c)
	// var b string = string(a)
	// fmt.Printf("Type of a:%T \n",a)
	// fmt.Printf("Type of d:%T \n",d)
	// fmt.Printf("Type of b:%T \n",b)

	// fmt.Println("a : ",a)
	// fmt.Println("d : ",d)
	// fmt.Println("b : ",b)

	// Using strconv
    // string -> int [strconv.atoi(s)]
	// s1 := "0.76"
	// num1,_ := strconv.Atoi(s1)
	// fmt.Println(num1)
    // // int -> string [strconv.stoi(s)]
	// s2 := 23
	// num2 := strconv.Itoa(s2)
	// fmt.Println(num2)
	// fmt.Printf("Type of nums2 : %T \n",num2)

    // // string -> float [strconv.stoi(s)]
	// s3 := "23.23234"
	// num3,_ := strconv.ParseFloat(s3,64)
	// fmt.Println(num3)
	// fmt.Printf("Type of nums3 : %T \n",num3)

    // // float -> string [strconv.stoi(s)]
	// s4 := 23.2452
	// num4 := strconv.FormatFloat(s4,'f',2,64)
	// fmt.Println(num4)
	// fmt.Printf("Type of nums4 : %T \n",num4)

	// // string -> Boolean [parsebool]
	// s5 := "true"
	// num5,_ := strconv.ParseBool(s5)
	// println(num5)
	// // Boolean -> string [FormatBool(false)]


	// // string -> bytes
	// str :="Hello"
	// bytes := []byte(str)
	// fmt.Println(bytes)

	// // byte -> string
	// res := string(bytes)
	// fmt.Println(res)
// -----------------------------------------------------


}
