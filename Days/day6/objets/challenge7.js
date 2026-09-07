let prompt = require("prompt-sync")();

let students = [
    { name: "Ali", note: 15 },
    { name: "Sara", note: 8 },
    { name: "Omar", note: 17 },
    { name: "Imane", note: 11 },
    { name: "Yassine", note: 6 }
];
// 1. Afficher chaque étudiant.
// 2. Afficher sa note.
// 3. Afficher `Admis` si la note est >= 10.
// 4. Afficher `Non admis` sinon.
// 5. Compter les étudiants admis.
// 6. Compter les étudiants non admis.
let choix;
console.log("          Affichage des etudiant :");
console.log(`1 → afficher chaque  etudiant`);
console.log(`2 → Afficher sa note`);
console.log(`3 → afficher les admis`);
console.log(`4 → afficher non admis`);
console.log(`5 → Compter les étudiants non admis`);
console.log("6 → Compter les étudiants non admis.");
console.log("7 → Se déconnecter");
do {
    choix = Number(prompt("entrer votre choix = "));
    switch (choix) {
        case (1):
            afficherEtudiant();
            break;
        case (2):
            afficherNote();
            break;
        case (3):
            afficherAdmis();
            break;
        case (4):
            afficherNonAdmis();
            break;
        case (5):
            countAdmis();
            break;
        case (6):
            countNonAdmis();
            break;
        case (7):
            close();
            break;
        default:
            console.log("error !! choisir une autre choix");
            break;
    }
}
while (choix != 7);
function afficherEtudiant() {
    for (let i = 0; i < students.length; i++) {
        console.log(`__________________________________________`);
        console.log(`Name : ${students[i].name}`);
    }
    console.log(`__________________________________________`);
}
function afficherNote() {
    for (let i = 0; i < students.length; i++) {
        console.log(`__________________________________________`);
        console.log(`${students[i].name} => ${students[i].note}`);
    }
}
function afficherAdmis() {

    for (let i = 0; i < students.length; i++) {
        if (students[i].note >= 10) {
            console.log(`__________________________________________`);
            console.log(`${students[i].name} : ${students[i].note} => Admis`);
            console.log(`__________________________________________`);
        }
    }
}
function afficherNonAdmis() {

    for (let i = 0; i < students.length; i++) {
        if (students[i].note < 10) {
            console.log(`__________________________________________`);
            console.log(`${students[i].name} : ${students[i].note} => Non Admis`);
            console.log(`__________________________________________`);
        }

    }
}
function countAdmis() {
    let count = 0;
    console.log(`__________________________________________`);
    for (let i = 0; i < students.length; i++) {
        if (students[i].note >= 10) {
            count += 1;
        }
    }
    console.log(`${count} etudient Admis`);
    console.log(`__________________________________________`);
}
function countNonAdmis() {
    let count = 0;
    console.log(`__________________________________________`);
    for (let i = 0; i < students.length; i++) {
        if (students[i].note < 10) {
            count += 1;
        }
    }
    console.log(`${count} etudient Non Admis`);
    console.log(`__________________________________________`);
}
function close() {
    console.log("_____________________");
    console.log("Vous avez quitté le programme.");
    console.log("_____________________");
    process.exit();
}