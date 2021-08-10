window.onload = function(){
    const first = document.querySelector(".first");
    const reals = document.querySelectorAll(".block");
    const [key, keyCode, code] = [...document.querySelectorAll(".block div")];
    document.addEventListener('keydown', (e)=>{
        e.preventDefault()
        first.style.display = "none";
        reals.forEach((item)=>item.style.display = "block");
        key.innerText = e.key;
        keyCode.innerText = e.keyCode;
        code.innerText = e.code;
    })
}