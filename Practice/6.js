//

//tell user through alert if he can drive or not

let age = prompt("Enter your age : ")
age = Number.parseInt(age)

if (age >= 18){
    alert("You can drive")
}
else{
    alert("You cant drive")
}

//in above question use confirm

let runAgain1 = true;
while (runAgain){
    let age = prompt("Enter your age : ");
    age = Number.parseInt(age);

    if (age >= 18){
        alert("You can drive");
    }
    else{
        alert("You cant drive");
    }
    runAgain1 = confirm("confirm again?");
}

//in above question use console error to log the error if the age is negative

let runAgain2 = true;
while (runAgain){
    let age = prompt("Enter your age : ");
    age = Number.parseInt(age);

    if (age >= 18){
        alert("You can drive");
    }

    else if( age<0 ){
        console.error("You have entered a negative age");
        break
    }
    
    else{
        alert("You cant drive");
    }
    runAgain2 = confirm("confirm again?");
}

//if num>4 redirect to google.com

let num = prompt("enter a number : ");
num=Number.parseInt(num);

if ( num>4 ){
    location.href = "https://google.com";
}

//based on user input through prompt change the background color of page.

let color = prompt("enter color : ");
document.body.style.background = color;

