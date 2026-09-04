let prompt = require("prompt-sync")();
let nombre = +prompt("entrer le nombre = ");
if (nombre > 0)
{
    console.log("le nombre est positif .");
}
else if (nombre < 0)
{
    console.log("le nombre est negatif .");
}
else
{
    console.log("le nombre est zero .");
}