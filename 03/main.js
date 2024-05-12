var PersonName = "Maham Irfan";
console.log(PersonName.toUpperCase());
console.log(PersonName.toLowerCase());
console.log(PersonName.replace(/\b\w/, function (char) { return char.toUpperCase(); }));
