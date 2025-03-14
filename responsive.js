const button = document.getElementsByClassName("buttons")

function pageHandle(){
    for(let i = 0 ; i < button.length ;i++){
        button.item(i).addEventListener('click' , function(event){
            button.item(i).style.backgroundColor = "red"
        })
    }
}



function adaptiveHaderLogos(){
        let myArray = new Array(button.length)
            for(let i = 0 ; i < button.length ; i++){
                myArray[i] = button.item(i).textContent;
            }
        
            if (window.innerWidth <= window.innerHeight){
                for(let i = 0 ; i < button.length;i++ ){
                    button.item(i).textContent = " "  
                }
            } 

            window.addEventListener('resize' , ()=>{

            if (window.innerWidth <= window.innerHeight){
                for(let i = 0 ; i < button.length;i++ ){
                    button.item(i).textContent = " "  
                }
            } 
            else{
                for(let i = 0 ; i < button.length;i++ ){
                    button.item(i).textContent =   myArray[i]

        }
            }


        })
}


function responsiveSearch() {
    let searchButton = document.getElementById("searchInputContainer");
    let searchButtonActive = false;
    let mobile = window.innerHeight >= window.innerWidth; // Determine initial state
    let appearingInput = document.getElementById("appearingInput")

    function handleClick() {
        if (mobile) { // Only run this logic on mobile
            searchButtonActive = !searchButtonActive;
            // searchButton.style.backgroundColor = searchButtonActive ? "red" : "blue";
            
            if(searchButtonActive == true){

            appearingInput.style.width = "100%"
            appearingInput.style.left = "0"
            appearingInput.style.transition = ".3s ease"
            appearingInput.focus()
        }
        else{
            appearingInput.style.width = "0%"
            appearingInput.style.left = "-15px"
            appearingInput.style.transition = ".3s ease"
        }

        }
    }



    function handleResize() {
        mobile = window.innerHeight >= window.innerWidth;

        if (!mobile) {
            searchButton.removeEventListener('click', handleClick);
        } else {
            searchButton.addEventListener('click', handleClick);
        }
    }

    // Initialize event listeners
    window.addEventListener('resize', handleResize);
    handleResize(); // Run once to set initial state
}
function flipContents(){
    artSum =document.getElementById("artSum")
    artPic =document.getElementById("artPic")
}

responsiveSearch();

 

adaptiveHaderLogos()
