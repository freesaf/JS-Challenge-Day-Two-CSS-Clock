function setDate(){
    let now = new Date();
let sec = now.getSeconds();
let min = now.getMinutes();
let hours = now.getHours();

document.querySelector('.second-hand').style.transform = `rotate(${sec*6 + 90}deg)`;
document.querySelector('.min-hand').style.transform = `rotate(${(min+sec/100)*6+90}deg)`;
document.querySelector('.hour-hand').style.transform = `rotate(${hours*15+90}deg)`;

}

setInterval(setDate,1000)


