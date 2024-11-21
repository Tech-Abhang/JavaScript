//guess game 
//write a js program to generate a random number and store it in a variable . The progra, then takes an input from the user to tell them whether guesss is correct or not.

const number1=Math.floor(Math.random() *100);  // to print number between 1-100
console.log(number1)
let score = 100 ;
while (true) {
    let guess = prompt("Enter your guess : ");
    if (guess == number1){
        console.log(`You guessed the right number ${number1}`);
        console.log(`Your socre is ${score}`);
        break
    }

    else if (guess == "q"){
        console.log("You quit");
        console.log(`Your score was ${score}`)
        break
    }

    else{
        console.log("You guessed the wrong number");
        score-=1;
    }
}