function queueTime(customers, n) {
    let arr = Array(n).fill(0)
    let sum = 0
    for(let i = 0; i < customers.length; i++ ){
      let min = arr.reduce((prev, a, j) => {return arr[j] <= arr[prev] ? j: prev},0)
      if (arr[min] == 0){
        arr[min] = customers[i]
      } else {
        sum += arr[min]
        let temp = arr[min]
        for(let j = 0; j < arr.length; j++){
          arr[j] = arr[j] - temp
        }
        arr[min] = customers[i]
      }
    }
    return sum + Math.max(...arr)
}

console.log( queueTime([25,8,15,21,15,25,43,13,46,50,10,7,34,17,8,38,3,23,41,15,42,36,46], 3))

// [25,8,15,21,15,25,43,13,46,50,10,7,34,17,8,38,3,23,41,15,42,36,46] and n = 3 - Expected: 210, instead got: 300