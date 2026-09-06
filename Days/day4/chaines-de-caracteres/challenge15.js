function capitalizePhrase(sentence) {
    let i = 0;
    let tmp = "";
    while (sentence[i]) {
        if (i === 0) {
            tmp += sentence[i].toUpperCase();
        }
        else if (sentence[i] === " ") {
            tmp += sentence[i];
            i += 1;
            tmp += sentence[i].toUpperCase();
        }
        else {
            tmp += sentence[i];
        }
        i++;
    }
    return tmp;
}
console.log(capitalizePhrase("fake it until you make it"))