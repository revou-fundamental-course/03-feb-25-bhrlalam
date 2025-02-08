document.getElementById('tempForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const temperatureInput = document.getElementById('temperature').value;
    const unit = document.getElementById('unit').value;
    const resultDiv = document.getElementById('result');
    const explanationDiv = document.getElementById('explanation');

    // Validate input
    if (temperatureInput === '' || isNaN(temperatureInput)) {
        alert('Please enter a valid number for temperature.');
        return;
    }

    let result, explanation;

    if (unit === 'celsius') {
        // Convert from Celsius to Fahrenheit
        result = (temperatureInput * 9/5) + 32;
        explanation = `${temperatureInput}°C is equal to ${result}°F.`;
    } else if (unit === 'fahrenheit') {
        // Convert from Fahrenheit to Celsius
        result = (temperatureInput - 32) * 5/9;
        explanation = `${temperatureInput}°F is equal to ${result}°C.`;
    }

    resultDiv.innerHTML = `Conversion Result: ${result.toFixed(2)}`;
    explanationDiv.innerHTML = explanation;
});
