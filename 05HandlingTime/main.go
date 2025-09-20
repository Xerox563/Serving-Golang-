package main

import (
	"fmt"
	"time"
)

func main() {
	println("Lets Handle time Now !!")

	currTime := time.Now()
	fmt.Println(currTime)
	fmt.Println(currTime.Format("01-02-2006 15:04:05 Monday"))

	createdDate := time.Date(2020,time.August,14,23,23,0,0,time.UTC)
	fmt.Println(createdDate)
	fmt.Println(createdDate.Format("01-02-2006 Monday"))
}    