
let prompt = require("prompt-sync")();
let choix;
console.log("Menu de l'application :");
console.log("1 → Afficher le profil");
console.log("2 → Afficher les paramètres");
console.log("3 → Afficher les notifications");
console.log("4 → Se déconnecter");
do {
    choix = Number(prompt("entrer votre choix = "));
    switch (choix) {
        case (1):
            Afficher();
            break;
        case (2):
            parametre();
            break;
        case (3):
            notifications();
            break;
        case (4):
            close();
            break;
        default:
            console.log("error !! choisir une autre choix");
            break;
    }
}
while (choix != 4);
function Afficher() {
    console.log("_____________________");
    console.log("Profile : houssam-bou");
    console.log("_____________________");
}
function parametre() {
    console.log("_____________________");
    console.log("Public profile");
    console.log("Account");
    console.log("Appearance");
    console.log("Emails");
    console.log("_____________________");
}
function notifications() {
    console.log("_____________________");
    console.log("you have 2 message .");
    console.log("_____________________");
}
function close() {
    console.log("_____________________");
    console.log("vous êtes déconnecté de votre compte .");
    console.log("_____________________");
    process.exit();
}