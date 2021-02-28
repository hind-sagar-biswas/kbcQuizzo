var jsonCode;


const form = document.forms["generator"];
const questionInput = form["question"];
const answerInput = form["answer"];
const optionInput = form["options"];
const output = document.getElementById("output");


function generateCode() {
	var question = questionInput.value.trim();
	var answer = answerInput.value.trim();
	var options = optionInput.value.split(";");
	
	for(var i = 0; i < 3; i++){
		options[i] = options[i].trim();
	}
	
	questionInput.value = "";
	answerInput.value = "";
	optionInput.value = "";
	
	if(jsonCode != undefined) jsonCode += `,
`;
	if(jsonCode == undefined) jsonCode = ``;
	
	jsonCode += `		{
			"question" : "${question}",
			"answer" : "${answer}",
			"otherOptions" : [
				"${options[0]}",
				"${options[1]}",
				"${options[2]}"
			]
		}`;
	
	output.innerHTML = jsonCode;
	return false;
}
