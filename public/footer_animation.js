
let interval;
let i = 0
let slide = document.querySelectorAll(".slide")
let box = document.querySelectorAll(".boxes")


function showSlider(index){
    box.forEach(b => b.classList.remove("active"));
    slide.forEach(s => s.classList.remove("active"));
    

    box[index].classList.add("active")
    slide[index].classList.add("active")

    i = index
}
slide.forEach(s => {
    s.addEventListener('click', ()=>{
        showSlider(Number(s.dataset.index))
        restartSlider()
    })
});

function autoSlider(){
    
    interval = setInterval(() => {
        let nextB = (i+1) % box.length;
        
        showSlider(nextB)   

    }, 10000);

}

function restartSlider(){
    clearInterval(interval)
    autoSlider()
}

console.log(slide.length, box.length)


autoSlider()