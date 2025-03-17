const chatDiv = document.getElementById("chat")
const submitButt = document.getElementById("submit")

let reyPrompt = document.createElement("div")

const AI_API_KEY = "AIzaSyCxpnMnKGmzJxLEty2Gbed-7NYLOLxMLMM"
let userMessage

function scrollToBottom() {
    
    chatDiv.scrollTo({ top: chatDiv.scrollHeight, behavior: "smooth" });
}



document.getElementById("textPrompt").addEventListener('keypress', function(event){
    let chat = document.getElementById("textPrompt").value;
    if(event.key === "Enter"){
        if(chat != ""){

            console.log(chat)
            
            let chatPrompt = document.createElement("div")
            let userHolder = document.createElement("div")
            
            
            
            chatPrompt.style.fontSize = "1.3rem" 
            chatPrompt.textContent = chat 
            chatPrompt.classList.add("prompt")
            
            
            userHolder.textContent = "USER"
            userHolder.classList.add("userHolder")
           
            
            event.preventDefault()
            document.getElementById("textPrompt").value = ''
            

            let reyHolder = document.createElement("div")
            let reyChat = document.createElement("div")
            reyChat.textContent = reyPrompt.textContent
            let reyIMG = document.createElement('img')
            
            reyHolder.classList.add("reyHolder")
            reyPrompt.classList.add("prompt")
            reyIMG.src = "ICONS/ReyPort_Logo-removebg-preview.png"
            reyHolder.textContent = "Rey"
            reyHolder.appendChild(reyIMG)

            generateResponse()

             chatDiv.appendChild(userHolder)
            chatDiv.appendChild(chatPrompt)
            chatDiv.appendChild(reyHolder)
            chatDiv.appendChild(reyPrompt)
            
            
            scrollToBottom()

        }
        else{
            event.preventDefault()

        }

    }
})

submitButt.addEventListener("click" , function(event) {
    let chat = document.getElementById("textPrompt").value;
        if(chat != ""){

            console.log(chat)
            
            let chatPrompt = document.createElement("div")
            let userHolder = document.createElement("div")
            
            chatPrompt.style.fontSize = "1.3rem" 
            chatPrompt.textContent = chat 
            chatPrompt.classList.add("prompt")
            
            userHolder.textContent = "USER"
            userHolder.classList.add("userHolder")
            
            
    

            chatDiv.appendChild(userHolder)
            chatDiv.appendChild(chatPrompt)
            
            event.preventDefault()
            document.getElementById("textPrompt").value = ''


            
            
            generateResponse()

            scrollToBottom()
        }
        else{
            event.preventDefault()

        }
})


generateResponse = () =>{
    const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`
    

    const requestOptions = {
        method: "POST",
      
        headers: { "Content-Type": "application/json" },
      
        body: JSON.stringify({ 
          
            contents: [{ 
            
            role: "user", 
            
            parts: [{ text: userMessage }] 
          }] 
        }),
      };


    fetch(API_URL, requestOptions).then(res => res.json()).then(data => {
        console.log(data)

        chatPrompt.textContent = data.choices[0].message.content

    }).catch((error)=> {
        reyPrompt.textContent = "SOMETHING WENT WRONG"
    })


}


