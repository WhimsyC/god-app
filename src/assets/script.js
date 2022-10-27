let api_url = ""
let wiki_url = ""
let picLinksArr = []
let counter = 0
let imageUrl = ""
let breed = ""
let subtype = ""
let placeholderArr = []
let testO
let testarr = []
const paw = document.getElementById("paw")

function wiki() {
  wiki_url = "https://en.wikipedia.org/wiki/" + subtype + "_" + breed
  document.getElementById("link").href = wiki_url
}

// async function getWikiApi(wiki_url) {

//   const  response = await fetch(wiki_url)

//   var dataW = await response.json()
//   getWikiLink(dataW)
// }

// function getWikiLink(dataW) {
//   testO = dataW
//   console.log(testO);
// }


function toupper(string){
  let x  = string[0].toUpperCase() + string.substring(1)
  return x
}

async function getapi(url) {
    
  const response = await fetch(url)
  
  var data = await response.json()
  getLink(data)
}



function getLink(data) {
  document.querySelector("a").classList.remove("hidden")
  document.querySelector("p").classList.remove("hidden")
  document.getElementById("intro").classList.add("hidden")

  picLinksArr = data.message
  let randomImageLink = Math.floor(Math.random()* picLinksArr.length)
  imageUrl = picLinksArr[randomImageLink]
  document.getElementById("picHolder").src = imageUrl
  if (subtype === undefined) {
    breed = toupper(breed)
    document.getElementById("title2").innerHTML = breed
    wiki_url = "https://en.wikipedia.org/wiki/" + breed
    document.getElementById("link").href = wiki_url
  } else {
    breed = toupper(breed)
    subtype = toupper(subtype)
    document.getElementById("title2").innerHTML = subtype + " " + breed
    wiki_url = "https://en.wikipedia.org/wiki/" + subtype + "_" + breed
    document.getElementById("link").href = wiki_url
  }
}




function getDogValue(dogValue) {
  let x = dogValue.split(" ")
  if ( x.length > 1) {
    breed = x[1]
    subtype = x[0]
    api_url = "https://dog.ceo/api/breed/" + breed + "/" + subtype + "/images"
    
  } else {
    breed = x[0]
    subtype = undefined
    api_url = "https://dog.ceo/api/breed/" + breed + "/images"
  }
  getapi(api_url)
}


paw.addEventListener("click", function() { 
  console.log("KURWAAA");
  paw.classList.remove("animation")

  setTimeout(function(){
    paw.classList.add("animation")
  }, 10)
 })

