console.log(trouverMax([4, 7, 8, 32, 15]))
function trouverMax(tab) {
    let i = 0;
    let max = 0;
    while (tab[i]) {
        if (tab[i] >= max) {
            max += tab[i];
        }
        i++;
    }
    return max;
}