
var p = {
    "scene":1,
    "touch":false,
    "ruteGirl":"/assets/media/girls/",
    "actualGirl":0,
}

var girls = window.girl;

// MAIN

const tapRight = document.getElementById("viewhand");
const tapLeft = document.getElementById("viewgirl");

const final = document.getElementById("final");
const menu = document.getElementById("menu");
const start = document.getElementById("start");
const loading = document.getElementById("loading");

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
    p.actualGirl = g;
    let gs = girls[g][0];
    final.style.zIndex = -2;
    menu.style.zIndex = 0;
    start.style.zIndex = -2;
    loading.style.zIndex = 1;
    load(true);
    
    loadnow(["/assets/media/girls/"+gs+"/H.png","/assets/media/girls/"+gs+"/G.png","/assets/media/girls/"+gs+"/bgStart.png","/assets/media/girls/"+gs+"/bgSky.png","/assets/media/girls/"+gs+"/GF.png"]).then(() => {
        tapRight.style.backgroundImage = "url('/assets/media/girls/"+gs+"/H.png')";
        tapLeft.style.backgroundImage = "url('/assets/media/girls/"+gs+"/G.png')";
        start.style.backgroundImage = "url('/assets/media/girls/"+gs+"/bgStart.png')";
        final.style.backgroundImage = "url('/assets/media/girls/"+gs+"/bgSky.png')";
        girlFallingImg.style.backgroundImage = "url('/assets/media/girls/"+gs+"/GF.png')";
    });

    setTimeout(function(){
        final.style.zIndex = -1;
        menu.style.zIndex = -1;
        start.style.zIndex = 0;
        load(false);
    },2000);
    
    
}

function loadnow(images){
    const promises = [];
  
    images.forEach((imageSrc) => {
      const promise = new Promise((resolve) => {
        const img = new Image();
        img.src = imageSrc;
        img.onload = () => resolve();
      });
  
      promises.push(promise);
    });
  
    
    return Promise.all(promises);
  };

  

var lo;
function load(v){
    let l = document.getElementById("loadpoint");
    if(v){
        lo = setInterval(function(){
            if(l.textContent === "..."){
                l.textContent = "";
            }else{
                l.textContent += "."
            }
        },333);

        loading.classList.remove("off");
        void loading.offsetWidth;
        loading.classList.add("on");
        
    }else{
        loading.classList.remove("on");
        void loading.offsetWidth;
        loading.classList.add("off");
        setTimeout(function(){loading.style.zIndex = -1},2000);
    }
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
    girlFallingImg.classList.add(girl[p.actualGirl][2]);
    falling.currentTime = 0;
    falling.play();
    setTimeout(function(){
        girlFallingImg.classList.remove(girl[p.actualGirl][2]);
        final.style.zIndex = -1;
        menu.style.zIndex = 0;
        start.style.zIndex = -1;
    },8000);
}

// var ok=0;
// function loadnow(urls){
//     final.style.zIndex = -2;
//     menu.style.zIndex = 0;
//     start.style.zIndex = -2;
//     loading.style.zIndex = 1;
//     load(true);
    
//     console.log(urls);
//     urls.forEach(e => {
//         var img = new Image();
//         img.onload = function(){
//             ok++;
//             console.log("yea!");
//             console.log(ok);
//         }
//         img.onerror = function(){
//             alert("ERROR: FAILED "+e);
//         }
//         img.src = e;
//     });
//     alert("ok is ="+ok);
//     alert("url length ="+urls.length);
//     if(ok == urls.length){
//         load(false);
//         alert("sitabien");
//     }else{
//         console.log("queraro");
//     }
// }


tapRight.addEventListener("click",next);
