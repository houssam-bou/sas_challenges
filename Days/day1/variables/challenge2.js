const readline = require("readline");

//interface
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});
rl.question('entre un montant en dirhams marocains (MAD) = ', function(mad) {
    let eur = mad / 11;
    console.log(`montant en eur = ${eur.toFixed(2)} eur`);

rl.close();
});
rl.on('close', () => {
  console.log('Goodbye!');
  process.exit(0);
});