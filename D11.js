// 11. Write a program to find the sum of the digits of a number accepted from the user.
x=require("readline-sync")
a=x.questionInt("enter number")
sum=0
while (a!=0){
    sum=sum+(a%10)
    a=a/10
    // console.log(sum)
}console.log(sum)



Not Clear












