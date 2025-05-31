let password, resposta;
do {
    password = prompt("Introdueix la contrasenya:");
    resposta = prompt("Quant és 15 * 5?");
} while (password !== "secreta" || resposta !== "75");

for (let i = 1; i <= 10; i++) {
    console.log(i);
}
