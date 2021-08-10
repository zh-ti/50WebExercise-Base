window.onload = function(){
    const imgs = document.querySelectorAll(".img");
    imgs.forEach((item, index)=>{
        item.addEventListener("click", ()=>{
            //判断 img 的 class 是否带有 active 
            if(item.classList.value.indexOf("active") == -1){
                imgs.forEach((item, index)=>{
                    if(item.classList.value.indexOf("active") != -1){
                        //使 class 已经带有的 active 的 img，移除 active
                        item.classList.remove("active");
                    }
                })
            }
            //为被点击的 img 的 class 添加 active
            item.classList.add("active");
        })
    })
}