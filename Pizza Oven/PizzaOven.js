function pizzaOven(crustType, sauceType, cheeses, toppings){
    var Pizza = {};
    Pizza.crustType = crustType;
    Pizza.sauceType = sauceType;
    Pizza.cheeses = cheeses;
    Pizza.toppings = toppings;
    return Pizza;
}
    
var x = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
var y = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"])
console.log(x);
console.log(y);

function randomPizza(){
    var crustType = ["deep dish","hand tossed"];
    var sauceType = ["traditional","marinara"];
    var cheeses = ["mozzarella","feta"];
    var toppings = ["mushrooms", "olives", "onions"];
    var Pizza = {};
    Pizza.crustType = crustType[Math.floor(Math.random()*2)]
    Pizza.sauceType = sauceType[Math.floor(Math.random()*2)]
    Pizza.cheeses = cheeses[Math.floor(Math.random()*2)]
    Pizza.toppings = toppings[Math.floor(Math.random()*3)]
    console.log(Pizza.crustType, Pizza.sauceType, Pizza.cheeses, Pizza.toppings);
    return Pizza;
}
console.log(randomPizza());