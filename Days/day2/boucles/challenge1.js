let prompt = require("prompt-sync")();
let nombre = Number(prompt("entrer un nombre de participants = "));
console.log(`le nombre de participants = ${nombre}`);
for(let i = 1; i <= nombre;i++)
{
    console.log(`Participant ${i}`);
}