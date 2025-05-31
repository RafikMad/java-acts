let distanciaStr = prompt("Introdueix la distància en quilòmetres (km):");
let distancia = parseFloat(distanciaStr);

let velocitatStr = prompt("Introdueix la velocitat en quilòmetres per hora (km/h):");
let velocitat = parseFloat(velocitatStr);

if (isNaN(distancia) || isNaN(velocitat) || velocitat <= 0) {
    alert("Si us plau, introdueix valors numèrics vàlids per a la distància i la velocitat. La velocitat ha de ser superior a zero.");
} else {
    let temps = distancia / velocitat;

    alert("Has trigat " + temps.toFixed(2) + " hores a recórrer " + distancia + " km a una velocitat de " + velocitat + " km/h.");
}