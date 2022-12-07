alert('Welcome to students WebApp');

var roster = [];
function AddStudent() {
    var student = prompt("Entrer nom etudiant");
    roster.push(student);
}

function display() {
    console.log(roster);
}

function remove() {
    var remstudent = prompt('Entrer nom a effacer : ');
    var index = roster.indexOf(remstudent);
    roster.splice(index, 1);

}


while (choix!=='quit') {
    var choix = prompt("Enter your choice (add, remove, display, quit) : ");
    if (choix==='add') {
        AddStudent();
    } else if (choix === 'remove') {
        remove();
    } else if (choix === 'display') {
        alert('display');   
        display();
    } else if (choix==='quit') {
        alert('Au Revoir !')
    } else {
        alert('Erreur. Verifier choix.')
    }
}

// AddStudent();
// console.log(roster);