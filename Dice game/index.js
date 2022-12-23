var randomNumber1=Math.floor(Math.random()*6)+1;
var diceimage1="dice"+randomNumber1+".png";
var randomImageSource="images/"+diceimage1;
document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);

var randomNumber2=Math.floor(Math.random()*6)+1;
var randomDiceImage2="dice"+randomNumber2+".png";
var randomImageSource="images/"+randomDiceImage2;
document.querySelectorAll("img")[1].setAttribute("src",randomImageSource);

if(randomNumber1>randomNumber2)
{
   document.querySelector("h1").innerHTML="🚩Player1 wins!";
}
else if(randomNumber1<randomNumber2)
{
  document.querySelector("h1").innerHTML="🚩Player2 wins!";
}
else
{
  document.querySelector("h1").innerHTML="Draws!";
}
