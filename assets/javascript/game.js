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


var word = document.getElementById("word");
console.log(word);
//function start here//

var words = ["mayda","atlantis","cantref","gwaelod","lyonesse","mu","kumari-kandam","mauritia","hy-brasil","thule","iram","shambhala"];
var pickWord = function(){
var randomWord = words[Math.floor(Math.random() * 12 )];
return randomWord;

};

pickWord();
console.log(pickWord());

//split the randomword//////////////////
var random = pickWord();
random.split("");

console.log (random);


//put the bar on////////////////////////
	
	var replace = random.replace(/[a-z]/g, '__ ');
	
	console.log(word)
	console.log(replace);
	word.innerText = replace;

	// onclick////////////////////////////
	//comoare the letter

	function letter (l){
		console.log(l);
		for (var i = 0; i < random.length; i++) {
			if (l === random[i]) {
				// match!!

				
			}
		}

	} 



	var life = document.getElementById("lives");
	var random;
	var play = [random];
	document.onkeyup = function(event) {
		var player = event.key;
		if((player === random)) {
			counter++;
			lives.innerText = counter;
			
		}
		
	}


//score wise//
// var lives = document.getElementById("lives");
// var counter = 8;

// lives.innerText = counter;

// if (counter === 0){
// 	lives.innerText = "YOU LOSE!!";
// }

// if (){

// };

// var counter = 0;
// startBtn.addEventListener("click", function () {
//     counter++; 
//     add.innerText = counter;
//     if(counter > 5){
//         wins.innerText = "User wins!!!!";
//     }
// });



// if( randomWord !== wordGuess){
// 	counter--;
// 	lives.innerText = counter;
// } else{
// 	remaining--;
// 	lives.innerText = counter;
// } 

// if(randomWord === wordGuess){
// 	counter++;
// }

// lives.innerText = counter;

// if (counter === 0){
// 	alert("GAME OVER!!!");
// 	and stop the game.
// }

//THEN FIGURE OUT HOW TO MAKE IT WIN!//












