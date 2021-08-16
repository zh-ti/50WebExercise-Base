
window.onload = function(){
    const button = document.querySelector("button");
    button.addEventListener('click', click);
    function click(e){
        const effectEl = document.createElement("div");
        button.removeEventListener('click', click);
        effectEl.style.top = e.offsetY - 5 + "px";
        effectEl.style.left = e.offsetX - 5 + "px";
        effectEl.classList.add("effectEl");
        button.appendChild(effectEl);
        setTimeout(()=> {
            button.removeChild(effectEl);
        button.addEventListener('click', click);
        }, 300);
    }
}