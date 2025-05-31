let resultat = 1;
let numero;

do {
    numero = parseInt(prompt("Introdueix un número (1 per acabar):"));
    if (numero !== 1) {
        resultat *= numero;
        alert("Resultat: " + resultat);
    }
} while (numero !== 1);

alert("Fi del programa.");
