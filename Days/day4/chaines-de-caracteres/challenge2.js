console.log(compterLettre("aaabbaaaaabbbaaaaa", "a"));


function compterLettre(chaine, lettre) {
    let i = 0;
    let count = 0;
    while (chaine[i]) {
        (chaine[i] === lettre) ? count += 1 : count += 0;
       i++;
    }
    return count;
}