
// function partition(nums, left=0, right=nums.length-1){
//     //Step 1: choose any number from the arr as the pivot
//     let pivotIndex = Math.floor(nums.length/2)
//     let numsLeft = nums.slice(0, pivotIndex)
//     let numsRight = nums.slice( pivotIndex+1)
//     let newNumsLeft = []
//     let newNumsRight = []
//     let newNums = []
//     let arrPivot = [nums[ pivotIndex ]]

//     for(i = 0; i< numsLeft.length; i++){
//         if(numsLeft[i]>nums[ pivotIndex ]){
//             newNumsRight.push(numsLeft[i])
//         }else{
//             newNumsLeft.push(numsLeft[i])
//         }
//     }
//     for(i = 0; i< numsRight.length; i++){
//         if(numsRight[i]<=nums[pivotIndex]){
//             newNumsLeft.push(numsRight[i])
//         }else{
//             newNumsRight.push(numsRight[i])
//         }
//     }
//     newNums = newNums.concat(newNumsLeft).concat(arrPivot).concat(newNumsRight)
//     return newNums.indexOf(nums[ pivotIndex ])
//     //Step 2: move the nums smaller than the pivot on the left
//     // and nums greats than pivot on the right
//     //Step 3: return the pivot index
// }


// function partition(nums, left = 0, right = nums.length - 1) {
//     //Step 1: choose any number from the arr as the pivot
//     //Step 2: move the nums smaller than the pivot on the left
//     // and nums greats than pivot on the right
//     //Step 3: return the pivot index
//     let pivot = nums[Math.floor((left + right) / 2)];
//     let i = left;
//     let j = right;
//     while (i <= j) {
//       while (nums[i] < pivot) {
//         i++;
//       }
//       while (nums[j] > pivot) {
//         j--;
//       }
//       if (i <= j) {
//         [nums[i], nums[j]] = [nums[j], nums[i]];
//         i++;
//         j--;
//       }
//     }
//     console.log(nums);
//     console.log(pivot);
//     console.log(i)
//     return i;
//   }
  
//   quickSort(nums1)
  
//   function partition2(nums, leftIdx = 0, rightIdx = nums.length - 1) {
//     const midIdx = Math.floor((leftIdx + rightIdx) / 2);
//     const pivotVal = nums[midIdx];
//     const tempPivotIdx = rightIdx;
  
//     // Swap the pivot to the end of the section being partitioned so its
//     // position can be kept track of, then move it last to its final position.
//     [nums[midIdx], nums[tempPivotIdx]] = [nums[tempPivotIdx], nums[midIdx]];
  
//     // Skip over the pivot that was moved to the end so it stays there for now.
//     rightIdx = tempPivotIdx - 1;
  
//     // Look for a num on the left and on the right that both need to be moved to
//     // the other side so one swap can move both of them to the correct side.
//     while (true) {
//       // Move leftIdx until we find a num that is out of place.
//       while (nums[leftIdx] < pivotVal) {
//         leftIdx += 1;
//       }
  
//       // Move rightIdx until we find a num that is out of place.
//       while (nums[rightIdx] > pivotVal) {
//         rightIdx -= 1;
//       }
  
//       // All nums have been iterated over, partitioning is complete.
//       if (leftIdx >= rightIdx) {
//         // Swap the pivot to it's final location.
//         [nums[tempPivotIdx], nums[leftIdx]] = [nums[leftIdx], nums[tempPivotIdx]];
//         return leftIdx;
//       }
  
//       // Swap the two out of place nums so they will both be on the correct side.
//       [nums[leftIdx], nums[rightIdx]] = [nums[rightIdx], nums[leftIdx]];
  
//       // After swapping, we're done with this pair, move on.
//       leftIdx += 1;
//       rightIdx -= 1;
//     }
//   }


function partition(nums, left=0, right=nums.length-1){
    let pivotIndex = Math.floor(nums.length/2)
    console.log(pivotIndex)
    let newNumsLeft = []
    let newNumsRight = []
    let newNums = []
    let arrPivot = [nums[ pivotIndex ]]
    

for( i = 0 ; i < nums.length ; i++ ) {
    if ( i != pivotIndex )
    {
        if(nums[i]>nums[ pivotIndex ]){
            newNumsRight.push(nums[i])
        }else{
            newNumsLeft.push(nums[i])
        }
    }
    }
    newNums = newNums.concat(newNumsLeft).concat(arrPivot).concat(newNumsRight)
    console.log(newNums)
    return newNumsLeft.length

    // newNums.indexOf(nums[ pivotIndex ])
}
  // example for nums1: (if middle idx is picked)
  // pivot = 8, pivot index = 3 
  // expected arr after partition:
  // [3,2,7,8,11,14]
  // numbers on the left/right do not need to be in order
  // 3,2,7 are smaller than 8. 11, 14 are larger than 8. 
  // return: index of the pivot: 3
  const nums1 = [11, 3, 14, 8, 6, 2, 7];
  const nums2 = [11, 8, 14, 3, 3, 3, 6, 2, 7];
  const nums3 = [1, 17, 12, 3, 9, 13, 21, 4, 27];
  const nums4 = [2, 1];
  
  console.log(partition(nums1, left=0, right=nums1.length-1))
  console.log(partition(nums2, left=0, right=nums2.length-1))
  console.log(partition(nums3, left=0, right=nums3.length-1))
  console.log(partition(nums4, left=0, right=nums4.length-1))
  
//   function quickSort(nums = [], left = 0, right = nums.length - 1){
    
//     if (nums.length === 1) {

//       return nums;
//     }

//     const middleIdx = Math.floor(nums.length / 2); // 4
//     const arrleft = nums.slice(0, middleIdx); //[3,1,6,8]
//     const arrright = nums.slice(middleIdx); //[2,7,3,7]
//     const sortedLeft = quickSort(arrleft = [], left = 0, right = arrleft.length - 1);  
//     const sortedRight = quickSort(arrright = [], left = 0, right = arrright.length - 1);
//     return partition(nums, left=0, right=nums.length-1);
// }
  

function quickSort(nums = [], left = 0, right = nums.length - 1) {
    if (left < right) {
      const pivotIndex = partition(nums, left, right);
      quickSort(nums, left, pivotIndex);
      quickSort(nums, pivotIndex + 1, right);
    }
    return nums;
  }
  
  
  
//   function partition(nums, leftIdx = 0, rightIdx = nums.length - 1) {
//     const midIdx = Math.floor((leftIdx + rightIdx) / 2);
//     const pivotVal = nums[midIdx];
//     const tempPivotIdx = rightIdx;
  
//     // Swap the pivot to the end of the section being partitioned so its
//     // position can be kept track of, then move it last to its final position.
//     [nums[midIdx], nums[tempPivotIdx]] = [nums[tempPivotIdx], nums[midIdx]];
  
//     // Skip over the pivot that was moved to the end so it stays there for now.
//     rightIdx = tempPivotIdx - 1;
  
//     // Look for a num on the left and on the right that both need to be moved to
//     // the other side so one swap can move both of them to the correct side.
//     while (true) {
//       // Move leftIdx until we find a num that is out of place.
//       while (nums[leftIdx] < pivotVal) {
//         leftIdx += 1;
//       }
  
//       // Move rightIdx until we find a num that is out of place.
//       while (nums[rightIdx] > pivotVal) {
//         rightIdx -= 1;
//       }
  
//       // All nums have been iterated over, partitioning is complete.
//       if (leftIdx >= rightIdx) {
//         // Swap the pivot to it's final location.
//         [nums[tempPivotIdx], nums[leftIdx]] = [nums[leftIdx], nums[tempPivotIdx]];
//         return leftIdx;
//       }
  
//       // Swap the two out of place nums so they will both be on the correct side.
//       [nums[leftIdx], nums[rightIdx]] = [nums[rightIdx], nums[leftIdx]];
  
//       // After swapping, we're done with this pair, move on.
//       leftIdx += 1;
//       rightIdx -= 1;
//     }
//   }