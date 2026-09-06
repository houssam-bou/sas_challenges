console.log(fusionnerTableaux([1, 2], [3, 4]));
function fusionnerTableaux(tab1, tab2) {
    let i = 0;
    let j = 0;
    let tmp = [];
    let x = 0;
    while (tab1[i]) {
        tmp[x] = tab1[i];
        i++;
        x++;
    }
    while (tab2[j]) {
        tmp[x] = tab2[j];
        j++;
        x++;
    }
    return tmp;
}