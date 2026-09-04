const readline = require("readline");

//interface
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});
//question
rl.question('une capacité exprimée en Gigaoctets (GB) = ', function(gb) {
    let mb = gb * 1024;
    console.log(`La capacité en Mégaoctets (MB) = ${mb.toFixed(2)} MB`);

rl.close();
});
rl.on('close', () => {
  console.log('Goodbye!');
  process.exit(0);
});