window.onload = function(){
    const button = document.querySelector("button");
    const lines = [...button.children];
    const links = document.querySelector(".links");
    button.addEventListener("click", ()=>{
        links.classList.toggle("close");
        button.classList.toggle("cross");
        if(button.classList.value.indexOf("cross") != -1){
            setTimeout(()=>{
                lines.forEach((line)=>line.classList.toggle("absolute"));
            }, 460);
        }else{
            lines.forEach((line)=>line.classList.remove("absolute"));
        }
    })
}