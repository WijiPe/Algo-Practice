
// const expected1 = "1, 13-15, 37-38, 70";


const nums1 = [1, 13, 14, 15, 37, 38, 70];

function bookIndex(nums1) {
    var newnums1 =[]
    var x = 0
    for (var i = 0; i<nums1.length; i++){
        if(i === 0){
            newnums1.push([nums1[i], nums1[i]])
        }
        else{
            x = nums1[i];
            if(x === nums1[i-1]+1){
                newnums1[newnums1.length-1][1] = x
            }else{  
                newnums1.push([nums1[i], nums1[i]])  
            }
        }
    }    
    return newnums1
}

console.log(bookIndex(nums1))

