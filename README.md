# kbcQuizzo
A JavaScript Quiz/Trivia Application

## Questions for Quiz

### Question storage

Questions are stored in `qna.json` file in the `/root` directory as JSON.

### JSON Structure

```json
data = [
	{
		"question" : "A valid question?",
		"answer" : "correct answer",
		"otherOptions" : [
			"option 1",
			"option 2",
			"option 3"
			]
	},
	{
		"question" : "Another valid question?",
		"answer" : "correct answer",
		"otherOptions" : [
			"option 1",
			"option 2",
			"option 3"
			]
	}
]
```