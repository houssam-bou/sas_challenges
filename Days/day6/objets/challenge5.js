let prompt = require("prompt-sync")();
let account = {
    owner: "Tayeb",
    balance: 5000,
    type: "saving"
};

let choix;
//let total;
let argentAjouter;
let argentRetirer;
console.log("          Bank Account :");
console.log(`1 → afficher le solde`);
console.log(`2 → Deposer l'argent`);
console.log(`3 → Retirer l'argent`);
console.log(`4 → `);
console.log("5 → Se déconnecter");
do {
    choix = Number(prompt("entrer votre choix = "));
    switch (choix) {
        case (1):
            afficherSolde();
            break;
        case (2):
            deposerArgent();
            break;
        case (3):
            retirerArgent();
            break;
        case (4):

            break;
        case (5):
            close();
            break;
        default:
            console.log("error !! choisir une autre choix");
            break;
    }
}
while (choix != 5);
function afficherSolde() {
    console.log("_____________________");
    console.log(`Vote solde est = ${account.balance} Dh`);
    console.log("_____________________");
}
function deposerArgent() {
    console.log("_____________________");
    argentAjouter = Number(prompt(`veuilez entrer combien d argent vous deposer = `));
    account.balance += argentAjouter;
    console.log(`Vous avez ajouter  = ${argentAjouter} Dh`);
    console.log(`Votre solde est = ${account.balance} Dh`);
    console.log("_____________________");

}
function retirerArgent() {
    console.log("_____________________");
    argentRetirer = Number(prompt(`veuilez entrer combien d argent vous retirer = `));
    account.balance -= argentRetirer;
    console.log(`Vous avez retirer  = ${argentRetirer} Dh`);
    console.log(`Votre solde est = ${account.balance} Dh`);
    console.log("_____________________");
}
function close() {
    console.log("_____________________");
    console.log("vous êtes déconnecté de votre compte .");
    console.log("_____________________");
    process.exit();
}