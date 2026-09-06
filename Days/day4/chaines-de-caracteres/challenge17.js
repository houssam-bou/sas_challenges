console.log(generateSlug("My First JS Article"));
function generateSlug(title) {
    let title_lower = title.toLowerCase();
    let tmp = "";
    let i = 0;
    while (title_lower[i]) {
        (title_lower[i] === " ") ? tmp += "-" : tmp += title_lower[i];
        i++;
    }
    return tmp;
}