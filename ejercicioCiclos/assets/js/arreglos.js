// Arreglo de números enteros
var numeros = [1, 2, 3, 4, 5];

// Arreglo de cadenas de texto
var nombres = ["Juan", "María", "Pedro"];

// Arreglo de booleanos
var valoresBooleanos = [true, false, true];

// Arreglo mixto
var mixto = [1, "dos", true, 3.14];


// Arreglo de números enteros
var numeros = [1, 2, 3, 4, 5];

//Arreglo vacío (sin elementos):
var vacio = [];

//arreglos de arreglos (arreglo multidimencional)
var matriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];


// Arreglo de cadenas de texto
var nombres = ["Juan", "María", "Pedro"];

// Ciclo for...of para imprimir cada nombre del arreglo
for (var nombre of nombres) {
    console.log(nombre);
}

// Unión de dos arreglos
var arreglo1 = [1, 2, 3];
var arreglo2 = [4, 5, 6];
var union = arreglo1.concat(arreglo2);
console.log(union);

// Condición para verificar si un número está en un arreglo
if (arreglo1.includes(3)) {
    console.log("El número 3 está en el arreglo1");
}

//arreglos con objetos
var personas = [
    { nombre: "Juan", edad: 30 },
    { nombre: "María", edad: 25 },
    { nombre: "Pedro", edad: 35 }
];
//Arreglos con funciones
var funciones = [
    function() { console.log("Función 1"); },
    function() { console.log("Función 2"); },
    function() { console.log("Función 3"); }
];


//suma de elementos
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




//Encontrar el número más grande
function encontrarMaximo(arreglo) {
    var maximo = arreglo[0];
    for (var i = 1; i < arreglo.length; i++) {
        if (arreglo[i] > maximo) {
            maximo = arreglo[i];
        }
    }
    return maximo;
}

// Ejemplo de uso:
var numeros = [10, 30, 20, 5, 40];
console.log(encontrarMaximo(numeros)); // Salida: 40



//Eliminar duplicados
function eliminarDuplicados(arreglo) {
    var resultado = [];
    for (var i = 0; i < arreglo.length; i++) {
        if (resultado.indexOf(arreglo[i]) === -1) {
            resultado.push(arreglo[i]);
        }
    }
    return resultado;
}

// Ejemplo de uso:
var numeros = [1, 2, 2, 3, 3, 4, 5, 5];
console.log(eliminarDuplicados(numeros)); // Salida: [1, 2, 3, 4, 5]
