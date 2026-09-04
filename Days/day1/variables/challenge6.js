const { log } = require("console");
const readline = require("readline");

//interface
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});
//question
rl.question('entrer le score de partie 1 = ',  function(score1)  {
    rl.question('entrer le score de partie 2 = ', function(score2){
        rl.question('entrer le score de partie 3 = ', function(score3){
            rl.question('entrer le score de partie 4 = ', function(score4){
                let total = Number(score1) + Number(score2) + Number(score3) + Number(score4);
                console.log(`score total est = ${total} `);
                let moyen = total / 4;
                console.log(`moyyene est = ${moyen.toFixed(2)}`);
                rl.close();
            });
        });
    });
});