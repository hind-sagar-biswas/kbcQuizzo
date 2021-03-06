<p align="center">
  <img width="200" src="images/Quizzo.png">
</p>

# kbcQuizzo

![Project Language](https://img.shields.io/static/v1?label=language&message=javascript&color=yellow)
![Project Type](https://img.shields.io/static/v1?label=type&message=application&color=blue)
![Current Version](https://img.shields.io/static/v1?label=latest-version&message=v1.0.4&color=lightgrey)
![Stable Version](https://img.shields.io/static/v1?label=latest-version&message=not-released&color=red)
![Maintained](https://img.shields.io/static/v1?label=maintained&message=yes&color=green)
![Ask Me Anything](https://img.shields.io/static/v1?label=ask-me&message=anything&color=green)
[![Website Up](https://img.shields.io/static/v1?label=website&message=up&color=orange)](https://hind-sagar-biswas.github.io/kbcQuizzo)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

A JavaScript Quiz/Trivia Application

## Color Pallets

```css
/* Pallet One */
--pallet-one-primary: #55acff;
--pallet-one-secondary: #0a1640;
--pallet-one-text: white;
--pallet-one-success: #24f100;
--pallet-one-danger: #f13b13;
	
/* Pallet Two */
--pallet-two-primary: #79addc;
--pallet-two-secondary: #2c363f;
--pallet-two-text: #f1ecce;
--pallet-two-success: #9ae19d;
--pallet-two-danger: #ef476f;
```

Currently active scheme: **Pallet Two**

## Questions for Quiz

### Question Info

Every Question has 1 correct answer along with 3 more options and are categorized under few Categories and further have subcategories. Questions are also divided based on difficulty.

### Valid Categories and Subcategories

The valid Categories and Subcategories currently present are:

Valid Categories |Valid Subcategories
| ---------- | ------------- |
science | chemistry, physics, biology, astronomy
ict | software, website, programming, security
mathematics | general, higher
literaure | bangla, english, hindi
mythsAndLegends | ancientMyths, romanMythology, indianMythology, greekMythology, urbanLegends
grammer | bangla, english, hindi
history | international, bangladesh, india
general knowledge | geography, generalScienve

_**Note:** These are just current validated categories and sub categories. If you want or suggest any new category or subcategory then please create an [Issue](https://github.com/hind-sagar-biswas/kbcQuizzo/issues)_

### Question storage

Questions are stored in `qna.json` file in the `/root` directory as JSON.

### JSON Structure

```javascript
applicationData = {... informations related to KBC Quizzo ...}
data = [
	{
		"question" : "A valid question?",
		"category" : "category of the question",
		"subCategory" : "subcategory of the question",
		"difficulty" : "easy", // or hard or medium
		"answer" : "correct answer",
		"otherOptions" : [
			"option 1",
			"option 2",
			"option 3"
			]
	},
	{
		"question" : "Another valid question?",
		"category" : "category of the question",
		"subCategory" : "subcategory of the question",
		"difficulty" : "easy",
		"answer" : "correct answer",
		"otherOptions" : [
			"option 1",
			"option 2",
			"option 3"
			]
	}
]
```

### JSON code generator

If you want to add some new questions to our `qna.json` file, we've made the work easier.
You can use our [JSON code generator](https://hind-sagar-biswas.github.io/kbcQuizzo/generatejson.html) to generate JSON code for your questions and then add it to our JSON file.

Generator @ [https://hind-sagar-biswas.github.io/kbcQuizzo/generatejson.html](https://hind-sagar-biswas.github.io/kbcQuizzo/generatejson.html)

### How to add the codes

To add the codes, follow the steps below:

1. At first write the codes for your questions or simply generate it using the [JSON code generator](https://hind-sagar-biswas.github.io/kbcQuizzo/generatejson.html)

1. Then,

   * If you are first to contribute then fork the repository
   
   * If you are already a contributor, then create a new branch

1. Copy The Code you've wrote or generated

1. Open the `qna.json` file in edit mode

1. In the file, Paste The Code after the first third bracket as shown below:
   
   ```javascript
   applicationData [...],
   data = [
   //Paste the codes here
   	{
   		"question" : "A valid question?",
			"category" : "category",
			"subCategory" : "sub category",
			"difficulty" : "easy",
			"answer" : "correct answer",
			"otherOptions" : [
   			"option 1",
   			"option 2",
   			"option 3"
   			]
   	},
   	{...a question set...},
   	{...a question set...},
   	{...last a question set...}
   ]
   ```

1. Now create a [Pull Request](https://github.com/hind-sagar-biswas/kbcQuizzo/pulls)

1. Your code will then be reviewed and if everything is clear then it'll be merged
