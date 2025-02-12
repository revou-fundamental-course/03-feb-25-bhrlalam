document.getElementById("temperatureForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let temperature = parseFloat(document.getElementById("temperature").value);
    let unit = document.getElementById("unit").value;

    let result, explanation, formula;

    if (unit === "C") {
        // Konversi dari Celsius ke Fahrenheit
        result = (temperature * 9/5) + 32;
        explanation = `${temperature}°C adalah ${result.toFixed(2)}°F.`;
        formula = "Rumus: (Celsius × 9/5) + 32 = Fahrenheit";
    } else if (unit === "F") {
        // Konversi dari Fahrenheit ke Celsius
        result = (temperature - 32) * 5/9;
        explanation = `${temperature}°F adalah ${result.toFixed(2)}°C.`;
        formula = "Rumus: (Fahrenheit - 32) × 5/9 = Celsius";
    }

    // Tampilkan hasil konversi
    document.getElementById("convertedTemperature").textContent = result.toFixed(2) + '°';
    document.getElementById("explanation").textContent = explanation;
    document.getElementById("formula").textContent = formula;

    // Tampilkan elemen hasil konversi
    document.getElementById("result").style.display = "block";
});
