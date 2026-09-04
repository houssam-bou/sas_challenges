let prompt = require("prompt-sync")();
let nombre = Number(prompt("entrer un nombre entier = "));

console.log(`Nombre = ${nombre}`);
let res;
for(let i = 1; i <= 10;i++)
{
    res = nombre * i;
    console.log(`${nombre} * ${i} = ${res}`);
}