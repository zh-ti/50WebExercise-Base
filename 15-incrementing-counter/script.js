window.onload = function(){
    const apps = document.querySelectorAll(".content h2");
    const follows = [32000, 50000, 11000]; //粉丝数量
    apps.forEach((item, index)=>{
        const num = Math.floor(follows[index] / 200);
        function increment(){
            if(item.innerText > follows[index]){
                item.innerText = follows[index];
            }else{
                item.innerText = item.innerText * 1 + num;
                setTimeout(increment, 1); //此处有参考源码
            }
        }
        increment();
    })
}