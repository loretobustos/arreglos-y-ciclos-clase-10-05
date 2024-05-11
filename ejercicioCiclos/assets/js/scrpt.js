// Solicitar la cantidad de alumnos
var numAlumnos = parseFloat(prompt("Ingrese la cantidad de alumnos:"));

// Verificar que se haya ingresado un número válido
if (isNaN(numAlumnos) || numAlumnos <= 0) {
    alert("Por favor ingrese un número válido de alumnos.");
} else {
    var totalPromedio = 0;

    // Iterar sobre cada alumno
    for (var i = 1; i <= numAlumnos; i++) {
        var nota1 = parseFloat(prompt("Ingrese la nota 1 del alumno " + i + ":"));
        var nota2 = parseFloat(prompt("Ingrese la nota 2 del alumno " + i + ":"));
        var nota3 = parseFloat(prompt("Ingrese la nota 3 del alumno " + i + ":"));

        // Calcular el promedio ponderado
        var promedio = (nota1 * 0.25) + (nota2 * 0.35) + (nota3 * 0.40);

        // Agregar el promedio al total
        totalPromedio += promedio;
    }

    // Calcular el promedio general
    var promedioGeneral = totalPromedio / numAlumnos;

    // Mostrar el resultado por pantalla
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "El promedio del curso es: " + promedioGeneral.toFixed(2);
}