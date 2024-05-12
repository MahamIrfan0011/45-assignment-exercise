var guestList = ["Maham", "Tayyiba", "Rida", "Aleena"];
var dontCome = guestList[1];
console.log(dontCome, "Nhi aa skti");
guestList.splice(1, 1, "Hafsa");
guestList.forEach(function (guest) { return console.log("Salam ".concat(guest, ", would you like to dinner with me?")); });
