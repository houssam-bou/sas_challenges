let prompt = require("prompt-sync")();
let PI = 3.14159;
let rayon = prompt("entrer le rayon du reservoir = ");
let hauteur = prompt("entrer La hauteur du reservoir = ");

let volume = PI * (rayon * rayon) * hauteur;
console.log(`volume = ${volume.toFixed(2)} m³`);
