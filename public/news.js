// let reyIcon = document.getElementById("imageDoggy")
//     reyIcon.addEventListener("click" , ()=>{
//             location.reload()
//     })
const news_api_key = '68c5ab8d9fa0a7d100fd2f0b884b4547'
var newsArray = []
// let article_img = document.querySelectorAll(.) 
let article = document.querySelectorAll(".article")
let contentContainer = document.getElementById("contentContainer")
let query_input = document.getElementById("searchBar")
let search_button = document.getElementById("searchBtn")
let loading = true;

let pop = document.getElementById("popular")
let bus = document.getElementById("business")
let ent = document.getElementById("entertainment")
let sci = document.getElementById("science")
let spo = document.getElementById("sports")
let tech = document.getElementById("tech")
let health = document.getElementById("health")
let world = document.getElementById("world")
let buttons = document.querySelectorAll(".buttons")

pop.addEventListener('click', ()=>{fetchNews()})
bus.addEventListener('click', ()=>{fetchBusiness()})
ent.addEventListener('click', ()=>{fetchEntertn()})
sci.addEventListener('click', ()=>{fetchSci()})
spo.addEventListener('click', ()=>{fetchSports()})
tech.addEventListener('click', ()=>{fetchTech()})
health.addEventListener('click', ()=>{fetchHealth()})
world.addEventListener('click', ()=>{fetchWorld()})

query_input.addEventListener('keydown', (e)=>{
    if (e.key !== "Enter") return;

  e.preventDefault();
  const input = query_input.value.trim();

  if (input) fetchQuery();
})

search_button.addEventListener('click', ()=>{
  const input = query_input.value.trim();

  if (input) fetchQuery();
})

function placeholders(){
    for(let i = 0; i < 10; i++){

        let article = document.createElement("div")
            article.className = "article"
            article.id = "article"

                contentContainer.appendChild(article)
        
        let picture_container = document.createElement("div")
            picture_container.className = "artPic"
            picture_container.id = "artPic"
                
                article.appendChild(picture_container)
            
        let summary = document.createElement("div")
            summary.className = "artSum"
            summary.id = "artSum"

            article.classList.add("load")
            picture_container.classList.add("load")
            summary.classList.add("load")

                article.appendChild(summary)
    }
}

window.onload = function(){
    fetchNews()
}

async function fetchNews() {
    for(let i = 0; i < buttons.length;i++){
        buttons.item(i).classList.remove("active")
    }
        buttons[0].classList.add("active")
    
    loading = true 
    try {
        // https://gnews.io/api/v4/{endpoint}?{parameters}&apikey=YOUR_API_KEY? //
        const response = await fetch(`https://gnews.io/api/v4/top-headlines?category=general&country=us&apikey=${news_api_key}`)

        if(!response.ok){
           
            throw new Error("ERROR FETCHING DATA")
        }
        newsArray = []

        const newsData = await response.json()
        
        newsArray = newsData.articles
        loading = false
        console.log(newsData)
        
    } catch (error) {
        loading = false
        console.error(error)        
    }
    displayNews()
}
async function fetchBusiness() {
        for(let i = 0; i < buttons.length;i++){
        buttons.item(i).classList.remove("active")
    }
        buttons[1].classList.add("active")
    
    
    loading = true
    try {
                        // https://gnews.io/api/v4/{endpoint}?{parameters}&apikey=YOUR_API_KEY? //
        const Bresponse = await fetch(`https://gnews.io/api/v4/top-headlines?category=business&country=us&apikey=${news_api_key}`)

        if(!Bresponse.ok){
            throw new Error("ERROR FETCHING DATA")
        }
        newsArray = []

        const newsData = await Bresponse.json()
        loading = false

        newsArray = newsData.articles
        console.log(newsData)
        displayNews()

    } catch (error) {
        loading = false
        console.error(error)        
    }
}
async function fetchEntertn() {
        for(let i = 0; i < buttons.length;i++){
        buttons.item(i).classList.remove("active")
    }
        buttons[2].classList.add("active")
    
    
    loading = true
    try {
                        // https://gnews.io/api/v4/{endpoint}?{parameters}&apikey=YOUR_API_KEY? //
        const Eresponse = await fetch(`https://gnews.io/api/v4/top-headlines?category=entertainment&country=us&apikey=${news_api_key}`)

        if(!Eresponse.ok){
            throw new Error("ERROR FETCHING DATA")
        }
        newsArray = []

        const newsData = await Eresponse.json()
        
        
        loading = false
        newsArray = newsData.articles
        console.log(newsData)
        displayNews()

    } catch (error) {
        loading = false
        console.error(error)        
    }
}
async function fetchSci() {
        for(let i = 0; i < buttons.length;i++){
        buttons.item(i).classList.remove("active")
    }
        buttons[3].classList.add("active")
    
    
    loading = true
    try {
                        // https://gnews.io/api/v4/{endpoint}?{parameters}&apikey=YOUR_API_KEY? //
        const Sci_response = await fetch(`https://gnews.io/api/v4/top-headlines?category=science&country=us&apikey=${news_api_key}`)

        if(!Sci_response.ok){
            throw new Error("ERROR FETCHING DATA")
        }
        newsArray = []

        const newsData = await Sci_response.json()
        
        newsArray = newsData.articles
        loading = false
        console.log(newsData)
        displayNews()

    } catch (error) {
        loading = false
        console.error(error)        
    }
}
async function fetchSports() {
        for(let i = 0; i < buttons.length;i++){
        buttons.item(i).classList.remove("active")
    }
        buttons[4].classList.add("active")
    
    
    loading = true
    try {
                        // https://gnews.io/api/v4/{endpoint}?{parameters}&apikey=YOUR_API_KEY? //
        const sports_response = await fetch(`https://gnews.io/api/v4/top-headlines?category=sports&country=us&apikey=${news_api_key}`)

        if(!sports_response.ok){
            throw new Error("ERROR FETCHING DATA")
        }
        newsArray = []

        const newsData = await sports_response.json()
        
        newsArray = newsData.articles
        loading = false
        console.log(newsData)
        displayNews()

    } catch (error) {
        loading = false
        console.error(error)        
    }
}
async function fetchTech() {
        for(let i = 0; i < buttons.length;i++){
        buttons.item(i).classList.remove("active")
    }
        buttons[5].classList.add("active")
    
    
    loading = true
    try {
                        // https://gnews.io/api/v4/{endpoint}?{parameters}&apikey=YOUR_API_KEY? //
        const tech_response = await fetch(`https://gnews.io/api/v4/top-headlines?category=technology&country=us&apikey=${news_api_key}`)

        if(!tech_response.ok){
            throw new Error("ERROR FETCHING DATA")
        }
        newsArray = []

        const newsData = await tech_response.json()
        
        newsArray = newsData.articles
        loading = false
        console.log(newsData)
        displayNews()
    } catch (error) {
        loading = false
        console.error(error)        
    }
}
async function fetchHealth() {
        for(let i = 0; i < buttons.length;i++){
        buttons.item(i).classList.remove("active")
    }
        buttons[6].classList.add("active")
    
    
    loading = true
    try {
                        // https://gnews.io/api/v4/{endpoint}?{parameters}&apikey=YOUR_API_KEY? //
        const Hresponse = await fetch(`https://gnews.io/api/v4/top-headlines?category=health&country=us&apikey=${news_api_key}`)

        if(!Hresponse.ok){
            throw new Error("ERROR FETCHING DATA")
        }
        newsArray = []

        const newsData = await Hresponse.json()
        
        newsArray = newsData.articles
        loading = false
        console.log(newsData)
        displayNews()

    } catch (error) {
        loading = false
        console.error(error)        
    }
}
async function fetchWorld() {
        for(let i = 0; i < buttons.length;i++){
        buttons.item(i).classList.remove("active")
    }
        buttons[7].classList.add("active")
    
    
    loading = true
    try {
                        // https://gnews.io/api/v4/{endpoint}?{parameters}&apikey=YOUR_API_KEY? //
        const Wresponse = await fetch(`https://gnews.io/api/v4/top-headlines?category=world&country=us&apikey=${news_api_key}`)

        if(!Wresponse.ok){
            throw new Error("ERROR FETCHING DATA")
        }
        newsArray = []

        const newsData = await Wresponse.json()
        
        newsArray = newsData.articles
        loading = false
        console.log(newsData)
        displayNews()

    } catch (error) {
        loading = false
        console.error(error)        
    }
}
async function fetchQuery() {
        for(let i = 0; i < buttons.length;i++){
        buttons.item(i).classList.remove("active")
    }
    
    loading = true
    try {
         if(query_input.value == null){return}
        let search = "https://gnews.io/api/v4/search?q="
                        // https://gnews.io/api/v4/{endpoint}?{parameters}&apikey=YOUR_API_KEY? //
        const query_response = await fetch(search+encodeURIComponent(query_input.value)+"&apikey="+news_api_key)

        if(!query_response.ok){
            throw new Error("ERROR FETCHING DATA")
        }
        newsArray = []

        const newsData = await query_response.json()
        
        newsArray = newsData.articles
        loading = false

        displayNews()
        

    } catch (error) {
        loading = false
        console.error(error)        
    }
}


function displayNews(){
    contentContainer.innerHTML = ""
    
    newsArray.forEach((news) => {
        var news_date = news.publishedAt.split("T")

        let article = document.createElement("div")
            article.className = "article"
            article.id = "article"

                contentContainer.appendChild(article)
        
        let picture_container = document.createElement("div")
            picture_container.className = "artPic"
            picture_container.id = "artPic"
                
                article.appendChild(picture_container)
        
        let picture = document.createElement("div")
            picture.className = "article_pic"
            picture.id = "article_pic"

                picture_container.appendChild(picture)
            
        let summary = document.createElement("div")
            summary.className = "artSum"
            summary.id = "artSum"

                article.appendChild(summary)
        
        let headline = document.createElement("div")
            headline.className = "article_headline"
            headline.id = "article_headline"

                headline.textContent = news.title
                summary.appendChild(headline)

        
        let date = document.createElement("div")
            date.className = "article_date"
            date.id = "article_date"

                date.textContent = news_date[0]
                summary.appendChild(date)
        
        let author = document.createElement("div")
            author.className = "article_author"
            author.id = "article_author"

            if(news.source.name == "" || news.source.name == null){
            author.innerHTML = "By: Anonymous"
        }

                author.textContent ="By: " + news.source.name
                summary.appendChild(author)
        
        let desc = document.createElement("div")
            desc.className = "article_desc"
            desc.id = "article_desc"

                desc.textContent = news.description
                summary.appendChild(desc)

        
        let article_image = document.createElement("img")
            

            article_image.src = news.image

            picture.appendChild(article_image)
            

        desc.onclick = function(){
            window.open(news.url, "_blank");
        }
        picture.onclick = function(){
            window.open(news.url, "_blank");
        }

    })
}

placeholders()


/*function createShitHeads(amount = 10) {
  const container = document.querySelector("#container"); // parent element

  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");   // create div
    div.classList.add("shitHead");               // apply CSS class
    container.appendChild(div);                  // attach to DOM
  }
}

createShitHeads(10); */