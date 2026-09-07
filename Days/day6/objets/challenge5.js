let prompt = require("prompt-sync")();
let account = {
    owner: "Houssam",
    balance: 5000,
    type: "saving"
};
let choix;
let argentAjouter;
let argentRetirer;
let amount;
console.log("          Bank Account :");
console.log(`1 → Afficher le solde`);
console.log(`2 → Deposer l'argent`);
console.log(`3 → Retirer l'argent`);
console.log(`4 → Vérifier si le solde est suffisant`);
console.log(`5 → Afficher les informations du compte`);
console.log("6 → Se déconnecter");
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
            VerfierLeSolde();
            break;
        case (5):
            afficherLesInformation();
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
function VerfierLeSolde() {
    console.log("_____________________");
    amount = Number(prompt(`entrer amount que vous verfier = `));
    if (amount > account.balance) {
        console.log(`montant à retirer pas assez d'argent !`);
    }
    else {
        console.log(`montant à retirer assez d'argent .`);
    }
    console.log("_____________________");
}
function afficherSolde() {
    console.log("_____________________");
    console.log(`Votre solde est = ${account.balance} Dh`);
    console.log("_____________________");
}
function deposerArgent() {
    console.log("_____________________");
    argentAjouter = Number(prompt(`veuilez entrer combien d argent vous deposer = `));
    if (argentAjouter < 0) {
        console.log(`deposer refuse !!`);
        return;
    }
    else {
        account.balance += argentAjouter;
        console.log(`Vous avez ajouter  = ${argentAjouter} Dh`);
        console.log(`Votre solde est = ${account.balance} Dh`);
    }
    console.log("_____________________");

}
function retirerArgent() {
    console.log("_____________________");
    argentRetirer = Number(prompt(`veuilez entrer combien d argent vous retirer = `));
    if (argentRetirer > account.balance) {
        console.log(`retirer refuse !!`);
        return;
    }
    else if (argentRetirer < 0) {
        console.log(`retirer refuse !!`);
        return;
    }
    else {
        account.balance -= argentRetirer;
        console.log(`Vous avez retirer  = ${argentRetirer} Dh`);
        console.log(`Votre solde est = ${account.balance} Dh`);
    }
    console.log("_____________________");
}
function afficherLesInformation() {
    console.log("_____________________");
    console.log(`owner : ${account.owner}`);
    console.log(`balance : ${account.balance}`);
    console.log(`type : ${account.type}`);
    console.log("_____________________");
}
function close() {
    console.log("_____________________");
    console.log("vous êtes déconnecté de votre compte .");
    console.log("_____________________");
    process.exit();
}