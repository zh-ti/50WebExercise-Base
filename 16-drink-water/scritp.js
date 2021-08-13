window.onload = function(){
    const bottles = document.querySelectorAll(".bottle");
    const container = document.querySelector(".container");
    const [remained, already] = document.querySelectorAll(".container > *");
    const [remainedTextl, alreadyText] = document.querySelectorAll(".container > * > h3");
    bottles.forEach((item, index)=>{
        item.addEventListener('click', ()=>{
            for(let i of bottles.keys()){
                if(i <= index){
                    bottles[i].classList.add("actived")
                }else{
                    bottles[i].classList.remove("actived")
                }
            }
            const alreadyH = container.offsetHeight / 8 * (index + 1);
            already.style.height = alreadyH + "px"
            remained.style.height = container.offsetHeight - alreadyH + "px";
            alreadyText.innerText = (index + 1) * 100 / 8 + "%";
            remainedTextl.innerText = 2 - 2 * (index + 1) / 8 + "L"
        })
    })
}