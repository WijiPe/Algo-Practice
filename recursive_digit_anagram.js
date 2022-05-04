/*
Sum To One Digit
Implement a function sumToOne(num)​ that,
given a number, sums that number’s digits
repeatedly until the sum is only one digit. Return
that final one digit result.
Tips:
    to access digits from a number, need to convert it .toString() to access each digit via index
    parseInt(arg) returns arg parsed as an integer, or NaN if it couldn't be converted to an int
    isNaN(arg) used to check if something is NaN
*/

const num1 = 54321; // --> 15 ---> 6
const expected1 = 6;

const num2 = 10;
const expected2 = 1;

const num3 = 25;
const expected3 = 7;


/**
 * Sums the given number's digits until the number becomes one digit.
 * @param {number} num The number to sum to one digit.
 * @returns {number} One digit.
 */
//  Take in numbers.
//  Convert the numbers into a string.
//  Access each digit in the string
//  parseINt to parse value as a string and return first integer
//  

function sumToOneDigit(num) {
  if(num < 10){
    return num
  }
  let strNum = num.toString()
  let sum = 0
  for(let i =0; i < strNum.length; i++){
      sum += parseInt(strNum[i])
  }
  return sumToOneDigit(sum)
  
}
module.exports = { sumToOneDigit };

/*****************************************************************************/
// BONUS ALGO
// http://algorithms.dojo.news/static/Algorithms/index.html#LinkTarget_2129
/* 
  String Anagrams
  Given a string,
  return array where each element is a string representing a different anagram (a different sequence of the letters in that string).
  Ok to use built in methods
*/

const str1 = "lim";
const expected1 = ["ilm", "iml", "lim", "lmi", "mil", "mli"];
// Order of the output array does not matter

/**
 * Add params if needed for recursion.
 * Generates all anagrams of the given str.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {Array<string>} All anagrams of the given str.
 */

function generateAnagrams(str) {
  if (str.length == 1){
    return [str[0]]
  }
  let result = []
  
  for(let i = 0; i<str.length; i++){
    let newStr = str.substring(0, i) + str.substring(i+1, str.length)
    let anagram = generateAnagrams(newStr)
    for(let j = 0; j < anagram.length; j++){
      result.push(str[i]+anagram[j])
    }
  }
  return result
}

console.log(generateAnagrams(str1))

module.exports = { generateAnagrams };

/*****************************************************************************/