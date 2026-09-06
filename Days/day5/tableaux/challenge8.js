console.log(supprimerDoublons([1, 2, 2, 3, 4, 4, 1, 9]))
function supprimerDoublons(tab) {
    let i = 0;
    let j = 0;
    let tmp = [];
    while (tab[i]) {
        (tmp.includes(tab[i])) ? j-- : tmp[j] = tab[i];
        j++;
        i++;
    }
    return tmp;
}