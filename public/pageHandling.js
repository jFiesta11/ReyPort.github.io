let reyIcon = document.getElementById("imageDoggy")


// mobile = window.innerHeight >= window.innerWidth;


const popular = document.getElementById("popular")
const business = document.getElementById("business")
const entertainment = document.getElementById("entertainment")
const sports = document.getElementById("sports")
const tech = document.getElementById("tech")
const searchBtn = document.getElementById("searchBtn")
const searchInput = document.getElementById("searchInput")
const contentContainer = document.getElementById("contentContainer")
var newsArr = [];

const API_KEY = "caff0d98e08e4bcc9e63c837ab025c41"
const POPULAR_NEWS = "https://newsapi.org/v2/top-headlines?country=us&apiKey=caff0d98e08e4bcc9e63c837ab025c41"
const BUSINESS_NEWS = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=caff0d98e08e4bcc9e63c837ab025c41"
const ENTERTAINMENT_NEWS = "https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=caff0d98e08e4bcc9e63c837ab025c41"
const SPORTS_NEWS = "https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=caff0d98e08e4bcc9e63c837ab025c41"
const TECH_NEWS =  "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=caff0d98e08e4bcc9e63c837ab025c41"
const searchNews = "https://newsapi.org/v2/everything?q="

const article = document.getElementById("article")



window.onload = function(){
    fetchPopularNews()
}


 popular.addEventListener('click', function(){

    fetchPopularNews()
 }) 
 business.addEventListener('click', function(){
    fetchBusinessNews()
 }) 
 entertainment.addEventListener('click', function(){
    fetchEntertainmentNews()
 }) 
 sports.addEventListener('click', function(){
    fetchSportsNews()
 }) 
 tech.addEventListener('click', function(){
    fetchTechNews()
}) 
searchBtn.addEventListener('click', function(){
    fetchQueryNews();
})
searchInput.addEventListener("keydown", function(event){
        
            let search = searchInput.value
    
            if(event.key === "Enter"){
                if(search != ""){
                    fetchQueryNews()
    
                    event.preventDefault()
                }
                else{
                    event.preventDefault()
                }
}})


 const fetchPopularNews = async () => {
     for(let i = 0; i < button.length;i++){
         button.item(i).classList.remove("active")
        }
        button[0].classList.add("active")
    
    const respond = await fetch (POPULAR_NEWS)
        
    newsArr = []

    if(respond.status >= 200 && respond.status < 300){
        const JSon = await respond.json()
        console.log(JSon)
        newsArr = JSon.articles
    }else{
        console.log(respond.status, respond.statusText)
    }
    display()

 }
 const fetchBusinessNews = async () => {
    for(let i = 0; i < button.length;i++){
        button.item(i).classList.remove("active")
       }
       button[1].classList.add("active")

    const respond = await fetch (BUSINESS_NEWS)
    
    newsArr = []

    if(respond.status >= 200 && respond.status < 300){
        const JSon = await respond.json()
        console.log(JSon)
        newsArr = JSon.articles
    }else{
        console.log(respond.status, respond.statusText)
    }
    display()

 }
 const fetchEntertainmentNews = async () => {
    for(let i = 0; i < button.length;i++){
        button.item(i).classList.remove("active")
       }
       button[2].classList.add("active")
    
    
    const respond = await fetch (ENTERTAINMENT_NEWS)
    
    newsArr = []

    if(respond.status >= 200 && respond.status < 300){
        const JSon = await respond.json()
        console.log(JSon)
        newsArr = JSon.articles
    }else{
        console.log(respond.status, respond.statusText)
    }
    display()

 }
 const fetchSportsNews = async () => {
    
    for(let i = 0; i < button.length;i++){
        button.item(i).classList.remove("active")
       }
       button[3].classList.add("active")
    
    const respond = await fetch (SPORTS_NEWS)
    
    newsArr = []

    if(respond.status >= 200 && respond.status < 300){
        const JSon = await respond.json()
        console.log(JSon)
        newsArr = JSon.articles
    }else{
        console.log(respond.status, respond.statusText)
    }
    display()

 }
 const fetchTechNews = async () => {
    for(let i = 0; i < button.length;i++){
        button.item(i).classList.remove("active")
       }
       button[4].classList.add("active")
    
    
    const respond = await fetch (TECH_NEWS)
    
    newsArr = []    

    if(respond.status >= 200 && respond.status < 300){
        const JSon = await respond.json()
        console.log(JSon)
        newsArr = JSon.articles
    }else{
        console.log(respond.status, respond.statusText)
    }
    display()

 }
const fetchQueryNews = async() => {
    for(let i = 0; i < button.length;i++){
        button.item(i).classList.remove("active")
       }
    
    if(searchInput.value == null){
        return
    }

    const respond = await fetch (searchNews+encodeURIComponent(searchInput.value)+"&apiKey=" + API_KEY)

    newsArr = []

    if(respond.status >= 200 && respond.status < 300){
        const JSon = await respond.json()
        newsArr = JSon.articles

    }else{
        console.log(respond.status, respond.statusText)
        contentContainer.innerHTML = searchInput.value + "<h1>HELLO po</>"
    }
    display()
}

 function display(){        
    contentContainer.innerHTML = ""
   


    newsArr.forEach(news => {
        var date = news.publishedAt.split("T")

        var newsArticles = document.createElement("div")
        newsArticles.className = "article"
        newsArticles.id = "article"
    

        contentContainer.appendChild(newsArticles)
       
        var ArticleImg = document.createElement("div")
        ArticleImg.className = "artPic"
        ArticleImg.id = "artPic"
        
        newsArticles.appendChild(ArticleImg)
        
        var ArticleText = document.createElement("div")
        ArticleText.className = "artSum"
        ArticleText.id = "artSum"

        ArticleText.setAttribute("style" , "padding-left: 1.5vw; padding-right: 1.5vw; ")
        
        newsArticles.appendChild(ArticleText)

        
        var image = document.createElement('img')
        image.setAttribute("height" , "100%")
        image.setAttribute("width" , "100%")
        image.setAttribute("style" , "border-radius:1.5vw;")
        image.src = news.urlToImage
        
        ArticleImg.appendChild(image)
        if(news.urlToImage == null){
            ArticleImg.removeChild(image)
            ArticleImg.innerHTML = "<h1>No Image Found...</h1>"
        }
        
        var newsHeadline = document.createElement("h4")
        newsHeadline.textContent = news.title
        ArticleText.appendChild(newsHeadline)
        
        var newsDescription = document.createElement("h6")
        newsDescription.textContent = news.description
        ArticleText.appendChild(newsDescription)
            if(news.description == null){
                newsDescription.innerHTML = "<h3>CLICK THE ARTICLE FOR MORE INFO...</h3>"
            }

        var newsAuthor = document.createElement("h5")
        newsAuthor.textContent ="BY:" + news.author
        ArticleText.appendChild(newsAuthor) 
        if(news.author == "" || news.author == null){
            newsAuthor.innerHTML = "BY: Anonymous"
        }
        newsAuthor.style.color = "#5d2629"

        var newsTime = document.createElement("h5")
        newsTime.textContent = date[0]
        newsTime.style.color = "#5d2629"
        ArticleText.appendChild(newsTime)
        
        ArticleText.onclick = function(){
            window.open(news.url, "_blank");
        }
        ArticleImg.onclick = function(){
            window.open(news.url, "_blank");
        }


        if(mobile){
            image.style.transform = "rotate(270deg)"
            image.setAttribute("height" , "50%")
            image.setAttribute("width" , "500px")

            newsHeadline.style.transform = "rotate(270deg)"
                
            newsDescription.style.transform = "rotate(270deg)"
            // newsDescription.style.height = "500px" 
            // newsDescription.style.width = "50px" 
            newsAuthor.style.transform = "rotate(270deg)"
            newsTime.style.transform = "rotate(270deg)"

            newsAuthor.remove()
            newsTime.remove()

            ArticleText.setAttribute("style" , "padding-left: 0; padding-right: 0vw; ")

        }

    });
    

}   