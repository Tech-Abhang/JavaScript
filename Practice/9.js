// promises , call backs
// Q1 : to load a js file in brower using promises. use then() to display alert when load is complete

const loadscript = async (src) =>{
    return new Promise((resolve,reject) =>{
        let script = document.createElement("script")
        script.src= src
        script.onload = () =>{
            resolve(src)
        }
        document.head.append(script)
})
    
}
let a = loadscript("https://")
a.then((value) =>{
    alert = "program is done"
})

//Q2 using async and await

const main2 = async () =>{
    let a = await loadscript("https//")
    console.log(a)
}
main2()

// Q3 promise which rejects after 3secs , use async await to use its value, use try catch to handle error
let p = () =>{
    return new Promise((resolve,reject) =>{
    setTimeout(() =>{
        reject(new Error("this is new error :)"))
    },3000)
})
}

let b = async () =>{
    try{
        let c = await p()
        console.log(c)
    }
    catch(err){
        console.log("this error is handled")
    }
}

//Q4 using promise.all() inside an async/await to await 3 promises . compare its results with the case where we await these one by one

let p1 = async () =>{
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
                resolve(10)
        },2000)
    })
}

let p2 = async () =>{
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
                resolve(20)
        },1000)
    })
}

let p3 = async () =>{
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
                resolve(30)
        },3000)
    })
}

const run = async () =>{
    console.time()
    let a1 = await p1()
    let a2 = await p2()
    let a3 = await p3()  // we wait till a1 is done for a2 , same for a3
    console.timeEnd("run")

    let a4 = p1()
    let a5 = p2()
    let a6 = p3()
    let a4a5a6 = await Promise.all([a1,a2,a3]) //we do simultaneously
    console.log(a4a5a6)
    console.timeEnd("run")

}
run()