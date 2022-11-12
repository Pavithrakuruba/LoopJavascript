// 18. Write a program to convert binary to decimal.

x=require("readline-sync")
a=x.questionInt("enter number")
dec=0
while (a>0){
    b=a%10
    dec=dec+(2**b)
    a=parseInt(a/10)
    
}//console.log("Decimal is",dec)
console.log("Decimal is",dec)






Not Clear