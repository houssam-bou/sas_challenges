console.log(additionnerTout(5, 2, 6, 7));

function additionnerTout(...args) {
    let i = 0;
    let total = 0;
    while (i < args.length) {
        total += args[i];
        i++;
    }
    return total;
}
