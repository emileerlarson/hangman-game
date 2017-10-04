var wordList = ["pumpkin", "ghost", "bat", "trick or treat", "candy", "whitch", "black cat",
	"spider", "clown", "fairy", "cider", "grave", "zombie", "frankinstine", "vampire", "jack o lantern", "skeloton"];

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
 var letterGuess = [];
function lettersGuessed (){
document.onkeyup = function(event) {
// console.log("fire")	// var letterGuess = [];
	var userGuess = event.key;
	//console.log(userGuess);
		if (remaningLetters > 0){
			for (var j = 0; j < computerChoice.length; j++){
				if (computerChoice[j] === userGuess){
					answerArray[j] = userGuess;
					document.getElementById("computerChoice").innerHTML = answerArray;
					document.getElementById("computerChoice").innerHTML = answerArray.join(" ");
					remaningLetters--;
				}
				else if (computerChoice[j] !== userGuess){
					letterGuess.push(userGuess);
					document.getElementById("letterGuess").innerHTML = letterGuess;
					--rGuess;
				}
				else{
					break;
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
lettersGuessed();
// document.getElementById("userGuess").innerHTML = (letterGuess[j]);
document.getElementById("wins").innerHTML = wins;
document.getElementById("loss").innerHTML = loss;
document.getElementById("rGuess").innerHTML = rGuess;
// document.getElementById("computerChoice").innerHTML = answerArray;
document.getElementById("computerChoice").innerHTML = answerArray.join(" ");
// lettersGuessed();






