document.getElementById("imageDoggy").addEventListener('click', ()=>{
    window.location.reload()
})

let rey = document.getElementById("reyPull");
let chat = document.getElementById("chatParent")
let chatAct = false;
let closeButt = document.getElementById("closeButt")

let AU_SSCLogo = document.getElementById("AU_SSCLogo")
let AU_SSCButt = document.getElementsByClassName("SSC_Logo").item(0)
let AU_Bool = false

let article_sum = document.querySelectorAll(".artSum")

let navBox = document.querySelectorAll("navButt");


let searchContainer = document.querySelectorAll("searchBox")
let searchInputCont = document.getElementById("searchInputContainer")
let searchButton = document.getElementById("searchBtn")

rey.addEventListener('click', ()=>{
    if(chatAct == false){
        chatAct = true
        chat.style.right = "0"
    }

    if(chatAct == true){
        closeButt.addEventListener('click' , function(event){
                chatAct = false
                chat.style.right="-30%"
            
        })
    }   
});

AU_SSCButt.addEventListener('click', ()=>{
    
    if(AU_Bool == false){
        AU_Bool = true
        AU_SSCLogo.style.opacity = ".5"

        article_sum.forEach(item => {
            item.style.opacity = ".8"
        })
        
    }
    else{
            AU_SSCLogo.style.opacity="0"
            AU_Bool = false

            
        article_sum.forEach(item => {
            item.style.opacity = "1"
        })
        
    }   
})





 