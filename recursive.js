// So what is recursion
function recursive_count(myNum){
    console.log(myNum);
    if(myNum == 0){
        return "you have reached 0";
    }
    else {
        return recursive_count(myNum-1);
    }
}

console.log(recursive_count(5));