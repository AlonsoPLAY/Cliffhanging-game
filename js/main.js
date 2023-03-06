
var p = {
    "scene":1,
    "touch":false,
    "ruteGirl":"/assets/media/girls/",
}

const girls = [
    ["peach","Princess Peach"],
];

// MAIN



const tapRight = document.getElementById("viewhand");
const tapLeft = document.getElementById("viewgirl");

const final = document.getElementById("final");
const menu = document.getElementById("menu");
const start = document.getElementById("start");

const girlFallingImg = document.getElementById("girlfalling");

const pluck = new Audio("/assets/media/sound/pluck.mp3");
const falling = new Audio("/assets/media/sound/falling.mp3");

var count = 0;
girls.forEach((i,n) => {
    var rute = p.ruteGirl+i[0]+"/face.png";
    var face = new Image();
    face.onload = function(){
        document.getElementById("menuwindow").innerHTML += "<div class='ico'><img src='"+rute+"' onclick='fall("+n+")' class='g'><p>"+i[1]+"</p></div>";
    }
    face.onerror = function(){

    }
    face.src = rute;
});

// 865  661

function fall(g){
    console.log(g);
    let gs = girls[g][0];
    tapRight.style.backgroundImage = "url('/assets/media/girls/"+gs+"/H.png')";
    tapLeft.style.backgroundImage = "url('/assets/media/girls/"+gs+"/G.png')";
    start.style.backgroundImage = "url('/assets/media/girls/"+gs+"/bgStart.png')";
    final.style.backgroundImage = "url('/assets/media/girls/"+gs+"/bgSky.png')";
    girlFallingImg.style.backgroundImage = "url('/assets/media/girls/"+gs+"/GF.png')";

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
        final.style.zIndex = -1;
        menu.style.zIndex = 0;
        start.style.zIndex = -1;
    },8000);
}

tapRight.addEventListener("click",next);
