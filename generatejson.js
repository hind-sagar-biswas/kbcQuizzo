var jsonCode;
var validSubCatagories = {
	science : [
		"chem",
		"phy",
		"bio"
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
		"null",
		""
	]
}

const form = document.forms["generator"];
const questionInput = form["question"];
const categoryInput = form["category"];
const subCategoryInput = form["subCategory"];
const difficultyInput = form["difficulty"];
const answerInput = form["answer"];
const optionInput = form["options"];
const subcategoryDatalist = document.getElementById("subcategoryDatalist");
const output = document.getElementById("output");


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
	categoryInput.value = "";
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
	return false;
}
