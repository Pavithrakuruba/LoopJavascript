// 10. Write a program to check whether a number is prime or not.

i=2
b=0
x=require("readline-sync")
a=x.questionInt("enter number")
while (i<a/2){
    if (a%2==0){
        b+=1
    i+=1
    }
if (b==0){
    console.log("prine")
}else{
    console.log("not prime")
}
}if


 

i=2
x=require("readline-sync")
a=x.questionInt("enter number")
b=0
while (i<a){
    if (a%i==0){
        console.log(a,"not prime")
        break
    }else{
        console.log("prime")
    }i=i+1
}


Not Clear
 

