const celsius = document.getElementById('base');
const outputFa = document.getElementById('value-fa');
const outputKe = document.getElementById('value-ke');



function converterFahrenheit(tempCelsius) {
    tempFahrenheit = (tempCelsius * 9/5) + 32;

    return tempFahrenheit;
}

function converterKelvin(tempCelsius) {
    tempKelvin = tempCelsius + 273.15;
    return tempKelvin;
}

document.getElementById('base').addEventListener('keyup', function(){
    const tempCelsius = parseFloat(celsius.value);

    if (!isNaN(tempCelsius) && celsius.value.trim() !== "") {
        outputFa.textContent = `Fahrenheit: ${converterFahrenheit(tempCelsius)}`;
        outputKe.textContent = `Kelvin: ${converterKelvin(tempCelsius)}`;
    } else {
        outputFa.textContent = "-";
        outputKe.textContent = "Por favor, insira uma temperatura válida em Celsius.";
    }
})