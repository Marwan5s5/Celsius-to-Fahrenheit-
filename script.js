const celsiusInput = document.getElementById("celsius-input");
const fahrenheitInput = document.getElementById("fahrenheit-input");
const convertBtn = document.getElementById("convert-btn");

// Celsius to Fahrenheit conversion
function celsiusToFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

// Fahrenheit to Celsius conversion
function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

// Event listener for convert button
convertBtn.addEventListener("click", function() {
  const celsius = parseFloat(celsiusInput.value);
  const fahrenheit = parseFloat(fahrenheitInput.value);

  // Celsius to Fahrenheit conversion
  if (!isNaN(celsius)) {
    const result = celsiusToFahrenheit(celsius);
    fahrenheitInput.value = result.toFixed(2);
  }

  // Fahrenheit to Celsius conversion
  if (!isNaN(fahrenheit)) {
    const result = fahrenheitToCelsius(fahrenheit);
    celsiusInput.value = result.toFixed(2);
  }
});
