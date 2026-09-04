function saluerClient(nom, titre) {
    (titre !== 1) ? console.log(` Bonjour ${titre} ${nom}`)
        : console.log(` Bonjour client ${nom}`);
}
//saluerClient("houssam");
saluerClient("houssam", "client");