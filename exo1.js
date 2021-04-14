const scanf = require('scanf');

console.log("Entrez la première chaine de caractère");
var firstStr = scanf('%s');
var firstTaille = firstStr.length;

console.log("Entrez la deuxième chaine de caractère");
var secStr = scanf('%s');
var secTaille = secStr.length;

if (firstTaille = 2*secTaille) {
    console.log(`La première chaine ${firstStr} est deux fois plus grande que la deuxième chaine ${secStr}`);
} else {
        console.log(`La première chaine ${firstStr} n'est pas deux fois plus grande que la deuxième chaine ${secStr}`);

    }
    

    