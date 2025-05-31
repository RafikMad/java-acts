let grups = [];
let entrada;

while (true) {
    entrada = parseInt(prompt("Introdueix el nombre de persones del grup (0 per acabar):"));
    if (entrada === 0) break;
    grups.push(entrada);
}

if (grups.length > 0) {
    let totalGrups = grups.length;
    let totalPersones = grups.reduce((a, b) => a + b, 0);
    let grupMesGran = Math.max(...grups);
    let mitjana = (totalPersones / totalGrups).toFixed(2);

    alert("Nombre de grups: " + totalGrups);
    alert("Nombre total d’usuaris: " + totalPersones);
    alert("Grup més gran: " + grupMesGran);
    alert("Mitjana de persones per grup: " + mitjana);
} else {
    alert("No s'ha introduït cap grup.");
}
