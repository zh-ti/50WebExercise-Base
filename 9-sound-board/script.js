window.onload = function(){
    const buttons = document.querySelectorAll(".sound");
    const sounds = document.querySelectorAll(".sound audio");
    let playing = null; //用于记录正在播放的音频
    buttons.forEach((btn, index)=>{
        btn.addEventListener('click', ()=>{
            btn.classList.add("actived");
            setTimeout(()=>btn.classList.remove("actived"), 200);
            playing != null && playing.pause();
            playing = sounds[index];
            sounds[index].currentTime = 0;
            sounds[index].play();
        })
    })
}