window.onload = function(){
    const img = document.querySelector("main .img");
    const body = document.querySelector("body");
    const [prev, next] = document.querySelectorAll("main span");

    let i = 1;
    prev.addEventListener('click', ()=>{
        i <= 1 ? i = 9 : i--;
        img.style.backgroundImage = `url('./image/${i}.jpg')`
        body.style.backgroundImage = `url('./image/${i}.jpg')`
    })
    next.addEventListener('click', ()=>{
        i >= 9 ? i = 1 : i++;
        img.style.backgroundImage = `url('./image/${i}.jpg')`
        body.style.backgroundImage = `url('./image/${i}.jpg')`
    })
}