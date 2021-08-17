window.onload = function(){
    const putAreas = document.querySelectorAll("div");
    const image = document.querySelector(".image");
    image.src = `./image/img${Math.floor(Math.random() * 5) + 1}.jpg`

    putAreas.forEach((item)=>{
        item.addEventListener("dragenter", e =>{
            if(e.target == image) return;
            e.target.classList.add("primary");
        })
        item.addEventListener("dragleave", e => e.target.classList.remove("primary"))
        //由于浏览器默认不允许放置，因此需要取消默认事件
        item.addEventListener("dragover", e => e.preventDefault())
        item.addEventListener("drop", e =>{
            e.preventDefault(); //由于浏览器默认不允许放置，因此需要取消默认事件
            putAreas.forEach((item) => item.classList.remove("primary"))                                                                                                                                                                                                                                                                                 
            if(e.target == image) return;
            e.target.appendChild(image);
        })
    })
}