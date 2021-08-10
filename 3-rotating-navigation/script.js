window.onload = function(){
    const container = document.querySelector('.container');
    const circle = document.querySelector('.circle');
    const [open, close] = document.querySelectorAll('.circle span');
    const btnBox = document.querySelector(".buttons");

    close.addEventListener('click', ()=>{
        container.classList.remove("open");
        circle.classList.remove("rotate");
        btnBox.classList.remove("show")
    })
    open.addEventListener('click', ()=>{
        container.classList.add("open");
        circle.classList.add("rotate");
        btnBox.classList.add("show");
    })
}