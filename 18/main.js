var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//print array in original order
var countriesToVisit = ["USA", "China", "Japan", "Canada", "Egypt"];
console.log("Original order:", countriesToVisit);
//print array in alphabetical order without modifying original order
console.log("Alphabetical order:", __spreadArray([], countriesToVisit, true).sort());
//see that our array in its original order
console.log("Still in original order:", countriesToVisit);
//print our array in reverse order without changing original order
console.log("Reverse alphabetical order:", __spreadArray([], countriesToVisit, true).reverse());
//see that our array in its original order
console.log("Still in its original order:", countriesToVisit);
//Reverse the original list 
console.log("Reverse the original array:", countriesToVisit.reverse());
//reversed the original list again (back to original order)
console.log("Back to original order:", countriesToVisit.reverse());
//sort the original list in alphabetical order
console.log("Sort the list in Alphabetical order:", countriesToVisit.sort());
//reversed the original list again (back to original order)
console.log("reverse to original order again:", countriesToVisit.reverse());
