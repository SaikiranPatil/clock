let pi = Math.PI;
let theta = -60;
let a = 175;

ang = angle => angle * Math.PI / 180

str = "";
for (let i = 1; i <= 12; i++) {
    str += `<div class="number" id="` + i + `"></div>`
}

str += `  <div class="hand" id="h-hand"></div>
<div class="hand" id="m-hand"></div>
<div class="hand" id="s-hand"></div>
<div class="circle" id="circle1"></div>
<div class="circle" id="circle2"></div>
<div class="nametag">TITAN</div>`;

for (let i = 1; i <= 60; i++) {
    str += `<div class="bar" id="bar` + i + `"></div>`
}

clock.innerHTML = str;

for (let i = 1; i <= 12; i++) {
    let n = String(i);
    let num = document.getElementById(n);

    num.innerHTML = n;
    num.style.transform = "translate(" + (a * Math.cos(ang(theta))) + "px," + (a * Math.sin(ang(theta))) + "px)";
    theta += 30;
}


for (let i = 1; i <= 60; i++) {
    let bar = document.getElementById("bar" + String(i));

    bar.style.transform = "translate(0,215px) rotate(" + 6 * i + "deg)";

    if (i % 5 == 0) {
        bar.style.border = "3px solid black";
    }
}

setInterval(() => {

    let date = new Date();

    // second hand
    let shand = document.getElementById("s-hand");
    let second = date.getSeconds();
    shand.style.transform = "translate(0,75px) rotate(" + (6 * second + 180) + "deg)";

    // minuite hand 
    let mhand = document.getElementById("m-hand");
    let minu = date.getMinutes();
    mhand.style.transform = "translate(0,75px) rotate(" + (6 * minu + 180) + "deg)";

    // hour hand 
    let hhand = document.getElementById("h-hand");
    let hour = date.getHours();
    hour %= 12;
    hhand.style.transform = "translate(0,35px) rotate(" + (30 * hour + 180) + "deg)";

    hand = document.getElementsByClassName("hand");
    let x = 5 * Math.cos((ang(second) * 30) / (2 * Math.PI));
    let y = 5 * Math.sin((ang(second) * 30) / (2 * Math.PI));
    // hand.style.box-shadow = x + "px " + y + "px 1px  rgb(48, 48, 48)";
    // hand.style.box-shadow = "2px 2px 1px  rgb(48, 48, 48)";

    var audio = new Audio('clock.mp3');
    audio.play();

}, 1000);
