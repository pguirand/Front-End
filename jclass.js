class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    display() {
        console.log(`${this.make} - Model : ${this.model} (${this.year})`);
    }
}

let mycar = new Car('audi', 'au9089', 2011);

console.log(mycar);
mycar.display();

class Sports extends Car {
 
    afficher() {
        console.log(`This is a sports Car of ... cylinders!`);
    }
}
let sport = new Sports('dodge', 'dd2212', 2016);
sport.display();
sport.afficher();


