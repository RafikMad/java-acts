let numeroSecret = Math.floor(Math.random() * 10001); // de 0 a 10000
let intents = 0;
let encertat = false;

while (!encertat) {
    let resposta = parseInt(prompt("Endevina el número (entre 0 i 10000):"));
    intents++;

    if (resposta < numeroSecret) {
        alert("El número és més gran.");
    } else if (resposta > numeroSecret) {
        alert("El número és més petit.");
    } else if (resposta === numeroSecret) {
        alert("Enhorabona! Has endevinat el número " + numeroSecret + " en " + intents + " intents.");
        encertat = true;
    } else {
        alert("Introdueix un número vàlid.");
    }
}
