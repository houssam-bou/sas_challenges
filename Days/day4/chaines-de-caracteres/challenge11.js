console.log((formatText("COde")));
function formatText(string) {
    let upperCase = string.toUpperCase();
    let lowercase = string.toLowerCase();

    return ` uppercase: ${upperCase}, lowercase: ${lowercase}`;
}