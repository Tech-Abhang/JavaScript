setInterval( () =>{
    let t = document.getElementById("time");
    let dateElement = document.getElementById("date")
    
    let d = new Date();
    
    // get hours , minutes,seconds from d
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();

    // making a string for time
    const timeString = `${h} : ${m} : ${s}`;

    // adding the string to div with index
    t.textContent = timeString;

    // get date , month , year from d
    const day = d.getDate();
    const month = d.getMonth();
    const year = d.getFullYear();

    // create a string for date
    const dateString = `${day} / ${month} / ${year}`;

    // adding the string to div with index
    dateElement.textContent = dateString;  

},1000)