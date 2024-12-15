//Basics of js.

// create variable and add Number

let a="Abhang"
let b=7
console.log(a+b)

// find the data type of above variable

console.log(typeof (a+b))

//create a constant object in js can to change it to hold a number later

const c = {
    name:"Abhang",
    section:1,
}
c="shubham"
console.log(c)  //Error

//Try to add new key to aobe object

c["class"]="4th"
console.log(c)  //even if constant you can add keys in object


//to create work meaning dictionary of 3 words

const dict = {
    "appriciate":"know full worth",
    ataraxia:"deprerssion",
    yakka:"work hard"
}
console.log(dict.appriciate)
console.log(dict["appriciate"])  //both have same output
