
  const sortedA1 = [];
  const sortedB1 = [];
  //expected output: [];
  
  const sortedA2 = [5];
  const sortedB2 = [2];
  //expected output: [2, 5];
  
  const sortedA3 = [3];
  const sortedB3 = [2, 3, 4, 7];
  //expected output: [2, 3, 3, 4, 7];
  
  const sortedA4 = [1, 2, 4, 6, 9];
  const sortedB4 = [3, 7, 8, 10];
  //expected output: [1, 2, 3, 4, 6, 7, 8, 9, 10];

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

  console.log( merge( sortedA1 , sortedB1 ) )
  console.log( merge( sortedA2 , sortedB2 ) )
  console.log( merge( sortedA3 , sortedB3 ) )
  console.log( merge( sortedA4 , sortedB4 ) )