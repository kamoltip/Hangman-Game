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

//spliting the words//
var myString = 'mayda, atlantis, contref, gwaelod, lyonesse, mu, kumari-kandam, mauritia, hy-brasil, thule, iram, shambhala';
var splits = myString.split(' ', 12);

console.log(splits);

var myString = 'mayda atlantis contref';
var splits = myString.split('', myString.length);

console.log (splits);

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

// THEN FIGURE OUT HOW TO MAKE IT WIN!//


words.SetUnderline = function() {
	words.pullWord();
	for (i=0; i < words.length; i++){
		words.wordArray[i] = words.charAt(i);
		words.wordUArray[i] = "_";
	}
	words.wordU = words.wordUArray.join("");
	document.getElementById("word").innerHTML = words.length;
}






//show lives//
// var guess = 
// comment.function () {
// 	lives.innerHTML = "You have" + Lives + "left";
// 	if (lives < 1) {
// 		lives.innerHTML = "GAME OVER!!";
// 	}
// 	for (var i = 0; i < )
// }
//CharAt for split each alpha//



//show the bar according to the random word//










