//Making array 
var pizza = ["Chicken Tikka", "Fajita", "Tandori"];
//use for loop to print a message separately
for (var _i = 0, pizza_1 = pizza; _i < pizza_1.length; _i++) {
    var one_pizza = pizza_1[_i];
    console.log("I like ".concat(one_pizza, " pizza"));
}
//print a message outside of the for loop 
console.log("I love pizza very much.");
