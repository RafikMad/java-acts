let noms = [];
let opcio;

do {
    opcio = prompt(
        "Menú:\n1. Afegir nom\n2. Modificar nom\n3. Eliminar nom\n4. Llistar noms ordenats\n5. Mostrar últim nom\n6. Sortir"
    );

    switch (opcio) {
        case "1":
            let nomNou = prompt("Introdueix un nom:");
            noms.push(nomNou);
            break;
        case "2":
            let vell = prompt("Nom a modificar:");
            let index = noms.indexOf(vell);
            if (index !== -1) {
                let nou = prompt("Introdueix el nou nom:");
                noms[index] = nou;
            } else {
                alert("Nom no trobat.");
            }
            break;
        case "3":
            let eliminar = prompt("Nom a eliminar:");
            let idx = noms.indexOf(eliminar);
            if (idx !== -1) {
                noms.splice(idx, 1);
            } else {
                alert("Nom no trobat.");
            }
            break;
        case "4":
            alert("Noms ordenats: " + noms.slice().sort().join(", "));
            break;
        case "5":
            if (noms.length > 0) {
                alert("Últim nom: " + noms[noms.length - 1]);
            } else {
                alert("La llista és buida.");
            }
            break;
        case "6":
            alert("Sortint del programa.");
            break;
        default:
            alert("Opció no vàlida.");
    }
} while (opcio !== "6");
