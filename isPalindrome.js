var x = -121;

var isPalindrome = function(x) {
    let strX = x.toString()
    let i = 0
    let j = strX.length-1
    while (i <= j && j >= i){
        if(strX[i] == strX[j]){
            i++;
            j--;
        }
        else{
            return false
        } 
    }
    return true
};

console.log(isPalindrome(x));