window.onload = function(){
    const blocks = document.querySelectorAll(".block");
    window.addEventListener('scroll', slideIn);
    function slideIn(){
        blocks.forEach((block)=>{
            //获取 block 元素底部到可显示区域顶部的距离
            clientBottom = block.getBoundingClientRect().bottom
            if(window.innerHeight - clientBottom <= 0){
                block.classList.remove("slide-in");
            }else{
                block.classList.add("slide-in");
            }
        })
    }
    slideIn();
}