//VARIABLES
var currentQuestion, currentAnswer, currentOptions, writingIndex, textToWrite, writingSpeed, textDisplayId, fetchedData;
var questionSet = 0;
var totalScore = 15;
var currentScore = 0;
var quizNotFinished = true;
var currentDifficulty = "easy";
var qnaData = new Array;
var prizes = [
	"1000$",
	"2000$",
	"3000$",
	"4000$",
	"5000$",
	"10000$",
	"25000$",
	"50000$",
	"100000$",
	"250000$",
	"500000$",
	"1000000$",
	"2500000$",
	"5000000$",
	"10000000$",
];

//SELECTORS
const qnaSlot = document.getElementById("qna-box");
const questionSlot = document.getElementById("question");
const questionNo = document.getElementById("questionNumber");
const optionSlot = document.getElementById("options");
const nextButton = document.getElementById("next-button");
const currentScoreBoard = document.getElementById("currentScore");
const totalScoreBoard = document.getElementById("totalScore");
const loader = document.getElementById("loader");
const prizeList = document.getElementById("prizes");


//JSON FETCH
fetchedData = shuffle(data);
setupQuestionSets();

//FUNCTIONS
function updateQuestion() {
	updatePrizeList();
	setupDifficulty();
	createQuestion();
	displayQuestion();
}

function updatePrizeList() {
	prizeList.innerHTML = "";
	for(var p = 0; p < 15; p++){
		var prizeNumber = 14 - p;
		
		if(prizeNumber == questionSet) {
			prizeList.innerHTML += `<li class="current"><span id="prizeNumber">${zfill(prizeNumber + 1)}. </span>${prizes[prizeNumber]}</li>`;
		}else if(prizeNumber < questionSet) {
			prizeList.innerHTML += `<li class="passed"><span id="prizeNumber">${zfill(prizeNumber + 1)}. </span>${prizes[prizeNumber]}</li>`;
		}else {
			prizeList.innerHTML += `<li><span id="prizeNumber">${zfill(prizeNumber + 1)}. </span>${prizes[prizeNumber]}</li>`;
		}
		prizeList.innerHTML += `<hr style="border-top: 1px solid #101421; border-bottom: 1px solid var(--primary);">`;
	}
}

function setupDifficulty() {
	if(currentScore == 11) {
		currentDifficulty = "hard";
		setupQuestionSets();
	}else if(currentScore == 6) {
		currentDifficulty = "medium";
		setupQuestionSets();
	}
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
	nextButton.style =	"background: #759c82; pointer-events: none;";
	questionSlot.innerHTML = currentQuestion;
	questionNo.innerHTML = questionSet;
	
	optionSlot.innerHTML = "";
	
	currentOptions.forEach(option => {optionSlot.innerHTML += `<li onclick="checkOption('${option.split(" ").join("-o-")}')" id="${option.split(" ").join("-o-")}">${option}</li>`});
	
	qnaSlot.style.pointerEvents = "all";
}



function countdownTimer() {
	
}

function qnaOver() {
	alert("KBC Over");
	quizNotFinished = false;
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
			currentScoreBoard.innerHTML = zfill(currentScore);
			
			if(quizNotFinished) {
				nextButton.style =	"background: var(--success); pointer-events: all;";
			}else {
				qnaOver();
			}
		}else {
			selectedOption.classList.add("incorrect");
			qnaOver();
			return;
		}
	}, 500);
	checkComplete()
}

function setupQuestionSets() {
	fetchedData.forEach(qnaSet => {
		if(qnaSet.difficulty == currentDifficulty) qnaData.push(qnaSet);
	});
	qnaData = shuffle(qnaData);
}

function checkAnswer(input) {
	if(input == currentAnswer) return true;
	return false;
}

function checkComplete() {
	if(questionSet == totalScore) return quizNotFinished = false;
}

function shuffle(array) {
	return array.sort(() => Math.random() - 0.5);
}

function preLoad() {
	setTimeout(function() {
	loader.style = 'pointer-events: none; opacity: 0;'
	}, 1350);
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

function zfill(numberToFill) {
		if(numberToFill < 10) return "0" + numberToFill;
		return "" + numberToFill;
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
updateQuestion();

window.addEventListener("load", preLoad());
typeWriter("LOADING.....", "welcome", 90);
