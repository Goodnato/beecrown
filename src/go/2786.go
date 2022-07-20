package main
 
import (
    "fmt"
)
 
func main() {
    var L, C, T1, T2 int
 
    fmt.Scanf("%d", &L)
    fmt.Scanf("%d", &C)
    T1 = L * C + (L-1) * (C-1)
	T2 = 2 * (L-1) + 2 * (C-1)
     
    fmt.Printf("%d\n", T1)
    fmt.Printf("%d\n", T2)
}