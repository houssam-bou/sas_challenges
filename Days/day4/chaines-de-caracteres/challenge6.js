
console.log(repeatString("hi", 3));
function write_str(string) {
    let i = 0;
    let str = "";
    while (string[i]) {
        str += string[i];
        i++;
    }
    return str;
}

function repeatString(string, times) {
    let i = 0;
    let repeat = "";
    while (i < times) {
        repeat += write_str(string);
        i++;
    }
    return repeat;
}