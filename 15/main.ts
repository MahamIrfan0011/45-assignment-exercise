let guestList = ["Maham","Tayyiba","Rida","Aleena"];
let dontCome = guestList[1];
console.log(dontCome , "Nhi aa skti");
guestList.splice(1,1,"Hafsa");
guestList.forEach(guest => console.log(`Salam ${guest}, would you like to dinner with me?`));
