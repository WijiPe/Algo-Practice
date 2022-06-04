ref: https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/

// To test the function, use Shell in the terminal on the right. Type node W1D1.js


const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


function selectionSort(nums) {
  for(let x = 0; x < nums.length-1; x++){
      let minimum = x;
  for(let y = x+1; y < nums.length; y++){
      if(nums[y] < nums[minimum]) {
        minimum = y;
      }
  }
      if (x !== minimum) {
      let temp = nums[x];
      nums[x] = nums[minimum];
      nums[minimum] = temp;
    }
  }
  return nums
}

console.log(selectionSort(numsOrdered))
console.log(selectionSort(numsRandomOrder))
console.log(selectionSort(numsReversed))
