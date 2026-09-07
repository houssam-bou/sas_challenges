let prompt = require("prompt-sync")();

let employee = {
    firstName: "Sara",
    lastName: "Amrani",
    salary: 7000,
    bonus: 1000,
    absenceDays: 2
};
let completename = `${employee.firstName} ${employee.lastName}`;
let totalSalaire = `${(employee.salary + employee.bonus) - (employee.absenceDays * 200)}`;
let choix;
console.log("          Calculator de salaire :");
console.log(`1 → Le salaire de base de ${completename}`);
console.log(`2 → Le bonus de ${completename}`);
console.log(`3 → Les pénalités de ${completename}`);
console.log(`4 → Le salaire final de ${completename}`);
console.log("5 → Se déconnecter");
do {
    choix = Number(prompt("entrer votre choix = "));
    switch (choix) {
        case (1):
            afficherLeSalaire();
            break;
        case (2):
            afficherLebonus();
            break;
        case (3):
            afficherLesPenalites();
            break;
        case (4):
            calculerPrixTotal();
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
function afficherLeSalaire() {
    console.log("_____________________");
    console.log(`le salaire de ${completename} : ${employee.salary} Dh`);
    console.log("_____________________");
}
function afficherLebonus() {
    console.log("_____________________");
    console.log(`le bonus de ${completename} : ${employee.bonus} Dh`);
    console.log("_____________________");
}
function afficherLesPenalites() {
    console.log("_____________________");
    console.log(`les penalites de ${completename} : ${employee.absenceDays * 200}`);
    console.log("_____________________");
}
function calculerPrixTotal() {
    console.log("_____________________");
    console.log(`les penalites de ${completename} : ${totalSalaire}`);
    console.log("_____________________");
}
function close() {
    console.log("_____________________");
    console.log("vous êtes déconnecté de votre compte .");
    console.log("_____________________");
    process.exit();
}