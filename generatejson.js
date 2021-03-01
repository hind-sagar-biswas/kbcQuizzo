var jsonCode;
var validSubCatagories = {
	science : [
		"chemistry",
		"chem",
		"physics",
		"phy",
		"biology",
		"bio"
	],
	ict : [
		"software",
		"website",
		"web",
		"programming",
		"prog",
		"security"
	],
	literature : [
		"bangla",
		"bng",
		"english",
		"eng",
		"hindi",
		"hnd"
	],
	grammer : [
		"bangla",
		"bng",
		"english",
		"eng",
		"hindi",
		"hnd"
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
const output = document.getElementById("output");


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
	
	if(jsonCode != undefined) jsonCode += `,
`;
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
		}`;
	
	output.innerHTML = jsonCode;
	return false;
}
