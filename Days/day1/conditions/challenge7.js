let prompt = require("prompt-sync")();
console.log("1 → Lundi");
console.log("2 → Mardi");
console.log("3 → Mercredi");
console.log("4 → Jeudi");
console.log("5 → Vendredi");
console.log("6 → Samedi");
console.log("7 → Dimanche");
choix = Number(prompt("entrer votre choix = "));
switch (choix) {
    case (1):
        console.log("Lundi");
        break;
    case (2):
        console.log("Mardi");
        break;
    case (3):
        console.log("Mercredi");
        break;
    case (4):
        console.log("Jeudi");
        break;
    case (5):
        console.log("Vendredi");
        break;
    case (6):
        console.log("Samedi");
        break;
    case (7):
        console.log("Dimanche");
        break;
    default:
        console.log("error !! choisir une autre choix");
        break;
}