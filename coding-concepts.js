// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:

// --------------------1) What will this log?

const cohort = "LEARN 2023"
 console.log(cohort.length)

// a) Your answer: This will tell us how many characters are in the string "LEARN 2023"
// b) Verify and explain: The .length command wil give us the length of the string including spaces.

// --------------------2) What will this log?

const greeting = "Hello World!"
 console.log(greeting[4])

// a) Your answer: I think this will log the letter "o" because it is the 4th character in the string "Hello World"
// b) Verify and explain: The letter "o" was returned because it is the 4th character in the string.

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
 console.log(languages[index])

// a) Your answer: I think this code will log "JavaScript" because it is the first string in the array.
// b) Verify and explain: I was wrong because the code was not using the length function. It used index, therefore the computer starts counting at zero and thus "Ruby" will be the first position.

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
 //console.log(weekendDays.toUpperCase())

// a) Your answer: This should make every letter in the two strings upper case.
// b) Verify and explain: an error message came back because the command toUppercase does not work in an array. It only works in strings. So if we removed the square brackets and made the string "saturday, sunday" then the command to uppercase would work as intended.

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
 console.log(typeof dataTypes.length)

// a) Your answer: This code should return the length of the array. It should log 4 because there are 4 total strings in the array.
// b) Verify and explain: this code inly logs the string "number" I suspected this was the case because typeof is included in the parameter of the console.log. I treid removinf typeof and the code logged 4. I'm not sure what typeof is, but I think it serves no purpose and should be deleted for the desired outsome.
