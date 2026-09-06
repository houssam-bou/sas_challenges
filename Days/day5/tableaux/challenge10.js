console.log(trierTableau([2, 5, 4, 3, 9, 7]))
function trierTableau(tab) {
    //>=
    let i = 0;
    let tmp = [];
    let len = tab.length - 1;
    while (i <= len) {
        if (tab[i] > tab[i + 1]) {
            tmp = tab[i];
            tab[i] = tab[i + 1];
            tab[i + 1] = tmp;
        }
        i++;
    }
    return tab;
}