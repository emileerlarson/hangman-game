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
var loss = 0;
var wins = 0;
// document.onkeyup = function(event) {

// var userGuess = event.key;
 var letterGuess = [];
function lettersGuessed (){
document.onkeyup = function(event) {
// console.log("fire")	// var letterGuess = [];
	var userGuess = event.key;
	//console.log(userGuess);
		if (remaningLetters > -1){
			
				if (computerChoice.indexOf(userGuess) !== -1){
					for (var j = 0; j < computerChoice.length; j++){
						if(computerChoice[j] === userGuess){
							answerArray[j] = userGuess;
					    	document.getElementById("computerChoice").innerHTML = answerArray;
							document.getElementById("computerChoice").innerHTML = answerArray.join(" ");
						}
						else{}
					}
				}
				else if(computerChoice.indexOf(userGuess) === -1){
					letterGuess.push(userGuess);
					document.getElementById("letterGuess").innerHTML = letterGuess;
					rGuess--;
					document.getElementById("rGuess").innerHTML = rGuess;
				}
				else{}			
				
		}
		else if (rGuess <= 25){
			loss++;
			document.getElementById("loss").innerHTML = loss;
		}
		else{
			wins++;
			document.getElementById("wins").innerHTML = wins;
		}
}
}
lettersGuessed();
// document.getElementById("userGuess").innerHTML = (letterGuess[j]);
document.getElementById("wins").innerHTML = wins;
document.getElementById("loss").innerHTML = loss;
// document.getElementById("rGuess").innerHTML = rGuess;
// document.getElementById("computerChoice").innerHTML = answerArray;
document.getElementById("computerChoice").innerHTML = answerArray.join(" ");
// lettersGuessed();






