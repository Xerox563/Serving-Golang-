package main

import (
	"fmt"
	"sort"
)

func main() {
    fmt.Println("=== 1 Create ==="); demoCreate()
    fmt.Println("\n=== 2 Share ==="); demoShare()
    fmt.Println("\n=== 3 Len/Cap ==="); demoLenCap()
    fmt.Println("\n=== 4 Append Growth ==="); demoAppendGrowth()
    fmt.Println("\n=== 5 Copy ==="); demoCopy()
    fmt.Println("\n=== 6 Remove/Insert ==="); demoRemoveInsert()
    fmt.Println("\n=== 7 Stack ==="); demoStack()
    fmt.Println("\n=== 8 Clear Keep ==="); demoClearKeep()
    fmt.Println("\n=== 9 Sort ==="); demoSort()
    fmt.Println("\n=== 10 Aliasing ==="); demoAliasing()
    fmt.Println("\n=== 11 Realloc ==="); demoRealloc()
    fmt.Println("\n=== 12 Shrink ==="); demoShrink()
}

func demoCreate() {
    var s1 []int
    s2 := []int{}
    s3 := []int{10, 20, 30}
    s4 := make([]int, 5)
    s5 := make([]int, 0, 10)
    fmt.Printf("s1: %#v len=%d cap=%d nil=%v\n", s1, len(s1), cap(s1), s1 == nil)
    fmt.Printf("s2: %#v len=%d cap=%d nil=%v\n", s2, len(s2), cap(s2), s2 == nil)
    fmt.Printf("s3: %#v len=%d cap=%d\n", s3, len(s3), cap(s3))
    fmt.Printf("s4: %#v len=%d cap=%d\n", s4, len(s4), cap(s4))
    fmt.Printf("s5: %#v len=%d cap=%d\n", s5, len(s5), cap(s5))
}

func demoShare() {
    arr := [5]int{1, 2, 3, 4, 5}
    s := arr[1:4]
    fmt.Println("arr before:", arr, "s:", s)
    s[0] = 99
    fmt.Println("after s[0]=99 -> arr:", arr, "s:", s)
    s2 := arr[1:4:4]
    fmt.Println("s2 len,cap:", len(s2), cap(s2))
}

func demoLenCap() {
    s := make([]int, 2, 5)
    fmt.Println("initial len=", len(s), "cap=", cap(s))
    s = s[:4]
    fmt.Println("after s = s[:4] len=", len(s), "cap=", cap(s))
}

func demoAppendGrowth() {
    s := make([]int, 0, 1)
    fmt.Printf("start len=%d cap=%d\n", len(s), cap(s))
    for i := 0; i < 10; i++ {
        s = append(s, i)
        fmt.Printf("append %d -> len=%d cap=%d\n", i, len(s), cap(s))
    }
}

func demoCopy() {
    src := []int{1, 2, 3}
    dst := make([]int, len(src))
    n := copy(dst, src)
    fmt.Println("copied", n, "dst:", dst)
    dst[0] = 99
    fmt.Println("src:", src, "dst:", dst)
}

func demoRemoveInsert() {
    s := []int{1, 2, 3, 4, 5}
    i := 2
    s = append(s[:i], s[i+1:]...)
    fmt.Println("after remove preserving order:", s)

    s2 := []int{10, 20, 30, 40, 50}
    j := 1
    s2[j] = s2[len(s2)-1]
    s2 = s2[:len(s2)-1]
    fmt.Println("after remove without order:", s2)

    s3 := []int{1, 2, 4, 5}
    k := 2
    s3 = append(s3, 0)
    copy(s3[k+1:], s3[k:])
    s3[k] = 3
    fmt.Println("after insert at index 2:", s3)
}

func demoStack() {
    var stack []int
    stack = append(stack, 10)
    stack = append(stack, 20)
    stack = append(stack, 30)
    fmt.Println("stack after pushes:", stack)
    if len(stack) > 0 {
        top := stack[len(stack)-1]
        stack = stack[:len(stack)-1]
        fmt.Println("popped:", top, "remaining:", stack)
    }
}

func demoClearKeep() {
    s := make([]int, 5, 10)
    fmt.Println("before:", len(s), cap(s))
    s = s[:0]
    fmt.Println("after s[:0]:", len(s), cap(s))
    s = nil
    fmt.Println("after nil -> len:", len(s), "cap:", cap(s), "nil?", s == nil)
}

func demoSort() {
    s := []int{5, 2, 9, 1, 3}
    fmt.Println("before:", s)
    sort.Ints(s)
    fmt.Println("after sort:", s)
    people := []struct {
        name string
        age  int
    }{{"Alice", 30}, {"Bob", 25}, {"Carol", 28}}
    sort.Slice(people, func(i, j int) bool { return people[i].age < people[j].age })
    fmt.Println("sorted by age:", people)
}

func demoAliasing() {
    base := []int{1, 2, 3, 4}
    a := base[:2]
    b := base[1:]
    fmt.Println("base", base, "a", a, "b", b)
    a[1] = 99
    fmt.Println("after a[1]=99 -> base", base, "a", a, "b", b)
}

func demoRealloc() {
    s := make([]int, 0, 2)
    s = append(s, 1, 2)
    alias := s
    fmt.Printf("addr s[0]=%p\n", &s[0])
    s = append(s, 3)
    fmt.Printf("addr s[0] after append =%p\n", &s[0])
    fmt.Printf("addr alias[0] (old) =%p\n", &alias[0])
    alias[0] = 100
    fmt.Println("alias:", alias)
    fmt.Println("s (new):", s)
}

func demoShrink() {
    big := make([]byte, 1000)
    for i := range big {
        big[i] = byte(i % 256)
    }
    smallView := big[900:910]
    fmt.Println("smallView len,cap:", len(smallView), cap(smallView))
    tmp := make([]byte, len(smallView))
    copy(tmp, smallView)
    smallView = tmp
    fmt.Println("after copy, smallView len,cap:", len(smallView), cap(smallView))
}
