// creating guest list
let guestList = ["Maham","Taayiba","Rida","Aleena"];

//guest who dont come
let dontCome = guestList[1];

//print guest who dont come
console.log(dontCome , "Nahi aa sakti.");

//adding or remove guest name
guestList.splice(1,1,"Hafsa");

//adding news for a big table of dinner
console.log("Good News ! we have found a bigger table for dinner.");

//adding name at beginning of array
guestList.unshift("Ayesha");

//adding name at end of array
guestList.push("Alishba");

//adding name at center of array
let middleIndex: number = Math.floor(guestList.length / 2);

//adding new guest at middle index
guestList.splice(middleIndex ,0,"Anusha");

console.log("Updated list of our guests");

guestList.forEach(oneGuest => console.log(`Salam ${oneGuest} , would you like to dinner with me?`));



