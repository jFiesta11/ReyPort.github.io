t w// let searchInput = document.getElementById("searchInput") 
let searchButton = document.getElementById("searchBtn")

function search(){
    searchInput.addEventListener('keypress' , function(event){
        
        let search = searchInput.value

        if(event.key === "Enter"){
            if(search != ""){
                console.log(search)

                event.preventDefault()
                document.getElementById("searchInput").value = ''
            }
            else{
                event.preventDefault()
            }
        }
    })
}

function searchButtonEvent(){
    searchButton.addEventListener('click' , function(event){
        
        let search = searchInput.value

            if(search != ""){
                console.log(search)

                event.preventDefault()
                document.getElementById("searchInput").value = ''
            }
            else{
                event.preventDefault()
            }
    })
}

// mobile port

function mobileSearch(){
    let mobileSearchBar = document.getElementById("appearingInput")    

    mobileSearchBar.addEventListener("keypress" , function(event){
        if(event.key === "Enter"){
            if(mobileSearchBar.value != ""){
                console.log(mobileSearchBar.value)

                event.preventDefault()
                document.getElementById("appearingInput").value = ''
            }
        
        else{
            event.preventDefault()
        }
        }
    })

}

if(window.innerHeight >= innerWidth){
    mobileSearch()
}
else{
searchButtonEvent()
search()
}