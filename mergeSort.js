// const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
// function mergeSort(arr){
//   let arr1 = arr.slice(0, Math.floor(arr.length / 2))
//   let arr2 = arr.slice(Math.floor(arr.length / 2))

//   console.log(arr1 , arr2 )


  
//   //given an unsorted array, return a sorted array using mergeSort
//   //HINT: keep separate the array until they are 2 sorted arrays
//   //HINT2: You may need to have a recursive function
//   //HINT3: Make use of the Merge function you created
// }
// console.log(mergeSort(numsRandomOrder))



function merge(arr1, arr2){
  let [...newArr1] = arr1;
  let [...newArr2] = arr2;
  let merge = []
  while ( newArr1.length > 0 && newArr2.length > 0 ) {
      let one = newArr1 [0];
      let two = newArr2 [0];
      if (one < two) {
        merge.push(newArr1.shift());
      }else{
        merge.push(newArr2.shift());
      }
  }
  merge = merge.concat(newArr1).concat(newArr2)
  return merge
}

function mergeSort(nums) {
  if (nums.length === 1) {
    // return once we hit an array with a single item
    return nums;
  }
 // [3,1,6,8,2,7,3,7]

  const middleIdx = Math.floor(nums.length / 2); // 4
  const left = nums.slice(0, middleIdx); //[3,1,6,8]
  const right = nums.slice(middleIdx); //[2,7,3,7]
  const sortedLeft = mergeSort(left);  
  const sortedRight = mergeSort(right);
  return merge(sortedLeft, sortedRight);
}

// 2nd mergeSort [ 3,1,6, 8] lenght: 4
// middleIdx = 2
// left = [3,1]
// after line 53: sortedLeft: [1,3]
// move on to line 54 

//3rd mergeSort [3,1] length :2
// middleIdx = 1
// left [3]
// after line 54: 
//sortedLeft: [3]  sortedRight:[1]
// line 55: [1,3]

//4th mergeSort [3]. --> return [3]
// line 54 in mergeSort3:  5th mergeSort [1]

const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
console.log(mergeSort(numsRandomOrder))