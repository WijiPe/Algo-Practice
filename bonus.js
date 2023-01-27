const array1 = ["aONE", "aTWO"];
const array2 = ["aONE", "aTWO", "aTHREE", "aFOUR"];
const array3 = ["aONE", "bONE", "aTWO", "bTWO", "aTHREE", "aFOUR", "bONE", "bTWO"];

function bonus(problemArray){
    let map = {}

    for(let i = 0; i < problemArray.length; i++){

        if(map[problemArray[i][0]] >= 0){
            let temp = problemArray[i]
            problemArray[i] = problemArray[map[problemArray[i][0]]]
            problemArray[map[problemArray[i][0]]] = temp
            map[problemArray[i][0]] = -1
        }else{
            map[problemArray[i][0]] = i
        }


    }
    return problemArray


}

console.log(bonus(array1))
console.log(bonus(array2))
console.log(bonus(array3))