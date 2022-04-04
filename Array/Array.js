

function alwaysHungry(arr) {
    var found_yummy = false;
    for(var i = 0; i<arr.length; i++){
        if(arr[i] === "food"){
            console.log("yummy");
            found_yummy = true;
        } 
    }
    if(found_yummy === false){
        console.log("I'm hungry");
    }
}


alwaysHungry([3.14, "food", "pie", true, "food"]);
alwaysHungry([4, 1, 5, 7, 2]);

// this should console log "yummy", "yummy"

// this should console log "I'm hungry"
