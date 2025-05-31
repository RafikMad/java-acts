let nombres = [];
let entrada;

while (true) {
    entrada = parseInt(prompt("Introdueix un número (0 per acabar):"));
    if (entrada === 0) break;
    nombres.push(entrada);
}

if (nombres.length > 0) {
    let ordre = prompt("Vols ordenar de menor a major (m) o de major a menor (M)?");
    if (ordre.toLowerCase() === "m") {
        nombres.sort((a, b) => a - b);
    } else {
        nombres.sort((a, b) => b - a);
    }
    alert("Nombres ordenats: " + nombres.join(", "));
} else {
    alert("No s'ha introduït cap número.");
}
