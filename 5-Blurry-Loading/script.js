window.onload = function(){
    const percent = document.querySelector(".percent");
    const background = document.querySelector(".background");
    let percentNum = 0;
    const timer = setInterval(()=>{
        percent.innerHTML = `${percentNum}%`;
        background.style.filter = `blur(${(100 - percentNum) / 5}px)`;
        percent.style.opacity = `${1 - percentNum / 100}`;
        ++percentNum >= 100 && clearInterval(timer);
    }, 20);
}