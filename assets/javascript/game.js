var wordList = ["pumpkin", "ghost", "bat", "trickortreat", "candy", "whitch", "blackcat",
	"spider", "clown", "fairy", "cider", "grave", "zombie", "frankinstine", "vampire", "jackolantern", "skeloton"];

//computer picks word
var computerChoice = wordList[Math.floor(Math.random() * wordList.length)];

var answerArray = [];
for (var i = 0; i < computerChoice.length; i++){
	answerArray[i] = "_";
}

var remaningLetters = answerArray.length;

var rGuess = 10;
var loss = 0;
var wins = 0;

var letterGuess = [];
document.onkeyup = function(event) {

	var userGuess = event.key;
	
		if (answerArray.join('').toString() != computerChoice && rGuess !== 0){
			
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
		else if (rGuess <= 0){
			loss++;
			document.getElementById("loss").innerHTML = loss;
		}
		else{
			wins++;
			document.getElementById("wins").innerHTML = wins;
		}
}


document.getElementById("wins").innerHTML = wins;
document.getElementById("loss").innerHTML = loss;
document.getElementById("computerChoice").innerHTML = answerArray.join(" ");







