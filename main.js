
let rey = document.getElementById("reyPull");
let chat = document.getElementById("chatParent")
let chatAct = false;
let closeButt = document.getElementById("closeButt")




rey.addEventListener('click', ()=>{
    if(window.innerWidth <= innerHeight){
        chat.style.right="0"
        chat.style.width= "65vw"
        chatAct = true;    
        



    }
    else{
        chat.style.width= "25vw"
        chat.style.right="0"
        chatAct = true;
        
    }
    if(chatAct == true){
        closeButt.addEventListener('click' , function(event){
                chatAct = false
                chat.style.right="-100%"
            
        })
    }   
});





 