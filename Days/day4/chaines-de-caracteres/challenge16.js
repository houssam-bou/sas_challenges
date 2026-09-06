console.log(censorText("this code is bad and slow", ["bad", "slow"]))
function censorText(text, forbiddenwords) {
    let i = 0;
    let result = "";
    let tmp = "";
    while (text[i]) {
        if (text[i] != " ") {
            tmp += text[i];
        }
        else {
            (forbiddenwords.includes(tmp)) ? result += "***" : result += tmp;
            result += " ";
            tmp = "";
        }
        i++;
    }
    return result;
}