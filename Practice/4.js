// strings 

//length of string
let a="Abhang";
console.log(a.length)

//includes , startwith , endswith functions in string

const sentence = "Hi My name is Abhang";
const word = "Abhang";
console.log(`The word ${word} ${sentence.includes(word)? "is":"is not"} in the sentence`);

const str1 = 'Saturday night plans';
console.log(str1.startsWith('Sat'));
console.log(str1.startsWith('Sat', 3)); //(string,position)

//slice
let str2="Please give me Rs 1000";
let amount=str2.slice("Please give me Rs ".length)
console.log(amount)

//change 4th character of a given string
let str="Abhang";
str[3]="t";
console.log(str)  // stimgs are immutable but there also dont give error.