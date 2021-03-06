# Contributing to this Repository

## Getting Started

1. Firstly read the `README.md` properly.

1. Then make sure that you have read the [code of conduct](https://github.com/hind-sagar-biswas/kbcQuizzo/blob/main/CODE_OF_CONDUCT.md).

1. Check [issues](https://github.com/hind-sagar-biswas/kbcQuizzo/issues) to see if an issue exists already for the change you want to make.

## Don't see your issue? Open one

If you spot something new, open an issue using a template. We'll use the issue to have a conversation about the problem you want to fix.

## Ready to make a change? Fork the repo

Fork the repo so that you can make your changes without affecting the original project until you're ready to merge them.

## Make Update

Make your changes to the file(s) you'd like to 

## How to add Questions

Wanna Contribute by adding new questions? Well you can. Just follow the following instructions

### Generate Question Codes

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


## Open a pull request

When you're done making changes and you'd like to propose them for review, use the pull request template to open your PR (pull request).

Once you made a PR, it'll be reviewed and then be merged.

## PR merged

As soon as all the conflicts are resolved, your PR would be merged.

## Congrats ✨

Congratulations 🎉, you are now a contributor to this Repository. Keep making changes and improve this repo.
