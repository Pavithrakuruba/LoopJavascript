// 30. Write a program to find the sum of following series
// 1 + 8 + 27 …………n terms


x=require("readline-sync")
n=x.questionInt("enter number")
i=1
fact=0
while (i<=n){
    fact=i**3
    i+=1
    console.log(fact)
}//console.log(fact)


Not Clear