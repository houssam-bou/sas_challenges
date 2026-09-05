
console.log(replaceCharacter("aabb", "a", "b"));

function replaceCharacter(string, old, neew) {
    let tmp = "";
    let i = 0;
    while (string[i]) {
        (string[i] === old) ? tmp += neew : tmp += string[i];
        i++;
    }
    return tmp;
}