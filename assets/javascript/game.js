var wordList = ["pumpkin", "ghost", "bat", "trick or treat", "candy", "whitch",
	"spider", "clown", "fairy", "cider", "grave", "zombie", "frankinstine", "vampire", "jack o lantern", "skeloton"];
var numberWins = document.getElementsByTagName('wins');
var numberlosses = document.getElementsByTagName('loss');
//computer picks word
var computerChoice = wordList[Math.floor(Math.random() * wordList.length)];

var answerArray = [];
for (var i = 0; i < computerChoice.length; i++){
	answerArray[i] = "_";
}

var remaningLetters = answerArray.length;

var rGuess = 25;
var loss;
var wins;
// document.onkeyup = function(event) {

// var userGuess = event.key;

function lettersGuessed (){
document.onkeyup = function(event) {

	var userGuess = event.key;
		if (remaningLetters > 0){
			for (var j = 0; j < computerChoice.length; j++){
				if (computerChoice[j] === userGuess){
					answerArray[j] = userGuess;
					remaningLetters--;
				}
				else if (computerChoice[j] !== userGuess){
					--rGuess;
					document.getElementById("letterGuess").innerHTML = userGuess;	
				}
			}
		}
		else if (rGuess <= 25){
			++loss;
		}
		else{
			++wins;
		}
}
}

document.getElementById("wins").innerHTML = wins;
document.getElementById("loss").innerHTML = loss;
document.getElementById("rGuess").innerHTML = rGuess;
document.getElementById("computerChoice").innerHTML = answerArray;
document.getElementById("computerChoice").innerHTML = answerArray.join(" ");
lettersGuessed();






