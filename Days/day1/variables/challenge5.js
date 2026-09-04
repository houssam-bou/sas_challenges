const readline = require("readline");

//interface
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});
//question
rl.question('entre la durée du film en minutes = ', function(durée) {
    if (durée < 60)
    {
        console.log("Court métrage");
    }
    else if (durée >= 60 && durée <= 120)
    {
        console.log("Film standard");
    }
    else
        console.log("Film Long")


rl.close();
});
rl.on('close', () => {
  console.log('Goodbye!');
  process.exit(0);
});