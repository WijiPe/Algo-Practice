// Given in an alumni interview in 2021.
//   String Encode
//   You are given a string that may contain sequences of consecutive characters.
//   Create a function to shorten a string by including the character,
//   then the number of times it appears. 
  
  
//   If final result is not shorter (such as "bb" => "b2" ),
//   return the original string.
//   */

  const str1 = "aaaabbcddd";
  const expected1 = "a4b2c1d3";
  
  const str2 = "";
  const expected2 = "";
  
  const str3 = "a";
  const expected3 = "a";
  
  const str4 = "bbcc";
  const expected4 = "bbcc";
  
  function bookIndex(str1) {
    var newnums1 =""
    var count = 1
    for (var i = 0; i<str1.length; i++){
        if(i === 0){
          newnums1 = newnums1 + str1[i]
        }
        else{
          if (str1[i-1] != str1[i]){
            newnums1 = newnums1 + count + str1[i]
            count = 1
          }
          if (str1[i-1] === str1[i]){
            count += 1
          }
        }
    }
    newnums1 = newnums1 + count
    if(str1.length>newnums1.length){
      return newnums1
    }else{
      return str1
    }   
    
}
 console.log(bookIndex(str4))
  /**
   * Encodes the given string such that duplicate characters appear once followed
   * by a number representing how many times the char occurs only if the
   * character occurs more than two time.
   * - Time: O(?).
   * - Space: O(?).
   * @param {string} str The string to encode.
   * @returns {string} The given string encoded.
   */
  function encodeStr(str) { }
  
  module.exports = { encodeStr };
  
  /*****************************************************************************/
  
  /* 
    String Decode  
  */
  
  const str6 = "a3b2c1d3";
  const expected6 = "aaabbcddd";
  
  const str7 = "a3b2c12d10";
  const expected7 = "aaabbccccccccccccdddddddddd";
  
  // function bookIndex(str2) {
  //   var newnums2 =""
  //   for (var i = 0; i<str1.length; i++){
  //     if(str2[i] != )
  //   }
  /** for
   * Decodes the given string by duplicating each character by the following int
   * amount if there is an int after the character.
   * - Time: O(?).
   * - Space: O(?).
   * @param {string} str An encoded string with characters that may have an int
   *    after indicating how many times the character occurs.
   * @returns {string} The given str decoded / expanded.
   */
  function decodeStr(str) { }
  
  module.exports = { decodeStr };
  
  /*****************************************************************************/