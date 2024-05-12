//creating a function 
function makeShirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I love Typescript"; }
    console.log("You selected ".concat(size, " shirt with a message ").concat(message, " on it."));
}
//calling a function with default message and value
makeShirt();
//calling a function with medium size with default message
makeShirt("Medium");
//calling a function with small size with different value
makeShirt("Small", "I love Javascript");
