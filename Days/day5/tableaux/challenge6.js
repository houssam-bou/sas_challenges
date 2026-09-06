console.log(inverserTableau([1, 2, 3, 4]))
function inverserTableau(tab) {
    let i = 0;
    let len = tab.length - 1;
    let tmp = [];
    while (len >= 0) {
        tmp[i] = tab[len];
        len--;
        i++;
    }
    return tmp;
}