package main

import (
	"fmt"
	"sort"
)

func main() {
	fmt.Println("Exploring arrays !!")

	var arr [4]string
	arr[0]= "Alex"
	arr[1]="Amelton"
	arr[2]="Xerox"
	arr[3]="Dextrr"
	// fmt.Println("Array Values is :",arr)
	// fmt.Println("Len of Array is :",len(arr))
	
	// var desh = [5]string{"India","Japan","Russia"}
	// fmt.Println("Array Values is :",desh)
	// fmt.Println("Len of Array is :",len(desh))

	// Slices

	var nums = []string{"Apple","Tomato","Mango"}
	// fmt.Printf("The type of nums : %T \n",nums)

	nums = append(nums,"Banana","Potato" )
	// fmt.Println(len(nums))

	nums = append(nums[2:3]) // [0-based index : (s_ind -> inclusive, e_ind -> exclusive) : Start from index 2 and end at index 5]
	nums = append(nums[:3]) // [0-based index : prints till ind 2]
	// fmt.Println(nums)

	// Define slice using make
	scores := make([]int,4) // {type of data to store,size}
	scores[0] = 215
	scores[1] = 283
	scores[2] = 237
	scores[3] = 296

	scores = append(scores, 398,219,289,333) //  here Entirely new mem. allocation happens and go accomodates all of the values.
	// fmt.Println("Scores are :",scores)
	// fmt.Printf("Type of Data : %T \n",scores)
	
	sort.Ints(scores)
	// fmt.Println(scores)
	// fmt.Println("Is Scores Sorted ? ",sort.IntsAreSorted(scores))
	fmt.Println("How to remove value from the slices based on Index")
	var courses = []string{"reactjs","nextjs","Js","Golang","Python","ML"}
	fmt.Println(courses)
	var index int = 2
	courses = append(courses[:index],courses[index+1:]...)
	fmt.Println("Courese are: ",courses)


}