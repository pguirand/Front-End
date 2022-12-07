console.log('HEllo World');
console.log('12');


class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    getBirthYear() {
        return this.dob.getFullYear();
    }

}

person1 = new Person('Marie', 'Cenatus', '09-25-1991');

const allo = person1.getFullName();
const year = person1.getBirthYear();
console.log(allo);
console.log(year);

document.addEventListener('DOMContentLoaded', () => {
    const mois = document.querySelectorAll('.mois');
    mois.forEach((item) => console.log(item));
    // console.log(mois);
    const btn = document.querySelector('#bouton');
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        console.log(e.target.id);
        e.target.style.background = 'red';
        document.querySelector('#form1').style.background = '#ccc';
    })
})