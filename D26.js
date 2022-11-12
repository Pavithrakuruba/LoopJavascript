// 26. Write a program to print the following series till n terms.
// 2 , 22 , 222 , 2222 _ _ _ _ _ n terms


x=require("readline-sync")
n=x.questionInt("enter number")
a=0
c=0
while (c<n){
    a=a*10+2
    c=c+1
    console.log(a)
}



Not Clear