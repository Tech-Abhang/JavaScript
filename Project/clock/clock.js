setInterval( () =>{
    let t = document.getElementById("time");
    let dateElement = document.getElementById("date")
    
    let d = new Date();
    
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();

    const timeString = `${h} : ${m} : ${s}`;
    t.textContent = timeString;

    const day = d.getDate();
    const month = d.getMonth();
    const year = d.getFullYear();

    const dateString = `${day} / ${month} / ${year}`
    dateElement.textContent = dateString;  

},1000)