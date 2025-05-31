let paraula = prompt("Introdueix una paraula:");

// Repetida 2 cops sense espais
let repetida2 = paraula + paraula;
alert("Repetida 2 cops sense espais: " + repetida2);

// Repetida 5 cops amb espais
let repetida5 = (paraula + " ").repeat(5).trim();
alert("Repetida 5 cops amb espais: " + repetida5);