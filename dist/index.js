const toggleBtn = document.querySelector(".toggle")
const pickFont = document.querySelector(".pick-font")
const searchedWord = document.querySelector(".word")
const pronunciation = document.querySelector(".pronunciation")
const search = document.querySelector(".search")
const searchBtn = document.querySelector(".search-btn")
const meaning = document.querySelector(".meaning")
const researched = document.querySelector(".researched")
const searchBoxDiv = document.querySelector(".search-box div")

//Toggle button click

toggleBtn.addEventListener("click", ()=>{
    if(!(toggleBtn.classList.contains("active"))){
        toggleBtn.classList.add("active")
        document.documentElement.setAttribute('data-theme', 'dark');
    }else{
        toggleBtn.classList.remove("active")
        document.documentElement.setAttribute('data-theme', 'light');
    }
    
})


//Change font
pickFont.addEventListener("change", (e)=>{
   document.documentElement.setAttribute('data-font', e.target.value)
})

//Find a word
searchBtn.addEventListener("click", ()=>{
    if(search.value){
        findWord(search.value)
       searchBoxDiv.classList.remove("error-box")
      
   }else{
       searchBoxDiv.classList.add("error-box")
   }
  
})
search.addEventListener("keypress",(e)=>{
    if(e.key === "Enter"){
        if(search.value){
            findWord(search.value)
           searchBoxDiv.classList.remove("error-box")
          
       }else{
           searchBoxDiv.classList.add("error-box")
       }
    }
  })

const findWord = (word) =>{
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then((res)=>res.json())
    .then(data=>displayData(data[0]))
    .catch(error=>displayError())
}
//To display data when a is searched
const displayData = (data)=>{
    let definitions = data.meanings[0].definitions
    const audios = data.phonetics.filter((value)=>{
        if(value.text && value.audio){
            return value
        }
    })
    const justAudio = data.phonetics.find((value)=>{
        if(value.audio){
            return value;
        }
    })
   
    const justPhonetic = data.phonetics.find((value)=>{
        if(value.text){
            return value
        }
    })

    researched.innerHTML = ""
    const newItem = document.createElement("div")
    newItem.innerHTML= `<section class="searched">
    <div class="inner">
      <div class="words">
       <h1 class="word">${data.word}</h1>
       <p class="pronunciation">${ audios[0] ? audios[0].text : justPhonetic.text}</p>
     </div>
      <div>
        ${ audios[0] ? `<audio  class="audio-sound"  src=${audios[0].audio}></audio>  <button class="sound"> <i class="fa-solid fa-play"></i></button>` : (justAudio  ? `<audio  class="audio-sound"  src=${justAudio.audio}></audio>  <button class="sound"> <i class="fa-solid fa-play"></i></button>` : " ")}
       
       
      </div>
    </div>
 </section>
 <section class="meaning">
  ${data.meanings.map((value)=>
    `<article>
    <div class="heading">
      <div><h2>${value.partOfSpeech}</h2></div>
      <div class="line"></div>
    </div>
  </article>
  <article class="full-meaning">
    <div>
    <h3>Meaning</h3>
    <ul>
      ${value.definitions.map((value)=>`<li>${value.definition}</li>`).join("")}
      ${value.definitions[0].example ? `<p class="example">"${value.definitions[0].example}"</p>` : ""}
    </ul>
    </div>
    ${value.synonyms.length > 0 ?  
    `<div class="synonyms">
    <h3>synonyms<h3> <ul>${value.synonyms.map((value)=>`<li>${value}</li>`).join("")}</ul>
    </div>` : "" }
    ${value.antonyms.length > 0 ?  
        `<div class="antonyms">
        <h3>antonyms<h3> <ul>${value.antonyms.map((value)=>`<li>${value}</li>`).join("")}</ul>
        </div>` : "" }
     
  </article>`).join(" ")}
  <div class="source">
   <p class="source-heading">Source</p>
   <div> <p>${data.sourceUrls[0]}</p> 
   <a href=${data.sourceUrls[0]}><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
   </div>
  </div>
   
 </section>`
    researched.appendChild(newItem)
    const audioElement = document.querySelector(".sound")
    const sound = document.querySelector(".audio-sound")
   if(audioElement){
    audioElement.addEventListener("click",() =>{
        sound.play()
     } )
    }
    
}


//To display an error

const displayError = () =>{
    researched.innerHTML = `<div class="error"> 
    <div class="emoji"><p>🥺</p></div>
    <div class="error-message">
    <h2>No Definitions Found</h2>
    <p>Sorry pal, we couldn't find definitions for the word you were looking for. You can try the search again at later time or head to the web instead</p>
   </div>
 </div>`
}
