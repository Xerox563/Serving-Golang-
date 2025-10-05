package main

import "fmt"

func demoDeepCopy() {
	// changes in m2 does not reflect in m1
    m1 := map[string]int{"x": 10, "y": 20}
    m2 := make(map[string]int)

    for k, v := range m1 {
        m2[k] = v
    }

    m2["x"] = 999
    fmt.Println("m1:", m1["x"])
    fmt.Println("m2:", m2["x"])
	// length of map
    fmt.Printf("Length of m1:%d && Length of m2:%d \n",len(m1),len(m2))
	
	// clearing map
	m1 = make(map[string]int)
	fmt.Println(m1)
}

func compareMaps(mp1,mp2 map[string]int) bool {
   if(len(mp1) != len(mp2)) {
	 return false
   }
   for k,v := range mp1 {
	if(mp2[k] != v) {
		return false
	}
   }
   return true
}

func main() {
	var m1 map[string]int
	fmt.Println(m1 == nil)
    mp := make(map[string]string)
	mp["Alice"] = "in Borderland"
	mp["stranger things"] = "Season 5"
	mp["Lupin"] = "Ahaan cool series"
	mp["Dextrr"] = "HAcking Guy !!"
	// fmt.Println(mp)
	for key,val := range(mp) {
		fmt.Printf("Key is: %s && value is: %s \n",key,val)
	}
	// read
	fmt.Println(mp["Alice"])
	// update
	mp["Lupin"] = "Available on Netflix !!"
	fmt.Println(mp["Lupin"])
	// add
	mp["hitorical"] = "The Seven Kingdoms"

	// Looping
	for key,val := range(mp) {
		fmt.Printf("Key is: %s && value is: %s \n",key,val)
	}

    fmt.Printf("-------------\n" )

	// if key exists 
	val,err := mp["Lupin"]
	fmt.Println("key 'x' exists?", err, "value:", val)
	// Deleting then checking if key exists
    delete(mp,"Lupin")
	val1,err:= mp["Lupin"]
	fmt.Println("key 'x' exists?", err, "value:", val1)
	
	// copies just refernces , not with address
	m2 := mp
	fmt.Println(m2)
	m2["Lupin"] ="Xerox563"
	fmt.Println(m2)

	// Deep Copy manually
	// demoDeepCopy()
	mp11 := map[string]int{
		"x":1,
		"y":2,
		"z":3,
	}
	mp12 := map[string]int{
		"x1":11,
		"y1":12,
		"z1":13,
	}
	fmt.Println(compareMaps(mp11,mp12))
}
// Maps grow dynamically as you add elements.
