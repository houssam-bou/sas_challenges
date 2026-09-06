console.log(hideCard("1234567890123412"));
function hideCard(Cardnumber) {
    let i = 0;
    let tmp = "";
    while (Cardnumber[i] <= 16) {
        if (i >= 0 && i < 12) {
            tmp += "*";
        }
        else if (i >= 12 && i <= 16) {
            tmp += Cardnumber[i];
        }
        i++;
    }
    return `${tmp} `;
}