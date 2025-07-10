document.addEventListener('DOMContentLoaded', function () {
    // Referencias a los elementos del DOM
    const celsiusInput = document.getElementById('celsiusInput');
    const convertirBtn = document.getElementById('convertirBtn');
    const resultadoDiv = document.getElementById('resultado');

    // Función para convertir los grados Celsius a Kelvin y Fahrenheit
    // y mostrar el resultado en el DOM
    convertirBtn.addEventListener('click', function () {
        const celsiusStr = celsiusInput.value; // Tomamos el valor del input
        const celsius = Number(celsiusStr); // Intentamos convertir el valor a número

        // Verificamos si es un número válido 
        if (celsiusStr.trim() === "" || isNaN(celsius)) {
            resultadoDiv.textContent = "Por favor, ingresa un número válido.";
            return; 
        }

        // Aqui realizamos las conversiones
        const kelvin = celsius + 273.15;
        const fahrenheit = (celsius * 9 / 5) + 32;

        // Mostramos los resultados en el DOM
        resultadoDiv.innerHTML =
            "Grados Kelvin: " + kelvin.toFixed(2) + "<br>" +
            "Grados Fahrenheit: " + fahrenheit.toFixed(2);
    });
});