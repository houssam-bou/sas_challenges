function totalPrix(number) {
    let total = 0;
    let prix = 125;
    let remise = 2;
    let i = 2;
    if (number <= 0) {
        return 0;
    }
    else if (number === 1) {
        return prix;
    }
    total = prix * number;
    while (i < number) {
        remise += 2;
        i++;
    }
    return total - (total * remise) / 100;
}
console.log(totalPrix(2));