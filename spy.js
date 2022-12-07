var firstName = prompt("Enter first name : ");
var lastName = prompt("Enter last name : ");
var age = prompt("Enter age : ");
var height = prompt("Enter your height in cm : ");
var pet = prompt("Enter Pet's name : ");

alert('Thank you for the information');

var nameCond = null;
var ageCond = null;
var heightCond = null;
var petCond = null;

if (firstName[0] === lastName[0]) {
    nameCond = true;
} else {
    nameCond = false;
}

if (20 <= age <= 30) {
    ageCond = true;
} else {
    ageCond = false;
}

if (height >= 170) {
    heightCond = true;
} else {
    heightCond = false;
}
if (pet[pet.length - 1] === 'y') {
    petCond = true;
} else {
    petCond = false;
}

if (nameCond && ageCond && heightCond && petCond) {
    console.log("Test passed ! Welcome Comrade.");
} else {
    console.log("Nothing Here...")
}
