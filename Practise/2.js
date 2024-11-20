//conditional statements , switch , terminary operator

// check if age is betwen 10 and 20
const age=prompt("enter age : ");
if (age>10 && age<20){
    console.log("age lies between 10 and 20");
}
else{
    console.log("age doesnot liew between 10 and 20")
}


//switch case statements
const color=prompt("enterm color : ");
switch (color){
    case red:
        console.log("its red")
        break                      //bcos other cases will execute.
    case yellow:
        console.log("its yellow")
        break
    default :
        console.log("idk color")
}

//check if number is divisible by 2 and 3

const num1=prompt("enter a numbner : ");
num1=Number.parseInt(num1)
if (num1%3==0 && num1%2==0){
    console.log("number is divisblke by 2 and 3");
}
else{
    console.log("number is not divisible by 2 and 3");
}

//either 2 or 3

const num2=prompt("enter a numbner : ");
num2=Number.parseInt(num2)
if (num2%3==0 || num2%2==0){
    console.log("number is divisblke by 2 or 3");
}
else{
    console.log("number is not divisible by 2 or 3");
}

//ternary operator
const age1=prompt("enter your age :")
console.log("You can ",age1<18? "not drive" : "drive")






