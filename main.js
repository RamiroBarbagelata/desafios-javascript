// EJERCICIO DE WHILE

const numberSecret = 14;
let number = parseInt(prompt('Adivina el número oculto entre 0 y 25'));
while (number !== numberSecret) {
    number = parseInt(prompt('Incorrecto! Intenta otra vez'));
}
alert('Felicitaciones!!! Encontraste el número oculto');



//EJERCICIO DE FOR

let numberRepetitions = parseInt(prompt('Ingresa un número de repeticiones'));
let text = prompt('Ingresa un texto');

for(let i = 0; i <= numberRepetitions; i++) {
    console.log(i, text);
}



