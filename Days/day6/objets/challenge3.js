
let prompt = require("prompt-sync")();

let prodect = {
    name: "iphone 13 pro",
    price: 4000,
    category: "iphone",
    quantity: 7,
    available: "yes"
}
let choix;
console.log("     Menu de Store ");
console.log("1 → Afficher le nom ");
console.log("2 → Afficher le prix  ");
console.log("3 → Afficher la categorie ");
console.log("4 → Vérifier si le produit est disponible ");
console.log("5 → Calculer le prix total du stock ");
console.log("6 → Se déconnecter");
do {
    choix = Number(prompt("entrer votre choix = "));
    switch (choix) {
        case (1):
            afficherNom();
            break;
        case (2):
            afficherPrix();
            break;
        case (3):
            afficherCategorie();
            break;
        case (4):
            verfierDisponibilite();
            break;
        case (5):
            calculerPrixTotal();
            break;
        case (6):
            close();
            break;
        default:
            console.log("error !! choisir une autre choix");
            break;
    }
}
while (choix != 6);
function afficherNom() {
    console.log("_____________________");
    console.log(`le nom de produit : ${prodect.name}`);
    console.log("_____________________");
}
function afficherPrix() {
    console.log("_____________________");
    console.log(`le prix de produit : ${prodect.price} Dh`);
    console.log("_____________________");
}
function afficherCategorie() {
    console.log("_____________________");
    console.log(`la category : ${prodect.category}`);
    console.log("_____________________");
}
function verfierDisponibilite()
{
        console.log("_____________________");
    console.log(`la disponabilite : ${prodect.available}`);
    console.log("_____________________");
}
function calculerPrixTotal()
{
        console.log("_____________________");
    console.log(`le prix total du stock : ${prodect.price * prodect.quantity} Dh`);
    console.log("_____________________");
}
function close() {
    console.log("_____________________");
    console.log("vous êtes déconnecté de votre compte .");
    console.log("_____________________");
    process.exit();
}