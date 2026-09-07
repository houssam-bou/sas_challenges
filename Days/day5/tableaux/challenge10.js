sortArray([10, 5, 4, 3, 9, 7]);
function sortArray(tab) {
    let swp;
    for (let i = 0; i < tab.length; i++) {
        for (let j = 0; j < tab.length; j++) {
            if (tab[i] < tab[j]) {
                swp = tab[j];
                tab[j] = tab[i];
                tab[i] = swp;
                //[tab[i], tab[j]] = [tab[j], tab[i]];
            }
        }
    }
    console.log(tab);
}