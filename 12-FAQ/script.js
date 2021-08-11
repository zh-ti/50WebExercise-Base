window.onload = function(){
    const questions = document.querySelectorAll(".question");
    const closes = document.querySelectorAll(".icon-chahao");
    const opens = document.querySelectorAll(".icon-xiajiantou");
    opens.forEach((item, index)=>{
        item.addEventListener("click", ()=>{
            questions[index].classList.add("showResult");
        })
    })
    closes.forEach((item, index)=>{
        item.addEventListener("click", ()=>{
            questions[index].classList.remove("showResult");
        })
    })
}