/* 
Given an arr and a separator string, output a string of every item in the array separated by the separator.

No trailing separator at the end
Default the separator to a comma with a space after it if no separator is provided
*/


//for loop looping through the array
//function that can accept two variables: one is array, one is seperator
//create a variable that is a string where you can add value and seperator
//return the string

const arr1 = [1, 2, 3];
const separator1 = ", ";
const expected1 = "1, 2, 3";

const arr2 = [1, 2, 3];
const separator2 = "-";
const expected2 = "1-2-3";

const arr3 = [1, 2, 3];
const separator3 = " - ";
const expected3 = "1 - 2 - 3";

const arr4 = [1];
const separator4 = ", ";
const expected4 = "1";

const arr5 = [];
const separator5 = ", ";
const expected5 = "";

/**
 * Converts the given array into a string of items separated by the given separator.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<string|number|boolean>} arr The items to be joined as a string.
 * @param {string} separator To separate each item of the given arr.
 * @returns {string} The given array items as a string separated by the given separator.
 */

function join(arr, separator) {
    let newStr = ""
    for(i=0; i<arr.length; i++){
        if (i != arr.length-1){
            newStr = newStr + arr[i] + separator;
        }
        else{
            newStr = newStr + arr[i];
        }
        
    } 
    return newStr
}

console.log(join(arr1, separator1));