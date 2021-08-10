window.onload = function(){
    const [left,right] = document.querySelectorAll(".goods");
    left.addEventListener('mouseover', ()=>{
        right.classList.add("shrink")
    })
    left.addEventListener('mouseout', ()=>{
        right.classList.remove("shrink")
    })
    right.addEventListener("mouseover", ()=>{
        left.classList.add("shrink")
    })
    right.addEventListener('mouseout', ()=>{
        left.classList.remove("shrink");
    })
}