
/* let afficher = (function() {
    let b = 25;
    let c = parseInt(b) + 20;
    console.log("result est "+ c);
});

afficher(); */

/* function display() {
    console.log("Nom : "+this.firstName+" Prenom : "+this.lastName);
}

let employe1 = {
    firstName : "Edouard",
    lastName : "Granvil",
    afficher : display
}
let employe2 = {
    firstName : "Ricardo",
    lastName : "Jean",
    afficher : display
}

employe1.afficher();
employe2.afficher(); */

function stock(qte) {
    console.log(`Il reste ${qte} ${(qte <= 1 ? 'produit' : 'produits')} en stock.`)
}
stock(2);

function reason() { return 1; }

let result = `There ${(reason()==1 ? 'is one product' : 'are several products')} left (${reason()}).`;
console.log(result);
