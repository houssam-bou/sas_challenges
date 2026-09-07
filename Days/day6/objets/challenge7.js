
let choix;
console.log("          Calculator de salaire :");
console.log(`1 → `);
console.log(`2 → `);
console.log(`3 → `);
console.log(`4 → `);
console.log("5 → Se déconnecter");
do {
    choix = Number(prompt("entrer votre choix = "));
    switch (choix) {
        case (1):
            
            break;
        case (2):
            
            break;
        case (3):
            
            break;
        case (4):
            
            break;
        case (5):
            close();
            break;
        default:
            console.log("error !! choisir une autre choix");
            break;
    }
}
while (choix != 5);