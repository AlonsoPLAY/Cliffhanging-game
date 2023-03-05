
var p = {
    "scene":1,
    "touch":false,
}

// MAIN

const tapRight = document.getElementById("viewhand");
const tapLeft = document.getElementById("viewgirl");

const final = document.getElementById("final");
const menu = document.getElementById("menu");
const start = document.getElementById("start");

const girlFallingImg = document.getElementById("girlfalling");

const pluck = new Audio("/assets/media/sound/pluck.mp3");
const falling = new Audio("/assets/media/sound/falling.mp3");


function fall(/* g */){
    // tapRight.style.backgroundImage = "";
    // tapLeft.style.backgroundImage = "";
    final.style.zIndex = -1;
    menu.style.zIndex = -1;
    start.style.zIndex = 0;
}

function next(){
    if(p.scene == 4){
        p.scene = 0;
        girlFalling();
    }
    tapRight.style.backgroundPositionX = (p.scene*-100)+"%";
    tapLeft.style.backgroundPositionX = (p.scene*-100)+"%"; 
    pluck.currentTime = 0;
    pluck.play();
    p.scene++;
}

function girlFalling(){
    final.style.zIndex = 0;
    start.style.zIndex = -1;
    girlFallingImg.classList.add("ani");
    falling.currentTime = 0;
    falling.play();
    setTimeout(function(){
        girlFallingImg.classList.remove("ani");
        menu.style.zIndex = 0;
    },8000);
}

tapRight.addEventListener("click",next);
menu.addEventListener("click",fall);