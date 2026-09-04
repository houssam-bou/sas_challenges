let prompt = require("prompt-sync")();
let note = +prompt("entrer la note = ");
if (note >= 10 && note <= 20)
{
    console.log("admis .");
}
else if (note < 10)
{
    console.log("Non admis .");
}
else
{
    console.log("le nombre doit etre entre 0 est 20 !!");
}