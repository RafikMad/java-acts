let opcio = prompt(
    "Tria l’opció de la figura geomètrica que vols calcular:\n" +
    "1. Cercle\n" +
    "2. Triangle\n" +
    "3. Quadrat"
);

switch(opcio) {
    case "1":
        let radi = parseFloat(prompt("Introdueix el radi del cercle:"));
        let areaCercle = Math.PI * radi * radi;
        alert("L’àrea del cercle és " + areaCercle.toFixed(2));
        break;

    case "2":
        let base = parseFloat(prompt("Introdueix la base del triangle:"));
        let alcada = parseFloat(prompt("Introdueix l’alçada del triangle:"));
        let areaTriangle = (base * alcada) / 2;
        alert("L’àrea del triangle és " + areaTriangle.toFixed(2));
        break;

    case "3":
        let costat = parseFloat(prompt("Introdueix el costat del quadrat:"));
        let areaQuadrat = costat * costat;
        alert("L’àrea del quadrat és " + areaQuadrat.toFixed(2));
        break;

    default:
        alert("Opció no vàlida.");
        break;
}