let prompt = require("prompt-sync")();
let depart = Number(prompt("entrer le depart = "));

while(depart >= 0)
{
    console.log(depart);
    depart--;
}
console.log("Décollage !");