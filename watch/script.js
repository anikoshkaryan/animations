let hours = document.querySelector(".hours");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");

function rotate() {
    let nowTime = new Date();
    let h = nowTime.getHours();
    let m = nowTime.getMinutes();
    let s = nowTime.getSeconds();
    hours.style.transform = "translate(-50%, -100%) rotate("+(h*30 + m/2)+"deg)";
    minutes.style.transform ="translate(-50%, -100%) rotate("+(m*6+ s/10)+"deg)";
    seconds.style.transform ="translate(-50%, -100%) rotate("+(s*6)+"deg)";
}

setInterval(rotate,1000);