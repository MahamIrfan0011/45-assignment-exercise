//define variables

let mango = "mango";
let uppercaseMango = "MANGO";
let seven = "7";
let twenty = "20";
let vegetables = ["carrot","potato","tomato","onion"];

//test for equality and inequality for string

console.log("Is mango is equal to mango?");
console.log(mango=="mango");

console.log("\nIs mango is not equal to mango?");
console.log(mango!="mango");

//Test using lower case function

console.log("\nIs MANGO is equal to mango after converting into lowercase?");
console.log(uppercaseMango.toLowerCase()==mango);

console.log("\nIs MANGO is not equal to mango after converting into lowercase?");
console.log(uppercaseMango.toLowerCase()!=mango);

//numeric tests 

console.log("\nIs twenty is equal to seven?");
console.log(twenty==seven);

//not equal

console.log("\nIs seven is not equal to twenty?");
console.log(seven!=twenty);

//greater than

console.log("\nIs twenty is greater than seven?");
console.log(20>7);

//less than

console.log("\nIs seven is less than two?");
console.log(7<2)

//greater than or equal to

console.log("\nIs twenty is greater than or equal to 10?");
console.log(20>=10);

//less than or equal to

console.log("\nIs twenty is less than or equal to seven?");
console.log(20<=7);

//using 'and' & 'or' operator

//using && (and)
console.log("\ntwenty is not equal to seven and twenty is greater than 7");
console.log(twenty !=seven && 20>7);

console.log("\ntwenty is not equal to seven and twenty is greater than 30");
console.log(twenty !=seven && 20>30);

//using || (or)
console.log("\n twenty is greater than 45 OR twenty is equal to twenty");
console.log(20 > 45 || 20==20);

console.log("\nseven is greater than twenty OR seven is not equal to seven");
console.log(7 > 20 || 7!=7);

//test whether an item is include in array

console.log("\nIs carrot is include in my vegetable array?");
console.log(vegetables.includes("carrot"));

//not include

console.log("\nIs carrot not include in my vegetables array?");
console.log(!vegetables.includes("carrot"));