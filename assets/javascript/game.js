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
document.getElementById("computerChoice").innerHTML = answerArray;
document.getElementById("computerChoice").innerHTML = answerArray.join(" ");

document.onkeyup = function(event) {

	var letterGuess = event.key;
	document.getElementById("letterGuess").innerHTML = letterGuess;
}		









