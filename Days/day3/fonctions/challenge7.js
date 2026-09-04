obtenirHeureActuelle();
function hours() {
    let hours = new Date();
    let a = hours.getHours();
    return (a <= 9) ? `0${a}` : a;
}
function minute() {
    let minute = new Date();
    let b = minute.getMinutes();
    return (b <= 9) ? `0${b}` : b;
}
function seconds() {
    let seconds = new Date();
    let x = seconds.getSeconds();
    return (x <= 9) ? `0${x}` : x;
}
function obtenirHeureActuelle() {
    let date = new Date();
    console.log(`${hours()}:${minute()}:${seconds()}`);
}