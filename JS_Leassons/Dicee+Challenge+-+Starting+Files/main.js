const caller = document.querySelector(".btn-roll");
const dice1Img = document.querySelector(".img1");
const dice2Img = document.querySelector(".img2");
function changeImage(){
    const k = Math.floor((Math.random() * 6))+1;
    const j = Math.floor((Math.random() * 6))+1;
    const changeImg1 = `./images/dice${k}.png`;
    const changeImg2 = `./images/dice${j}.png`;
    dice1Img.src = changeImg1;
    dice2Img.src = changeImg2;
    if(k > j){
        document.querySelector("h1").textContent = "One Wins!";
    }else if(k < j){
        document.querySelector("h1").textContent= "Two Wins!";
    }else{
        document.querySelector("h1").textContent = "It's a tie!";
    }
    document.querySelector("img").getElementByattribute("src", );
}


caller.addEventListener("click",changeImage); 
