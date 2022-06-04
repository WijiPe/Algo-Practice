const riverLevels1 = [15, 17, 30];
const expected1 = 15; // 30 - 15 = 15

const riverLevels2 = [15, 17, 30, 14, 5, 16, 25, 9, 3];
const expected2 = 20; // 25 - 5 = 20

const riverLevels3 = [21, 18, 10, 11, 14, 9, 5, 13, 15, 7, 1, 6, 12, 4];
const expected3 = 11; // 12 - 1 = 11

const riverLevels4 = [1, 5];
const expected4 = 4;

const riverLevels5 = [5, 1];
const expected5 = -1;

const riverLevels6 = [9, 7, 7, 7];
const expected6 = -1;

const riverLevels7 = [42];
const expected7 = -1;


function measureWaterLevels(waterLevels) {
    //Find the largest rise in water levels during a day
    let diff = -1
        for(let i =0; i< waterLevels.length; i++){
            for(let j = waterLevels.length-1; j>i; j--){
                if(waterLevels[j]- waterLevels[i] > diff){
                    console.log("this is"  + [waterLevels[j], waterLevels[i]])
                    diff = waterLevels[j]-waterLevels[i]
                }
            }
            
        }
        if(diff === 0){
            return -1
        }
    return diff
}

console.log(measureWaterLevels(riverLevels1))
console.log(measureWaterLevels(riverLevels2))
console.log(measureWaterLevels(riverLevels3))
console.log(measureWaterLevels(riverLevels4))
console.log(measureWaterLevels(riverLevels5))
console.log(measureWaterLevels(riverLevels6))
console.log(measureWaterLevels(riverLevels7))