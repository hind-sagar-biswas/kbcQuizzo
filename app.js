//VARIABLES
var currentQuestion, totalScore, currentScore, questionSet, quizNotFinished, currentAnswer, currentOptions, writingIndex, textToWrite, writingSpeed, textDisplayId, qnaData;

//SELECTORS
const qnaSlot = document.getElementById("qna-box");
const questionSlot = document.getElementById("question");
const questionNo = document.getElementById("questionNumber");
const optionSlot = document.getElementById("options");
const nextBox = document.getElementById("next-box");
const currentScoreBoard = document.getElementById("currentScore");
const totalScoreBoard = document.getElementById("totalScore");
const loader = document.getElementById("loader");


//JSON FETCH
fetch('qna.json')
  .then(response => response.json())
  .then(data => {qnaData = JSON.parse(data)});
//qnaData = JSON.parse(data);

//FUNCTIONS
function updateQuestion() {
	createQuestion();
	displayQuestion();
}

function createQuestion() {
	currentQuestion = qnaData[questionSet]["question"];
	currentAnswer = qnaData[questionSet]["answer"];
	currentOptions = qnaData[questionSet]["otherOptions"];
	
	currentOptions.push(currentAnswer);
	shuffle(currentOptions);
	questionSet++;
}

function displayQuestion() {
	nextBox.style.display =		"none";
	questionSlot.innerHTML = currentQuestion;
	questionNo.innerHTML = questionSet;
	
	var optionList = "";
	
	for(var i = 0; i < 4; i++){
		currentOption = currentOptions[i];
		var id = currentOption.split(" ").join("-o-");
		optionList += `<li onclick="checkOption('${id}')" id="${id}">${currentOption}</li>
		`;
	}
	
	optionSlot.innerHTML = optionList;
	
	
	qnaSlot.style.pointerEvents = "all";
}

function checkOption(input) {
	qnaSlot.style.pointerEvents = "none";
	
	var id = input;
	input = input.split("-o-").join(" ");
	var selectedOption = document.getElementById(id);
	var isCorrect = checkAnswer(input);
	
	setTimeout(function() {
		if(isCorrect) {
			selectedOption.classList.add("correct");
			currentScore++;
		}else {
			selectedOption.classList.add("incorrect");
		}
		currentScoreBoard.innerHTML = currentScore;
	}, 500);
	setTimeout(checkComplete(), 1000);
	if(quizNotFinished) {
		setTimeout(function() {
			nextBox.style.display =	"block";
		}, 1500);
	}else {
		quizCompleted();
	}
}

function checkAnswer(input) {
	if(input == currentAnswer) return true;
	return false;
}

function randomizeArray(array) {
	return;
}

function checkComplete() {
	if(questionSet == totalScore) return quizNotFinished = false;
}

function quizCompleted() {
	alert("Quiz Over");
}

function shuffle(array) {
	array.sort(() => Math.random() - 0.5);
}

function preLoad() {
	loader.style = 'pointer-events: none; opacity: 0';
}

function write() {
  if (writingIndex < textToWrite.length) {
    document.getElementById(textDisplayId).innerHTML += textToWrite.charAt(writingIndex);
    writingIndex++;
    setTimeout(write, writingSpeed);
  }
}

function typeWriter(sentence, id, speed) {
	writingIndex = 0;
	textToWrite = sentence;
	writingSpeed = speed;
	textDisplayId = id;
	
	write();
}

function rollDice() {
  var a = document.getElementById("dice");
  a.innerHTML = "&#xf525;";
  setTimeout(function () {
    a.innerHTML = "&#xf528;";
  }, 1000);
  setTimeout(function () {
    a.innerHTML = "&#xf527;";
  }, 2000);
  setTimeout(function () {
    a.innerHTML = "&#xf524;";
  }, 3000);
  setTimeout(function () {
    a.innerHTML = "&#xf523;";
  }, 4000);
  setTimeout(function () {
    a.innerHTML = "&#xf526;";
  }, 5000);
}
rollDice();
setInterval(rollDice, 6000);

//MAIN FLOW
questionSet = 0;
totalScore = qnaData.length;
currentScore = 0;
quizNotFinished = true;

currentScoreBoard.innerHTML = currentScore;
totalScoreBoard.innerHTML = totalScore;

shuffle(qnaData);
updateQuestion();

typeWriter("LOADING.....", "welcome", 90);

window.addEventListener("load", preLoad());
