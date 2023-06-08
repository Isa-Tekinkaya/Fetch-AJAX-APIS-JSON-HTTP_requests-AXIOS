// ===============
// YIKES!!!!!!!!!!!
// ===============
// setTimeout(() => {
//     document.body.style.backgroundColor = 'red';
//     setTimeout(() => {
//         document.body.style.backgroundColor = 'orange';
//         setTimeout(() => {
//             document.body.style.backgroundColor = 'yellow';
//             setTimeout(() => {
//                 document.body.style.backgroundColor = 'green';
//                 setTimeout(() => {
//                     document.body.style.backgroundColor = 'blue';
//                 }, 1000)
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)


// // const delayedColorChange = (newColor, delay, doNext) => {
// //     setTimeout(() => {
// //         document.body.style.backgroundColor = newColor;
// //         doNext && doNext();
// //     }, delay)
// // }

// // // STILL A LOT OF NESTING!!!
// // delayedColorChange('red', 1000, () => {
// //     delayedColorChange('orange', 1000, () => {
// //         delayedColorChange('yellow', 1000, () => {
// //             delayedColorChange('green', 1000, () => {
// //                 delayedColorChange('blue', 1000, () => {

// //                 })
// //             })
// //         })
// //     })
// // });


// searchMoviesAPI('amadeus', () => {
//     saveToMyDB(movies, () => {
//         //if it works, run this:
//     }, () => {
//         //if it doesn't work, run this:
//     })
// }, () => {
//     //if API is down, or request failed
// })


// const fakeRequest = (url) => {
//     return new Promise((resolve, reject) => {
//         const rand = Math.random()
//         setTimeout( () => {
//             if(rand < 0.7 )
//             {
//                 resolve("Fake Data")
//             }
//             else{
//                 reject("Request Data Error")
//                 }
            
//         },1000)
//     })
// }
// fakeRequest("/dogs/1")
// .then((data) => {
//     console.log("Request done!", "Data is:", data)
// })
// .catch((err) =>{
//     console.log("Slow Timeout", err)
// }) 


// // const delayedColorChange = (color, delay) => {
// //     return new Promise((resolve, reject) =>{
// //         setTimeout(() =>{
// //             document.body.style.backgroundColor = color;    
// //             resolve()
// //         },delay)
// //     })
// // }

// // delayedColorChange("red", 1000)
// //     .then(() => delayedColorChange("orange", 1000))
// //     .then(() => delayedColorChange("yellow", 1000))
// //     .then(() => delayedColorChange("green", 1000))
// //     .then(() => delayedColorChange("blue", 1000))
// //     .then(() => delayedColorChange("indigo", 1000))
// //     .then(() => delayedColorChange("violet", 1000))


// const login = async (username, password) => {
    
//     if(!username || !password) throw "missing credentials"
//     if(username && password === "welcome") return "Welcome, password correct!"
//     throw "Invalid Password"
    
// }


// login("asd", "sd")
// .then((response) => console.log(response))
// .catch((err) =>console.log("error:",err))
// fetch("https://swapi.dev/api/people/1/")

//     .then((res)=> {
//     console.log("resolved", res)
//     return res.json()
// })
//     .then((data) => { 
//     console.log(data)
//     return fetch("https://swapi.dev/api/people/2/")})
//     .then((res) => {
//         return res.json()
//     })
//     .then((data) => {
//     console.log(data)
// })
//     .catch((err)=> console.log("Error", err))

// const loadStarWarsCharacter = async () =>{
//     try {
//     const res = await fetch("https://swapi.dev/api/people/1/")
//     const data = await res.json()
//     await console.log(data)
//     const res2 = await fetch("https://swapi.dev/api/people/12/")
//     const data2 = await res2.json()
//     console.log(data2)
//     } catch (err) {
//         console.log(err)
//     }
// }
// loadStarWarsCharacter()

// const req = new XMLHttpRequest();

// req.onload = function(){
//     const jsonString = JSON.parse(this.responseText)
    
//     console.log(this)
//     console.log(jsonString)
// }

// req.onerror = function (error){
//     console.log("Error:",error)
// }

// req.open("GET", "https://swapi.dev/api/people/2/")
// req.send()

// const table = document.querySelector("#table")

// const starWarsCaracter = async (id) => {
//    try{
//     const res = await axios.get(`https://swapi.dev/api/people/${id}/`)
//     for(let key in res.data){ 
//         const tableList = document.createElement("table")
//         tableList.append(key, ": ", res.data[key])
//         table.append(tableList)
//         // for in for looping throu an object ******
//         console.log(key, res.data[key])
//     }
    
//    } catch (err) {
//     console.log(err)
//    }
// }
// starWarsCaracter(1)

let jokesButton =   document.querySelector("#jokesButton")
let jokes =   document.querySelector("#jokes")

const addNewJoke = async () =>{
    let joke = await dadJokes()
    let newJoke =  document.createElement("li")
    newJoke.append(joke)
    jokes.append(newJoke)
}
jokesButton.addEventListener("click", addNewJoke)

const dadJokes = async () => {
   try{
    const config = {headers: {Accept: "application/json"}} // get JSON you need to specify it this way according to this specific API
    const res = await axios("https://icanhazdadjoke.com/", config)
    return res.data.joke
   } 
    catch (e) {
        return "No Jokes available! Sorry."
    }
}


