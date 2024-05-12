//print array in original order
let countriesToVisit: string[] = ["USA","China","Japan","Canada","Egypt"];
console.log("Original order:" , countriesToVisit);

//print array in alphabetical order without modifying original order
console.log("Alphabetical order:" , [...countriesToVisit].sort());

//see that our array in its original order
console.log("Still in original order:" , countriesToVisit);

//print our array in reverse order without changing original order
console.log("Reverse alphabetical order:" , [...countriesToVisit].reverse());

//see that our array in its original order
console.log("Still in its original order:" , countriesToVisit);

//Reverse the original list 
console.log("Reverse the original array:" , countriesToVisit.reverse());

//reversed the original list again (back to original order)
console.log("Back to original order:" , countriesToVisit.reverse());

//sort the original list in alphabetical order
console.log("Sort the list in Alphabetical order:" , countriesToVisit.sort());

//reversed the original list again (back to original order)
console.log("reverse to original order again:" , countriesToVisit.reverse());