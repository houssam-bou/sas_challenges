console.log(countVowels("devloper"))

function countVowels(string) {
    let i = 0;
    let count = 0;
    while (string[i]) {
        (string[i] === "a" || string[i] === "e" || string[i] === "i" ||
            string[i] === "o" || string[i] === "u" || string[i] === "y") ?
            count += 1 : count += 0;
        i++;
    }
    return count;
}