let inici = parseInt(prompt("Introdueix el valor inicial de l'interval:"));
let fi = parseInt(prompt("Introdueix el valor final de l'interval:"));

let parells = [];
let imparells = [];

for (let i = inici; i <= fi; i++) {
    if (i % 2 === 0) {
        parells.push(i);
    } else {
        imparells.push(i);
    }
}

alert("Nombres parells: " + parells.join(", "));
alert("Nombres imparells: " + imparells.join(", "));
