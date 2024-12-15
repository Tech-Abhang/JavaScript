const usernameinput = document.getElementById("username") 
const but = document.getElementById("hack-btn")
but.addEventListener("click",()=>{
    const username = usernameinput.value; //getting uername through input search

    const sleep = async (sec) =>{  //sleep function to run code after fixed time
        return new Promise((resolve,reject) =>{
            setTimeout(()=>{
                resolve(true)
            },sec*1000)
        })
    }

    const showhack = async (message) =>{   //function to print text in html after every fixed time 
        await sleep(2)
        console.log(message)
        text.innerHTML= text.innerHTML + message + "<br>"
    }
    

    (async () =>{                                  //to change sentence and gie it as message to showhack function
        for (let i=0 ; i<8 ; i++){

            if (i==0){
                sentence = `Hacking ${username}`;
            }else if (i==1){
                sentence = `${username} Found`;
            }else if (i==2){
                sentence = "Hacking phone number";
            }else if (i==3){
                sentence = "Phone number hacked sucessfully.";
            }else if (i==4){
                sentence = "Hacking Address";
            }else if (i==5){
                sentence = "Address hacked sucessfully.";
            }else if (i==6){
                sentence = "PhoneNo:+91XXXXXXXXXX";
            }else if (i==7){
                sentence = "Address: XXX,XXXXX XXXX XXXXXXX,Thane,Maharastra,India"
            }
            await showhack(sentence)
            
        }
    })()

})