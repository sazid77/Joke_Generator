// https://official-joke-api.appspot.com/random_joke
const URL = "https://official-joke-api.appspot.com/random_joke";
const jokepara1 = document.getElementById("setup");
const jokepara2 = document.getElementById("punchline");
const getjoke = document.getElementById("btn");

// let Promises = fetch(URL)
// console.log(Promises)


function random_joke () {
    fetch (URL)
    .then((response)=>{
        console.log(response.status)
        console.log(response.ok)
        return response.json();
        
    })
    .then((data)=>{
        console.log (data);
        jokepara1.innerText = data.setup
        jokepara2.innerText =data.punchline
       
    })
}
getjoke.addEventListener("click",random_joke)
  
  

