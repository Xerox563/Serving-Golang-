package main

import "fmt"

// modify array
func modify1(arr *[5]int) {
	for i:=0;i<len(arr);i++ {
		arr[i]*=2
	}
}
func modify2(arr [5]int) {
	for _,val := range arr {
		val*=2;
	}
}

func main() {
	fmt.Println("Hey !! Lets Practice Arrays !!")
	
	var arr [5]int
	arr[0] = 1
	arr[1] = 2
	arr[2] = 3
	arr[3] = 4
	arr[4] = 5
	for ind,val := range arr {
		fmt.Println(ind,val)
		
	}
	fmt.Println("----------------")
	for i:=0 ;i<len(arr);i++ {  
        fmt.Println(i,arr[i])
	}
	fmt.Println("----------------")
	modify1(&arr) // modifies array
	// modify2(arr) // do not modifies array
	fmt.Println("Modified Array: ",arr)
}
