console.log(isPalindrome("radar"));

function invreverse(chaine) {

    let len = chaine.length;
    let str = "";
    while (len > 0) {
        str += chaine[len - 1];
        len--;
    }
    return str;
}
function isPalindrome(string) {
    let reversed = invreverse(string);
    return (string === reversed) ? 1 : 0;
}