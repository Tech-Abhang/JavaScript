//Arrays

//create array and add numbers entered by user
let arr=[];
let number=prompt("enter a number you want to add");
number=Number.parseInt(number);
arr.push(number);

//keep adding numbers to above array until "0" is given
do{
    let arr=[];
    let number=prompt("enter a number you want to add");
    number=Number.parseInt(number);
    arr.push(number);
}
while (number!=0);
    console.log(arr)

//filter numbers divisible by 10 from array
let arr1 = [10,20,30,63, 87,25,833,73,60,80,90];
let arr2 = arr1.filter((numbers) => {
    return numbers%10 == 0
})
console.log(arr2)

//create an array of square of given numbers
let arr3 = [2,3,4,5];
let arr_square = arr3.map((numbers) => {
    return numbers**2
}) 
console.log(arr_square)

//use reduce to cal fact of natural number from an array of first n natural numbers 
let arr4 = [1,2,3,4];
let a2 = arr4.reduce((h1,h2) => {
    return h1*h2
})
console.log(a2)