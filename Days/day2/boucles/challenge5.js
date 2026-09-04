let prompt = require("prompt-sync")();
let n = Number(prompt("entrer N = "));
let x = Number(prompt("entrer X = "));

for (let i = 1; i <= n; i++)
{
    if (i % x === 0)
    {
    console.log(i);
    }
}