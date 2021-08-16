window.onload = function(){
    const body = document.querySelector("body");
    const modeBtn = document.querySelector(".mode");
    const [hour,,minute,half] = document.querySelectorAll("h2 span");
    const [week, month, day] = document.querySelectorAll("p span");
    const [hourPointer, minutePointer, secoundPointer] = document.querySelectorAll(".clock > div");
    let secondRound = minuteRound = hourRound = 0;

    function MyDate(date){
        return {
            hours: date.getHours(),
            minutes: date.getMinutes(),
            seconds: date.getSeconds(),
            day: date.getDate(),
            getWeek: function(){
                switch(date.getDay()){
                    case 0:
                        return "Sunday";
                    case 1:
                        return "Monday";
                    case 2:
                        return "Tuesday";
                    case 3:
                        return "Wednesday";
                    case 4:
                        return "Thursday"
                    case 5:
                        return "Friday";
                    case 6:
                        return "Saturday";
                }
            },
            getMonth: function(){
                switch(date.getMonth()){
                    case 0:
                        return "JAN";
                    case 1:
                        return "FEB";
                    case 2:
                        return "MAR";
                    case 3:
                        return "APR";
                    case 4:
                        return "MAY";
                    case 5:
                        return "JUN";
                    case 6:
                        return "JUL";
                    case 7:
                        return  "AUG";
                    case 8:
                        return "SEP";
                    case 9:
                        return "OCT";
                    case 10:
                        return "NOV";
                    case 11:
                        return "DEC";
                }
            }   
        }
    }

    init();
    function init(){
        //添加模式切换功能
        modeBtn.addEventListener("click", ()=>{
            body.classList.toggle("dark-mode");
            if(body.classList.value.indexOf("dark-mode") != -1){
                modeBtn.innerText = "Light Mode";
            }else{
                modeBtn.innerText = "Dark Mode";
            }
        });
        setInterval(()=>start(), 1000); //每秒指针跳动
    }

    function start(){
        const date = new MyDate(new Date());
        function setInfo(){
            //设置日期时间信息
            hour.innerText = date.hours;
            date.minutes < 10 ? minute.innerText = "0" + date.minutes : minute.innerText = date.minutes;
            date.hours > 12 ? half.innerText = "PM" : half.innerText = "AM";
            week.innerText = date.getWeek(date.date);
            month.innerText = date.getMonth(date.date);
            day.innerText = date.day;
        }
        function clockLaunch(){
            Math.floor(360/60*date.seconds)  == 0 && secondRound++;
            Math.floor(360/60*date.minutes) == 0 && minuteRound++;
            Math.floor(360/60*date.hour) == 0 && minuteRound++;
            secoundPointer.style.transform = `rotate(${Math.floor(360/60*date.seconds) + (secondRound * 360)}deg)`;
            minutePointer.style.transform = `rotate(${Math.floor(360/60*date.minutes) + (minuteRound * 360)})`;
            hourPointer.style.transform = `rotate(${Math.floor(360/60*date.hours) + (minuteRound * 360)}deg)`;
        }
        setInfo();
        clockLaunch();
    }
}