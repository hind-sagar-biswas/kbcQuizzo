var jsonCode;
var validSubCatagories = {
	science : [
		"chemistry",
		"physics",
		"biology",
		"astronomy"
	],
	ict : [
		"software",
		"website",
		"programming",
		"security"
	],
	literature : [
		"bangla",
		"english",
		"hindi"
	],
	mythsAndLegends : [
		"ancientMyths",
		"urbanLegends",
		"greekMythology",
		"indianMythology",
		"romanMythology",
	],
	grammer : [
		"bangla",
		"english",
		"hindi"
	],
	history : [
		"international",
		"bangladesh",
		"india"
	],
	mathematics : [
		"general",
		"higher"
	],
	generalKnowledge : [
		"geography",
		"generalScience",
		"currentAffairs"
	],
	entertainment : [
		"movies",
		"music",
		"animations",
		"tvShows",
		"gaming",
		"sports",
		"webSeries"
	]
}

const form = document.forms["generator"];
const questionInput = form["question"];
const categoryInput = form["category"];
const subCategoryInput = form["subCategory"];
const difficultyInput = form["difficulty"];
const answerInput = form["answer"];
const optionInput = form["options"];
const categoryOptions = document.getElementById("category");
const subcategoryDatalist = document.getElementById("subcategoryDatalist");
const output = document.getElementById("output");
const outputTextarea = document.getElementById("outputTextarea");


categoryInput.addEventListener("change", () => {
	subcategoryDatalist.innerHTML = "";
	validSubCatagories[categoryInput.value].forEach(subcategory => subcategoryDatalist.innerHTML += `<option value="${subcategory}"></option>`);
});

function generateCode() {
	var question = questionInput.value.trim();
	var answer = answerInput.value.trim();
	var options = optionInput.value.split(";");
	var category = categoryInput.value;
	var subCategory = subCategoryInput.value.trim();
	var difficulty = difficultyInput.value;
	
	if(!validSubCatagories[category].includes(subCategory)) {
		alert(`"${subCategory}" is not a valid Subcategory!`);
		subCategoryInput.value = "";
		return false;
	}
	
	for(var i = 0; i < 3; i++){
		options[i] = options[i].trim();
	}
	
	questionInput.value = "";
	categoryInput.value = "science";
	subCategoryInput.value = "";
	answerInput.value = "";
	optionInput.value = "";
	
	if(jsonCode == undefined) jsonCode = ``;
	
	jsonCode += `		{
			"question" : "${question}",
			"category" : "${category}",
			"subCategory" : "${subCategory}",
			"difficulty" : "${difficulty}",
			"answer" : "${answer}",
			"otherOptions" : [
				"${options[0]}",
				"${options[1]}",
				"${options[2]}"
			]
		},`;
	
	output.innerHTML = jsonCode;
	outputTextarea.innerHTML = jsonCode;
	return false;
}

function copyToClipboard(targetId) {
  /* Get the text field */
  var copyText = document.getElementById(targetId);
  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  popup("copiedMessage");
}

function popup(targetId) {
  var popup = document.getElementById(targetId);
  popup.classList.toggle("show");
}

for(validCategory in validSubCatagories){
	categoryOptions.innerHTML += `<option value="${validCategory}">${validCategory}</option>`;
}