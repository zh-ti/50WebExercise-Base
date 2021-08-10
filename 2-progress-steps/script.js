window.onload = function(){
    const steps = document.querySelectorAll(".step");
    const progressBar = document.querySelector(".progress-bar");
    const buttons = document.querySelectorAll(".buttons button");

    let crrentStep = 0, crrent; //记录正在被激活的 step 和其下标

    buttons[0].addEventListener("click",()=>{
        if(crrentStep > 0){
            crrentStep == 1 && buttons[0].classList.add("useless");
            buttons[1].classList.remove("useless");
            crrent = steps[crrentStep];
            crrent.classList.remove("done");
            crrent = steps[--crrentStep];
            //设置 progress 的 width
            progressBar.style.width = crrent.offsetLeft + crrent.offsetWidth / 2 + "px"
        }
    })
    buttons[1].addEventListener("click",()=>{
        if(crrentStep < steps.length - 1){
            buttons[0].classList.remove("useless");
            crrentStep >= steps.length - 2 && buttons[1].classList.add("useless");
            crrent = steps[++crrentStep];
            crrent.classList.add("done");
            //设置 progress 的 width
            progressBar.style.width = crrent.offsetLeft + crrent.offsetWidth / 2 + "px"
        }
    })
}