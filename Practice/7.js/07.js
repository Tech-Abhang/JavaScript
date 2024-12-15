
//change the color of first and last child inn an element
document.getElementsByTagName("nav")[0].firstElementChild.style.color = "red";
document.getElementsByTagName("nav")[0].lastElementChild.style.color = "green";

//change background of all <li>
Array.from(document.getElementsByTagName("li")).forEach( element =>{
    element.style.background = "cyan";
})


