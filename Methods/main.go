package main

import "fmt"

func main() {
	fmt.Println("Methods in Golang !!!!")

	raju := user{"Raju","alphaRaju@gmail.com",true,23}
	fmt.Printf("Raju Details are: %+v \n",raju)
	
    raju.GetStatus()
	raju.NewMail()
	fmt.Printf("Raju Details are: %+v \n",raju)

} 

type user struct {
	Name string
	Email string
	Status bool
	Age int
	//oneAge int // not exportible [o -> smallCase]
}

func (u user) GetStatus(){
	fmt.Println("Is user Active: ",u.Status)
} 

// This passes as the copy , means this cants chnage the email permanently
func (u user) NewMail() {
	u.Email = "test@go.dev"
	fmt.Println("Email of this user is: ",u.Email)
}

// Regular things goes into fun -> functions
// When these functions goes into classes[struct] -> methods

// hello 4 3 2 1 0 two one world