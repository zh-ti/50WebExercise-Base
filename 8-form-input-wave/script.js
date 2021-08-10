window.onload = function(){
    const labelTexts = document.querySelectorAll("label .text");
    const inputs = document.querySelectorAll("label input");
    labelTexts.forEach((text)=>{
        const content = text.innerHTML.split('');
        text.innerHTML = '';
        content.forEach((word)=>{
            const span = document.createElement("span");
            span.innerHTML = word;
            text.appendChild(span);
        })
    })
    inputs.forEach((inputLine, index)=>{
        const words = [...labelTexts[index].children];
        inputLine.addEventListener('focus', focus)
        function focus(){
            let i = 0;
            const timer = setInterval(()=>{
                words[i].classList.remove("move-down");
                words[i].classList.add("move-up");
                ++i >= words.length && clearInterval(timer);
            }, 50)
            inputLine.addEventListener('blur', blur)
            input();
        }
        function blur(){
            let i = 0;
            const timer = setInterval(()=>{
                words[i].classList.remove("move-up");
                words[i].classList.add("move-down");
                ++i >= words.length && clearInterval(timer);
            }, 50)
        }
        function input(){
            inputLine.addEventListener("input", ()=>{
                if(inputLine.value.length != 0){
                    inputLine.removeEventListener("blur", blur);
                }else{
                    inputLine.addEventListener('blur', blur);
                }
            })
        }
    })
}