function reverse(arr) {
var i = 0
var j = arr.length-1

while(i<j){
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i = i + 1;
    j = j - 1;
}
return (arr);
}
   
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]
