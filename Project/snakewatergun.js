// snake water gun

let com = Math.floor(Math.random() * 3);
com = Number.parseInt(com);

let obj = {
    0 : "snake" ,
    1 : "water" ,
    2 : "gun" ,
}

console.log("Enter \n '0' for snake \n '1' for water \n '2' for gun  ");
let user = prompt("Enter a number : ");
user = Number.parseInt(user);

if (com == 0 && user == 1){
    console.log(`You selected ${obj[user]} and computer selected ${obj[com]}`)
    console.log("You lose")
}

else if (com == 1 && user == 2){
    console.log(`You selected ${obj[user]} and computer selected ${obj[com]}`),
    console.log("You lose")
}

else if (com == 2 && user == 0){
    console.log(`You selected ${obj[user]} and computer selected ${obj[com]}`),
    console.log("You lose")
}

else if ( com == user ){
    console.log(`You entered ${obj[user]} and Computer selected ${obj[com]}`),
    console.log("Tie")
}

else{
    console.log(`You entered ${obj[user]} and Computer selected ${obj[com]}`),
    console.log("You Win")
}