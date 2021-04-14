const scanf = require('scanf');


console.log('Entrez un nombre');
var nb = scanf('%d');

var index = 1;
var somme = 0;

while (index <= nb) {
    somme = somme + index;
    index = index + 1;
}
console.log("La somme des nombres de 1 à " + nb + " est égale à " + somme)