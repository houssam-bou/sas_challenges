const readline = require("readline");

//interface
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});
//question
rl.question('entrer La distance parcourue en kilomètres = ', function(distance) {
    rl.question('La quantité de carburant consommée en litres = ', function(carburant) {
        let consomation = (carburant / distance ) * 100;
        console.log(`la consomation de votre voiture est  = ${consomation.toFixed(2)}`);
    rl.close();
});
});
rl.on('close', () => {
    console.log('Goodbye!');
    process.exit(0);
});