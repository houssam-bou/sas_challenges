let prompt = require("prompt-sync")();
let montant = +prompt("entrer le montant de sa commande = ");
console.log(`montant de la commande : ${montant.toFixed(2)} DH`);
if (montant >= 500)
{
    console.log("Livraison : Gratuite .");
    console.log(`Total a payer : ${montant.toFixed(2)} DH`);
}
else 
{
    console.log("Livraison : 40 DH .");
    let total = montant + 40;
    console.log(`Total a payer : ${total.toFixed(2)} DH`);
}