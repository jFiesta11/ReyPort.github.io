let user_input = document.getElementById("textPrompt")
let submit = document.getElementById("submit")
let chat_box = document.getElementById("chat")


document.getElementById("chatDoggy").addEventListener('click', ()=>{
    chat_box.innerHTML = ''
})

async function send_question() {
            console.log("hey im working! you typed: " + user_input.value)

                let user_holder = document.createElement('div')
                let user_prompt = document.createElement('div')
                user_holder.className = "userHolder"
                user_prompt.className = "prompt"
                
                chat_box.appendChild(user_holder)

                user_prompt.textContent = user_input.value
                user_holder.appendChild(user_prompt)
            let question = user_input.value 
            
            askRey(question)

            user_input.value= ""

                    chat_box.scrollTop = chat_box.scrollHeight

            
}

user_input.addEventListener('keydown', (k) =>{
    if(k.key == 'Enter'){
    if(!k.shiftKey){
        k.preventDefault()
        send_question()
        }
    }

})

submit.addEventListener('click', () =>{
            send_question()
})


async function askRey(question) {
    let rey_holder = document.createElement('div')
    rey_holder.className = "reyHolder"
    
    let rey_icon = document.createElement('img')
    rey_icon.className = "reyBot"
    rey_icon.src = "ICONS/LogoNew.png"

    let rey_prompt = document.createElement('div')
    rey_prompt.className = "reyPrompt"
    
        chat_box.appendChild(rey_holder)
        rey_holder.appendChild(rey_icon)
        rey_holder.appendChild(rey_prompt)
        rey_prompt.classList.add("loading")
    
    
    const response = await fetch('/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: question })
    });

    const data = await response.json();
       
        
        rey_prompt.classList.remove("loading")
        rey_prompt.textContent = data.answer;

        chat_box.scrollTop = chat_box.scrollHeight
    
  
}