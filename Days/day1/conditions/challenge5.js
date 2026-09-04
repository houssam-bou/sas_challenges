let prompt = require("prompt-sync")();
let note = Number(prompt("entrer la note = "));

console.log(`Note : ${note.toFixed(2)}`);
switch (true) {
    case (note < 10):
        console.log("Echec .");
        break;
    case (note >= 10 && note < 12):
        console.log("Passable .");
        break;
    case (note >= 12 && note < 14):
        console.log("Assez bien .");
        break;
    case (note >= 14 && note < 16):
        console.log("Bien .");
        break;
    case (note >= 16 && note < 18):
        console.log("Très bien .");
        break;
    case (note >= 18 && note <= 20):
        console.log("Excellent.");
        break;
    default:
        console.log("error !!");
}
