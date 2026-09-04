let prompt = require("prompt-sync")();
let noteCC = prompt ("entrer la note de controle continu = ");
let noteProjet = prompt ("entre la note de projet = ");
let noteExamen = prompt ("entre la note de Examen final = ");

let noteFinal = (noteCC * 2 + noteProjet * 3 + noteExamen * 5) / 10;
console.log(`la note final = ${noteFinal.toFixed(2)}`);