/* 
  String: Rotate String
  Create a standalone function that accepts a string and an integer,
  and rotates the characters in the string to the right by that given
  integer amount.
*/

const str = "Hello World";

const rotateAmnt1 = 0;
const expected1 = "Hello World";

const rotateAmnt2 = 1;
const expected2 = "dHello Worl";

const rotateAmnt3 = 2;
const expected3 = "ldHello Wor";

const rotateAmnt4 = 4;
const expected4 = "orldHello W";

const rotateAmnt5 = 13;
const expected5 = "ldHello Wor";

function rotateStr(str, amnt) {
    var newstr =""
    var x = amnt % str.length
    for (let i = str.length-x; i < str.length ; i++){
        newstr += str[i]
    }
    for (let i = 0; i < str.length-x ; i++){
        newstr += str[i]
    }
    return newstr
}

console.log(rotateStr(str, 4))


/**
 * Rotates a given string's characters to the right by the given amount,
 * wrapping characters to the beginning.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @param {number} amnt The amount of characters in the given str to rotate to the
 *    right.
 * @returns {string} The string rotated by the given amount.
 */

function rotateStr(str, amnt) {
       /* create new string to be returned */
    newstr = ""  
    /* if amnt exceeds str length, use modulus to isolate remainder for rotation */
    if (amnt > str.length) {
        amnt = amnt % str.length 
    }
    /* start at index position (str.length - amnt) and push values to newstr from that starting position until the end of the string */
    for (let i = str.length-amnt; i < str.length; i++) {
        newstr += str[i]
    }
     /* start at position 0 and push values to newstr from that starting position until (str.length - amnt) */
    for (let i = 0; i < str.length-amnt; i++) {
        newstr += str[i]
    }
    /* console.log the result newstr */
    console.log(newstr)
    /* return the result newstr*/
    return newstr
    }
rotateStr("Hello World",13)
    /* str length is 11 so our if statement transforms amt to 2 (13 % str.length = 2) before running the rotation*/