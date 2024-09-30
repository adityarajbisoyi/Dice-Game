var diceMove1  = Math.floor(Math.random()*6 + 1);
var dicePath1 = "images/dice"+diceMove1+".png";
var diceMove2  = Math.floor(Math.random()*6 + 1);
var dicePath2 = "images/dice"+diceMove2+".png";
var conclusion;


if (diceMove1>diceMove2){
    conclusion = "Player 1 Wins!";
    document.querySelector(".img1").classList.toggle("img1Big");
    
}
else if (diceMove2 > diceMove1){
   conclusion = "Player 2 Wins!";
   document.querySelector(".img2").classList.toggle("img2Big");

}
else{
   conclusion = "Draw!";
}




document.querySelector(".container h1").textContent = conclusion;
document.querySelector(".img1").setAttribute("src",dicePath1);
document.querySelector(".img2").setAttribute("src",dicePath2);


