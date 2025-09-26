package main

import (
	"encoding/json"
	"fmt"
	"net/http"
)

//model for course - file
type Course struct {
  Courseid string `json:"courseid"`
  CourseName string `json:"coursename"`
  CourseIrice int `json:"courseprice"`
  Author *Author `json:"author"`
}

//model for author - file
type Author struct {
	Fullname string `json:"fullname"`
	Website string `json:"website"`
}

// fake DB
var courses[]Course

// middleware - helper-file 
func (c *Course) IsEmpty() bool {
   // both fields are empty : field is empty !!
   return c.Courseid == "" && c.CourseName == ""
}

func main() {

}


// controllers - file

// serve home route

// reader -> where you get the values from whoever is sending the request .
// writer -> where you want to write the response[incase you want to write the header or anything else]
func serveHome(w http.ResponseWriter,r *http.Request) {
	w.Write([]byte("<h1>Welcome to Building the API</h1>"))
}

func getAllCourses(w http.ResponseWriter,r *http.Request) {
	fmt.Println("Get All Courses")
	// setup the headers
	w.Header().Set("Content-Type","application/json")
	json.NewEncoder(w).Encode(courses)
}
//seeding: while in order to test , we feed our fake db with some fake dummy values to test 

func getOnecourse(w http.ResponseWriter,r *http.Request) {
	 fmt.Println("Get One Courses")
	 w.Header().Set("Content-Type","application/json")
     // grab the id 
     params := mux.Vars(r)
	 // we have slice , loop the slice[courses] to get this particular id and return it[response]
	 for _,course := range courses {
		if course.Courseid === params["id"] {
			json.NewEncoder(w).Encode(course)
			return
		}
	 }
	 // craft json response
	 json.NewEncoder(w).Encode("No course found with given course id !!")
	 return 
}
