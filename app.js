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

//AUDIO OBJECTS
const correctAnswer = new Audio();
const wrongAnswer = new Audio();
const drum = new Audio();
const levelUp = new Audio();
const next = new Audio();
const popUp = new Audio();
const completed = new Audio();

correctAnswer.src = 'audio/positive-notification.wav';
wrongAnswer.src = 'audio/wrong-answer.wav';
drum.src = 'audio/drums.wav';
levelUp.src = 'audio/correct-answer-reward.wav';
completed.src = 'audio/completed.wav';
next.src = 'audio/next.wav';
popUp.src = 'audio/popup.wav';


//SELECTORS
const title = document.getElementById("title");
const versionOutput = document.getElementById("version");
const qnaSlot = document.getElementById("qna-box");
const questionSlot = document.getElementById("question");
const questionNo = document.getElementById("questionNumber");
const optionSlot = document.getElementById("options");
const nextButton = document.getElementById("next-button");
const scoreBoardTitle = document.getElementById("currentScore");
const currentScoreBoard = document.getElementById("currentScore");
const totalScoreBoard = document.getElementById("totalScore");
const loader = document.getElementById("loader");
const prizeList = document.getElementById("prizes");
const prizeDotHolder = document.getElementById("prizeDotHolder");
const infoBox = document.getElementById("applicationInfo");
const infoBody = document.getElementById("infoBody");
const infoTrigger = document.getElementById("checkInfo");
const infoBoxClose = document.getElementsByClassName("close")[0];


//EVENTS
infoTrigger.onclick = function() {
  popUp.play();
  infoBox.style.display = "block";
}
infoBoxClose.onclick = function() {
  popUp.play();
  infoBox.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == infoBox) {
    popUp.play();
    infoBox.style.display = "none";
  }
}

//JSON FETCH
appData = applicationData;
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
	prizeDotHolder.innerHTML = "";
	for(var p = 0; p < 15; p++){
		var prizeNumber = 14 - p;
		
		if(p == questionSet) {
			prizeDotHolder.innerHTML += `<div id="current" class="popup"><span class="popuptext" id="prizeMessage">${prizes[p]}</span></div>`;
		}else if(p < questionSet) {
			prizeDotHolder.innerHTML += `<div class="passed"></div>`;
		}else {
			prizeDotHolder.innerHTML += `<div></div>`;
		}
		
		if(prizeNumber == questionSet) {
			prizeList.innerHTML += `<li class="current"><span id="prizeNumber">${zfill(prizeNumber + 1)}. </span>${prizes[prizeNumber]}</li>`;
		}else if(prizeNumber < questionSet) {
			prizeList.innerHTML += `<li class="passed"><span id="prizeNumber">${zfill(prizeNumber + 1)}. </span>${prizes[prizeNumber]}</li>`;
		}else {
			prizeList.innerHTML += `<li><span id="prizeNumber">${zfill(prizeNumber + 1)}. </span>${prizes[prizeNumber]}</li>`;
		}
		prizeList.innerHTML += `<hr style="border: 1px solid var(--primary);">`;
	}
}

function setupDifficulty() {
	if(currentScore == 10) {
		currentDifficulty = "hard";
		levelUp.play();
		setupQuestionSets();
	}else if(currentScore == 5) {
		levelUp.play();
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
	questionNo.innerHTML = currentScore + 1;
	
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
			correctAnswer.play();
			if(quizNotFinished) {
				nextButton.style =	"background: var(--success); pointer-events: all;";
			}else {
				qnaOver();
			}
		}else {
			selectedOption.classList.add("incorrect");
			wrongAnswer.play();
			qnaOver();
			return;
		}
	}, 500);
	checkComplete()
}

function setupQuestionSets() {
	qnaData = new Array;
	questionSet = 0;
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
	if(currentScore == totalScore) {
		completed.play();
		return quizNotFinished = false;
	}
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
scoreBoardTitle.innerHTML = "SCORE";
currentScoreBoard.innerHTML = "00";
currentScoreBoard.innerHTML = "15";
title.innerHTML = appData.name;
versionOutput.innerHTML = appData.versionData.preRelease.tag;
infoBody.innerHTML = `
<img src="images/Quizzo.png" alt="KBC Quizzo" width="150px">
<hr>
<p>This is 
	<span class="info">${appData.name} </span> 
	<span class="info">${appData.versionData.preRelease.tag} </span>
	(<span class="info">${appData.versionData.preRelease.name} </span>). 
	It's stable version is 
	<span class="info">${appData.versionData.stable.name} </span>.
	It's a  
	<span class="info">${appData.mainLanguage} </span> 
	Based Application, developed by: 
	<span class="info">${appData.authorData.name} </span>
	It's licensed under 
	<span class="info">${appData.license.name} </span> 
	which is a 
	<span class="info">${appData.license.type} </span>
	license. That means you can have the source code for free with a few conditions. You can even contribute to the project on 
	<a href="${appData.repository}"><span class="info"> <i class="fab fa-github"></i> Github</span></a>.
</p>
`;

updateQuestion();

window.addEventListener("load", preLoad());
typeWriter("LOADING.....", "welcome", 90);
