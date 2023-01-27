function noPairsAllowed(testCase){
    let output = []
    for(let i = 0; i < testCase.length; i++){
        let count = 0
        let j = 0
        while(j < testCase[i].length-1){
            console.log(j)
            if(testCase[i][j] == testCase[i][j+1]){   
                count++
                if(testCase[i][j+1] != undefined){
                    j = j+1
                }else{
                    break
                }
            }
            j++
        }
        output.push(count)
    }
    return output
}


console.log(noPairsAllowed(['ab', 'aab', 'abb', 'abab', 'abaaabaa']))
console.log(noPairsAllowed(['aaaa']))
