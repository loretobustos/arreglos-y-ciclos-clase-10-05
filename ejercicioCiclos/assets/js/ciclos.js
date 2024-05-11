// Ciclo for para imprimir cada número del arreglo
for (var i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}

// Ciclo for...of para imprimir cada nombre del arreglo
for (var nombre of nombres) {
    console.log(nombre);
}

// Ciclo for para iterar sobre un arreglo de números e imprimir cada elemento
var numeros = [1, 2, 3, 4, 5];
for (var i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}

// Ciclo for para imprimir números del 1 al 10
for (var i = 1; i <= 10; i++) {
    console.log(i);
}

// Ciclo while para iterar sobre un arreglo de nombres e imprimir cada elemento
var nombres = ["Juan", "María", "Pedro"];
var i = 0;
while (i < nombres.length) {
    console.log(nombres[i]);
    i++;
}

// Ciclo while para imprimir números pares menores o iguales a 10
var numero = 2;
while (numero <= 10) {
    console.log(numero);
    numero += 2;
}

// Ciclo for...of para iterar sobre un arreglo de nombres e imprimir cada elemento
var nombres = ["Juan", "María", "Pedro"];
for (var nombre of nombres) {
    console.log(nombre);
}

// Ciclo for...of para iterar sobre una cadena de texto e imprimir cada carácter
var palabra = "JavaScript";
for (var letra of palabra) {
    console.log(letra);
}





//Imprimir números pares del 1 al 10
for (var i = 2; i <= 10; i += 2) {
    console.log(i);
}


//Calcular el factorial de un número
function factorial(numero) {
    var resultado = 1;
    for (var i = 1; i <= numero; i++) {
        resultado *= i;
    }
    return resultado;
}

// Ejemplo de uso:
console.log(factorial(5)); // Salida: 120




//Sumar los elementos de un arreglo
function sumarElementos(arreglo) {
    var suma = 0;
    for (var i = 0; i < arreglo.length; i++) {
        suma += arreglo[i];
    }
    return suma;
}

// Ejemplo de uso:
var numeros = [1, 2, 3, 4, 5];
console.log(sumarElementos(numeros)); // Salida: 15




//Contar la cantidad de vocales en una cadena de texto
function contarVocales(cadena) {
    var vocales = ['a', 'e', 'i', 'o', 'u'];
    var contador = 0;
    for (var i = 0; i < cadena.length; i++) {
        if (vocales.includes(cadena[i].toLowerCase())) {
            contador++;
        }
    }
    return contador;
}

// Ejemplo de uso:
var texto = "Hola Mundo";
console.log(contarVocales(texto)); // Salida: 4





//Imprimir los números del 1 al 100 que son divisibles entre 3 y 5
for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i);
    }
}
