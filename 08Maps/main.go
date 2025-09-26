package main

import "fmt"

func main() {
    fmt.Println("Lets finish the Maps !!")

    lang := make(map[string]string)
    lang["js"] = "Javascript"
    lang["py"] = "Python"
    lang["rb"] = "Ruby"
    lang["ts"] = "Typescript"
    lang["go"] = "Golang"

    fmt.Println("List of All Languages:", lang)
    fmt.Println("Language with js:", lang["js"])

    delete(lang, "rb")
    fmt.Println("List of All Languages after deleting rb:", lang)

    // looping the map
    for key, value := range lang {
        fmt.Printf("for Key %v, value is %v\n", key, value)
    }

    for _, value := range lang {
        fmt.Printf("value is %v\n", value)
    }
}


// fmt.Println -> just prints the value
// fmt.Printf -> %v [for filling values],%T, all used here