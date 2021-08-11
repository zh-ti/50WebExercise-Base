window.onload = function(){
    const speed = 200;
    let prevChoice, crrent; // 存储上一个 choice 和已经随机的次数
    const input = document.querySelector("input");
    const [add,start] = document.querySelectorAll("button");
    const showArea = document.querySelector(".show-area");

    add.addEventListener('click', addItem);
    start.addEventListener('click', choose);
    document.addEventListener('keydown', (e)=>{
        e.key == "Enter" && addItem();
        if(e.ctrlKey && e.key == "Enter")choose();
    });

    function addItem(){
        if(input.value.trim().length != 0){
            const item = document.createElement("span");
            item.innerText = input.value;
            input.value = '';
            showArea.appendChild(item);
        }
    }
    function choose(){
        crrent = 0;
        const choices = document.querySelectorAll(".show-area span");
        let times = choices.length * 3;
        times > 50 && (times = 50);
        if(choices.length > 0){
            const timer = setInterval(()=>{
                ++crrent >= times && clearInterval(timer);
                const index = Math.floor(Math.random() * choices.length);
                prevChoice && prevChoice.classList.remove("chose");
                prevChoice = choices[index];
                setTimeout(()=>{
                    choices[index].classList.add("chose");
                }, 50);
            }, speed);
        }
    }
}