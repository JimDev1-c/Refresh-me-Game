let randonNumber1 =Math.floor(Math.random()*6)+1;

let randonDiceImage = "dice"+ randonNumber1 + ".png";

let randonImageSource = "images/"+ randonDiceImage ;

let image1 = document.querySelectorAll("img")[0]

image1.setAttribute("src", randonImageSource)

//Application sur la 2eme boule 
let randonNumber2 = Math.floor(Math.random()*6)+1 ;

let randonImageSource2 = "images/dice"+ randonNumber2 + ".png"

document.querySelectorAll("img")[1].setAttribute("src",randonImageSource2)

if ( randonNumber1 > randonNumber2){
    document.querySelector("h1").innerHTML = "player 1 wins !"
}else if (randonNumber1 < randonNumber2){
    document.querySelector("h1").innerHTML = "player 2 wins !"
} else {
    document.querySelector("h1").innerHTML = "Draw"
}

