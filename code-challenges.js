// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Pseudo code:

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"
// Expected outcome: "cherry"

// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Pseudo code:
//input: a function using arrow syntax that determines if the boiling point is at, above, or below 212.
// Create "else if" and "else" statements for if the water temp is above or below the boiling point.
// consolelog the functions for 42,350, and 212
//output: for 42 we should get below boiling pint, 350 should return above boiling point, and 212 should return at boiling point.

// const temperature1 = 42
// // Expected output: "42 is below boiling point"

// const temperature2 = 350
// // Expected output: "350 is above boiling point"

// const temperature3 = 212
// // Expected output: "212 is at boiling point"

  const waterTemp = (temp) => {
  if (temp > 212) {
      return "Water is above boiling point"
  }
  else if (temp === 212){
      return "Water is at boiling point"
  }
  else if(temp < 212) {
      return " Water is not boiling"
  }
  else {
      return "something went wrong"
  }
  }
 console.log(waterTemp(350))
 console.log(waterTemp(42)) 
 console.log(waterTemp(212))

// // --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// // Pseudo code:
// //Input a function to concat arrays, consolelog the length.
// //Output should be the total length of both arrays.

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]

 const totalRuns = padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns) 
 console.log(totalRuns.length) 
// // Expected output: 9

// // --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// // Pseudo code:
// // input:create a function that splits "currentCohort", then reverses it, and joins it back together.
// // output: we should get back the mirrored string.

 const currentCohort = "Bravo 2023"
 const reverseString = currentCohort.split("") .reverse(). join("")
 console.log(reverseString)

// // Expected output: "3202 ovarB"

// // --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// // Pseudo code:
//input: use the 'last index of' method to locate where 42 and 10 are the second time theyre used. we're using last index of because 42 and 10 are both used twice, and we want to know their location the last time they're used. After looking at my notes I found that lastindexOf will always be the length minus 1.
//output:I originally thought we would get back 6 with the given value 42 but then remembered were using the index method so we start counting from zero. Should return 7. Given value 10 should return 8 and not 7.

  const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10]
  const givenValue1 = 42
  console.log(myNumbers.lastIndexOf (givenValue1)) 

// // Expected output: 7

  const givenValue2 = 10
  console.log(myNumbers.lastIndexOf (givenValue2)) 

// // Expected output: 8

// // --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// // Pseudo code:
//input:I originally planned on creating a function for this one but after a google search i learned about sort. Sort will order the numbers in the array in ascending order. after that we should be able to  consolelog reverse and get the numbers in descending order.
//output: After reverse is used the numbers should return in descending order which is what we want.

 const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
  console.log(sanDiegoSummerTemperatures.sort())
  console.log(sanDiegoSummerTemperatures.reverse())


// // Expected output: [82, 80, 79, 77, 76, 73, 72]

 const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
 //Expected output: [68, 67, 66, 66, 62, 59, 59]
 console.log(sanDiegoWinterTemperatures.sort())
 console.log(sanDiegoWinterTemperatures.reverse())