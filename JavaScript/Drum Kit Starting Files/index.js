const drums = document.querySelectorAll(".drum");
const path = `./sounds/`;
for(var i =0; i< drums.length;i++){
    drums[i].addEventListener('click', switcher );       
}
function switcher(){
    var keyPressed = this.innerHTML;
    switch(keyPressed){
        case "w":
            var wAudio =new Audio(path+`tom-1.mp3`);
            wAudio.play();
            break;
        case"a":
            var wAudio =new Audio(path+`tom-2.mp3`);
            wAudio.play();
            break;
        case "s":
             var wAudio =new Audio(path+`tom-3.mp3`);
            wAudio.play();
            break;
        case "d":
            var wAudio =new Audio(path+`tom-4.mp3`);
            wAudio.play();
            break;
        case "j":
            var wAudio =new Audio(path+`kick-bass.mp3`);
            wAudio.play();
            break;
        case "k":
            var wAudio =new Audio(path+`snare.mp3`);
            wAudio.play();
            break; 
        default:
            var wAudio =new Audio(path+`crash.mp3`);
            wAudio.play();
            break;

    }
}
function wDrum(){
    this.style.color = "white";
    var wAudio =new Audio(path+`tom-1.mp3`);
    wAudio.play();
}
function aDrum(){
    var wAudio =new Audio(path+`tom-2.mp3`);
    wAudio.play();
}

function sDrum(){
    var wAudio =new Audio(path+`tom-3.mp3`);
    wAudio.play();
}

function dDrum(){
    var wAudio =new Audio(path+`tom-4.mp3`);
    wAudio.play();
}

function jDrum(){
    var wAudio =new Audio(path+`kick-bass.mp3`);
    wAudio.play();
}

function kDrum(){
    var wAudio =new Audio(path+`snare.mp3`);
    wAudio.play();
}

function lDrum(){
    var wAudio =new Audio(path+`crash.mp3`);
    wAudio.play();
}