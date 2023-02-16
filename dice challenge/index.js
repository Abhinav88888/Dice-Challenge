var randomNumber1 =Math.random();
randomNumber1= (Math.floor(6*randomNumber1))+1;
var imgSrc="images/dice"+randomNumber1+".png";
document.querySelectorAll(".img")[0].setAttribute("src",imgSrc);

var randomNumber2 =Math.random();
randomNumber2= (Math.floor(6*randomNumber2))+1;
var imgSrc="images/dice"+randomNumber2+".png";
document.querySelectorAll(".img")[1].setAttribute("src",imgSrc);

if(randomNumber1>randomNumber2){
document.querySelector("h1").innerHTML="🚩 Player1 Wins";
}
else if(randomNumber1<randomNumber2){
document.querySelector("h1").innerHTML="Player2 Wins 🚩";
}
else{
document.querySelector("h1").innerHTML="Draw!";
}
