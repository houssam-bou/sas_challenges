let prompt = require("prompt-sync")();
let age = +prompt("entrer votre age = ");
if (age >= 18)
{
    console.log("Accès autorisé .");
}
else
{
    console.log("Accès refusé .");
}