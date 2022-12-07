var car = {
    make : 'Toyota', 
    year : 1990, 
    model : 'Rav4',
    transmission : 'Manuelle'
}
console.log(car);

for (item in car) {
    console.log(item);
    console.log(car[item]);
}

//method namelenght

//method alert each key, value pair 
// Name is.., job is..., Age is...

//method print last name

var employee = {
    nom : 'Pierre Marc', 
    age : '31', 
    job : 'Programmer',
    nameLenght : function() {
        alert("Name lenght is  "+ this.nom.length)
    },
    afficher : function() {
        alert("Name is "+this.nom+", job is "+this.job+", age is "+this.age);
    },
    split: function() {
        var text = this.nom.split(" ");
        var choix = text[text.length - 1];
        console.log(choix);
    }
}
