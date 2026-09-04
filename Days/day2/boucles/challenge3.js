let prompt = require("prompt-sync")();

let nombre = Number(prompt("entrer un nombre entier = "));

let res;
let sum = 0;
console.log(`le nombre = ${nombre}`);
    for(let i = 0 ; i < nombre; i++)
    {
        res = i + 1;
        sum += res;
    }
    console.log(`la somme = ${sum.toFixed(2)}`);