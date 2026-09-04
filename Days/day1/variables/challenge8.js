let prompt = require("prompt-sync")();
let U = prompt("entrer la tension U en volts = ");
let I = prompt("entrer l'intensite  en ampere = ");
let t = prompt("entrer le temps  en heures = ");
let Énergie = U * I * t;
console.log(`l'énergie consommée = ${Énergie} Wh`);