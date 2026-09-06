console.log(ajouterALaFin([2, 6, 9], 5))
function ajouterALaFin(tab, element) {
    let i = 0;
    let j = 0;
    let tmp = [];
    while (tab[i]) {
        tmp[j] = tab[i];
        i++;
        j++;
    }
    tmp[j] = element;
    return tmp;
}