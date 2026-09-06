console.log(afficherElements([1, 2, 3]))
function afficherElements(tab) {
    let i = 0;
    let j = 0;
    let tmp = [];
    while (tab[i]) {
        tmp[j] = tab[i];
        i++;
        j++;
    }
    return tmp;
}