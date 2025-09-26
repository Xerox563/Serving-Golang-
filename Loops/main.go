package main

import "fmt"

func main() {
	fmt.Println("Welcome to the Loops")

	// days := []string{"Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"}
	// fmt.Println(days)

	// 1.For loop
	// for i := 0;i<len(days);i++{
	// 	fmt.Println(days[i])
	// }
	
	// 2.range loop
	// for i := range days {
	// 	fmt.Println(days[i])
	// }

	// 3.Use when you need value as well as index [Mostly Used]
	// for index,days := range days {
	// 	fmt.Printf("index is %v :: day is %v \n",index,days)
	// }

	x := 0
	for x < 10{
		// if(x == 5) {
		// 	break;
		// }
		// if(x == 5) {
		// 	x++;
		// 	continue;
		// }
		if x == 2 {
           goto lcu
		}
		fmt.Println("Value is: ",x)
		x++;
	}
	lcu:
	fmt.Println("Go to HAck !!")
	
}


// Continue : It just skips that ome phase which you provide .
// break : It just terminates the loop and values after it are not recognized .
// Goto : When you want to go to any other statement