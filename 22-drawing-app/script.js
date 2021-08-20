window.onload = function(){
    const brushSizeBtn = document.querySelectorAll(".brush-size button");
    const brushColorBtn = document.querySelector(".brush-color input");
    const canvasControls = document.querySelectorAll(".right span");
    const putPoint = document.querySelector(".put-point");
    const canvas = document.querySelector("canvas");
    const canvasContainer = document.querySelector(".canvas");
    const cxt = canvas.getContext("2d");
    let brushSize, allowDraw = false, originX, originY;

    cxt.lineCap = "round";
    cxt.lineJoin = "round"
    setBrushSize(20)
    changeBtnColor()

    brushColorBtn.addEventListener('input', changeBtnColor)
    document.addEventListener('mousemove', e =>{
        putPoint.style.top = e.clientY - canvasContainer.parentNode.offsetTop + 60 + "px";
        putPoint.style.left = e.clientX - canvasContainer.parentNode.offsetLeft + 5 + "px";
    })
    document.addEventListener("mousedown", ()=>{
        allowDraw = true;
        originX = putPoint.offsetLeft + putPoint.offsetWidth/2;
        originY = putPoint.offsetTop + putPoint.offsetHeight/2;
        drawCircle()
    });
    document.addEventListener("mouseup", ()=>allowDraw = false);
    document.addEventListener("mousemove", ()=>{
        if(allowDraw){
            drawCircle()
            drawLine()
        }
    })
    brushSizeBtn.forEach((btn)=>{
        btn.addEventListener('click', ()=>{
            brushSizeBtn.forEach((btn)=>btn.classList.remove("focus"));
            btn.classList.add("focus");
            putPoint.style.width = btn.offsetWidth + "px";
            putPoint.style.height = btn.offsetHeight + "px";
            setBrushSize(btn.offsetWidth);
        })
    })

    canvasControls.forEach((item, index)=>{
        item.addEventListener('click', ()=>{
            canvasControls.forEach((item)=>item.classList.remove("focus"));
            item.classList.add("focus");
            if(index == 0){
                document.body.style.cursor = "url(./image/brush.ico), auto";
                setBrushColor(brushColorBtn.value)
            }else if(index == 1){
                document.body.style.cursor = "url(./image/rubber.ico), auto";
                setBrushColor("#fff");
            }else if(index == 2){
                setBrushColor("#fff");
                cxt.fillRect(0,0,canvas.offsetWidth, canvas.offsetHeight)
                setTimeout(()=>{
                    item.classList.remove("focus")
                    canvasControls[0].click()
                }, 500)
            }
        })
    })

    //改变按钮颜色，并自动改变画笔颜色
    function changeBtnColor(){
        brushSizeBtn.forEach((btn)=>btn.style.backgroundColor = brushColorBtn.value);
        setBrushColor(brushColorBtn.value)
    }
    //画圆
    function drawCircle(){
        cxt.beginPath()
        const x = putPoint.offsetLeft + putPoint.offsetWidth/2;
        const y = putPoint.offsetTop + putPoint.offsetHeight/2;
        cxt.arc(x, y, brushSize/2, 0, Math.PI*2);
        cxt.fill()
        cxt.closePath()
    }
    //画线
    function drawLine(){
        const x = putPoint.offsetLeft + putPoint.offsetWidth/2;
        const y = putPoint.offsetTop + putPoint.offsetHeight/2;
        cxt.beginPath()
        cxt.moveTo(originX, originY);
        cxt.lineTo(x, y);
        cxt.stroke();
        cxt.closePath();
        originX = x;
        originY = y;
    }
    //设置画笔大小
    function setBrushSize(size){
        brushSize = size;
        cxt.lineWidth = size;
    }
    //改变画笔颜色
    function setBrushColor(color){
        cxt.fillStyle = color;
        cxt.strokeStyle = color;
    }
}