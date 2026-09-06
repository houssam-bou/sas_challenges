console.log(calculerSomme([2, 5, 9]))
function calculerSomme(tab) {
    let i = 0;
    let somme = 0;
    while (tab[i]) {
        somme += tab[i];
        i++;
    }
    return somme;
}