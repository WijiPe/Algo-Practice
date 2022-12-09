function ErrorDigitRange(num){
    let max = -Infinity
    let min = Infinity
    let numString = num.toString()

    let i = 9
    while(i > 0){  
        let newNumString = ''
        for(let j = 0; j < numString.length; j++){
            newNumString = numString.replaceAll(numString[j], i.toString())
            // console.log(newNumString)
            max = Math.max(max, parseInt(newNumString))
            min = Math.min(min, parseInt(newNumString))
        }
        i--
    }

    let newNumString = ''
    let skipFirstDigit = numString.slice(1, numString.length+1)

    for(let j = 0; j < skipFirstDigit.length; j++){
        if(numString[0] != skipFirstDigit[j]){
            newNumString = numString[0] + skipFirstDigit.replaceAll(skipFirstDigit[j], '0')
        }else{
            newNumString = max
        }
        // newNumString = numString[0] + skipFirstDigit.replaceAll(skipFirstDigit[j], '0')
        console.log(newNumString)
        max = Math.max(max, parseInt(newNumString))
        min = Math.min(min, parseInt(newNumString))
    }

    console.log('ans', max, min)
    console.log('ans', max - min)
    return max - min
}

// ErrorDigitRange(909) //898
// ErrorDigitRange(123512) //82008
// ErrorDigitRange(111) //888
// ErrorDigitRange(2020)
ErrorDigitRange(151) //