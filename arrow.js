/* let hi = () => {
    console.log("hello");
}
hi(); */

/* let hi = (name) => {
    console.log(`the name is ${name}`);
}

hi('John'); */

/* let liste = ['junior', 'Fred', 'Amanda', 'Bedia', 'Elsa'];
liste.map((nom) => {
    console.log(`Hello ${nom} !`)}); */

let liste = ['junior', 'Fred', 'Amanda', 'Bedia', 'Elsa'];
var transformed = liste.map((nom) => {
    return `hello, ${nom} !`
});
console.log(transformed);

let numbers = [15, 3, 2, 10, 8, 5, 9, 7, 11, 23, 12, 17, 20];
console.log(numbers);

let filtered = numbers.filter((a) => {
    if (a < 10) {return a;}
});
console.log(filtered);
 
liste.forEach((nom) => {console.log(`Hola, ${nom} !`)});

console.log(filtered.every((num) => num < 7));
console.log(numbers.some((num) => num >=23));
