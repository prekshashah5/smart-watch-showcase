var heart = document.getElementById("heart");
var heartRate = document.getElementById("heart-rate");
var time = document.getElementById("time");
var myimage = document.getElementById("myImage");

function timer() {
    heart.style.visibility = "hidden";
    heartRate.style.visibility = "hidden";
    heartRate.textContent = "";
    time.style.visibility = "visible";
    setInterval(function() {
        var d = new Date();
        var h = addzero(d.getHours());
        var m = addzero(d.getMinutes());
        var s = addzero(d.getSeconds()); 
        time.innerHTML = h + ":" + m + ":" + s;                          
    },0);   
}

function addzero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function heartbeat() {
    heartRate.textContent = "";
    time.style.visibility = "hidden";
    heart.style.visibility = "visible";
    heartRate.style.visibility = "visible";
    heartRate.appendChild(document.createTextNode(randomNumber(70, 100)));
}

function randomNumber(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}

function black() {
    myimage.src = "./images/black.png"
}

function red() {
    myimage.src = "./images/red.png"
}

function blue() {
    myimage.src = "./images/blue.png"
}

function pink() {
    myimage.src = "./images/pink.png"
}

function purple() {
    myimage.src = "./images/purple.png"
}