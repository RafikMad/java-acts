let num1 = parseFloat(prompt("Introdueix el primer número:"));
let num2 = parseFloat(prompt("Introdueix el segon número:"));

if (num1 > num2) {
    alert("El nombre més gran és " + num1 + " i el més petit és " + num2);
} else if (num2 > num1) {
    alert("El nombre més gran és " + num2 + " i el més petit és " + num1);
} else {
    alert("Els dos nombres són iguals.");
}