console.log(filtrerPairs([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
function filtrerPairs(tab) {
    let i = 0;
    let j = 0;
    let len = tab.length;
    let tmp = [];
    while (i < len) {
        if (tab[i] % 2 == 0) {
            tmp[j] = tab[i];
            j++;
        }
        i++;
    }
    return tmp;
}