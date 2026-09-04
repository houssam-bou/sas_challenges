let prompt = require("prompt-sync")();

let nombre = prompt("entrer un nombre entier = ");
for(let i = 1; i <= nombre;i++)
{
    if (i % 2 === 0)
    {
        console.log(i);
    }
}