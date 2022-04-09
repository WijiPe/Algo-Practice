function fibonacciArray(n){
    var fibArr = [0, 1];
    for(var i = 1; i < fibArr.length; i++){
        var NewfibArr = fibArr[i-1];
        NewfibArr = fibArr[i] + NewfibArr;
        fibArr.push(NewfibArr);
        if(fibArr.length === 10){
            return fibArr;
        }
    }
}
   
var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

