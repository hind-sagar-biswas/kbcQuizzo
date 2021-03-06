<p align="center">
  <img width="200" src="images/Quizzo.png">
</p>

# kbcQuizzo

![Project Language](https://img.shields.io/static/v1?label=language&message=javascript&color=yellow)
![Project Type](https://img.shields.io/static/v1?label=type&message=application&color=blue)
![Current Version](https://img.shields.io/static/v1?label=current-version&message=v1.0.7&color=lightgrey)
![Stable Version](https://img.shields.io/static/v1?label=stable-version&message=not-released&color=red)
![Maintained](https://img.shields.io/static/v1?label=maintained&message=yes&color=green)
![Ask Me Anything](https://img.shields.io/static/v1?label=ask-me&message=anything&color=green)
[![Website Up](https://img.shields.io/static/v1?label=website&message=up&color=orange)](https://hind-sagar-biswas.github.io/kbcQuizzo)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

A Vanilla JavaScript Quiz/Trivia Application

## Languages and Frameworks

1. Languages
   
   * Vanilla JavaScript
    
   * JSON
   
   * HTML5
   
   * CSS3
   
1. Frameworks
   
   * _**No Frameworks are used**_

## Clone Repo

#### HTTPS

```
https://github.com/hind-sagar-biswas/kbcQuizzo.git
```

#### SSH

```
git@github.com:hind-sagar-biswas/kbcQuizzo.git
```

#### Git CLI

```
gh repo clone hind-sagar-biswas/kbcQuizzo
```

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
general knowledge | geography, generalScience, currentAffairs
entertainment | movies, music, animations, tvShows, gaming, sports, webSeries

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

## License

This code has been licensed under `GNU AGPLv3` open source copyleft license. 

## Author

*Hind Sagar Biswas*

**Website:** [https://hindbiswas.000webhostapp.com/](https://hindbiswas.000webhostapp.com/)

[![Author Facebook](https://img.shields.io/static/v1?label=facebook&message=hindsagar.biswas&style=social&logo=facebook)](https://m.facebook.com/hindsagar.biswas)
[![Author Twitter](https://img.shields.io/static/v1?label=twitter&message=@hind_biswas&style=social&logo=twitter)](https://twitter.com/hind_biswas)
