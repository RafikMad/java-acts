while (true) {
    let entrada = prompt("Introdueix dos enters separats per espai (o escriu 'Surt' per acabar):");
    if (entrada.toLowerCase() === "surt") {
        alert("Programa finalitzat.");
        break;
    }

    let parts = entrada.split(" ");
    if (parts.length !== 2) {
        alert("Has d'introduir dos nombres separats per espai.");
        continue;
    }

    let a = parseInt(parts[0]);
    let b = parseInt(parts[1]);

    if (a * b === 3 * (a + b)) {
        alert("Correcte! Els nombres compleixen la condició.");
        break;
    } else {
        alert("No és correcte. Torna-ho a intentar.");
    }
}
