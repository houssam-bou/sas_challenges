console.log(contientElement(["pomme", "banane", "tomate", "botato"], "botato"));
function contientElement(tab, valeur) {
    return (tab.includes(valeur)) ? 1 : 0;
}