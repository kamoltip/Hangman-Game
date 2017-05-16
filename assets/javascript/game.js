window.onload = function() {
      setTimeout(function() {
      	
var gretting = confirm("Are you ready ?");
if (gretting === true){
	confirm("Welcome to The Hangman World");
	confirm("It's time to remind of The extinc land on Earth.");
	confirm("Let's see how much do you know about them..");
} else {
	confirm("See You Next Time!");
	}} , 1100);
	};

words = {};
words.wordArray = [];
words.wordUArray = [];

words.lives = 8;
words.NumInWordBank = words.length;
words.wordU = "";
var wordGress;

//function start here//



var words = ["mayda","atlantis","cantref","gwaelod","lyonesse","mu","kumari-kandam","mauritia","hy-brasil","thule","iram","shambhala"];
var pickWord = function(){
randomWord = words[Math.floor(Math.random() * 12 )];
return randomWord;

};

pickWord();
console.log(pickWord());

//split the randomword//////////////////
var random = pickWord();
random.split("")

console.log (random.split(""));

//put the bar on////////////////////////
var bar = function() {
    var str = document.getElementById("word").innerHTML; 
    var res = str.replace( "random", random.length);
    document.getElementById("word").innerHTML = res;
}

bar();

var result = function () {
	bar = document.getElementById("word");
	correct = document.creatElementById("ul");

	for (var i = 0; i < random.length; i++ ) {
		correct.setAttribute ("id", "")
	}
}


//score wise//
var lives = document.getElementById("lives")
var counter = 8;
wordGuess;

if( randomWord !== wordGuess){
	counter--;
	lives.innerText = counter;
} else{
	remaining--;
	lives.innerText = counter;
} 

if(randomWord === wordGuess){
	counter++;
}

lives.innerText = counter;

if (counter === 0){
	alert("GAME OVER!!!");
	//and stop the game.
}

//THEN FIGURE OUT HOW TO MAKE IT WIN!//












