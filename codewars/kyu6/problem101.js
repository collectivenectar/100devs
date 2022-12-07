// Parameters: Given a temperature in Celsius
// Return: An array containing two elements, the temperature converted to both Kelvin and Fahrenheit
// with the decimal point precision at the 5th point.

// Examples:
// convertTemperature(25) => ['298.15000', '77.00000']
// convertTemperature(100) => ['373.15000', '212.00000']
// convertTemperature(0) => ['273.15000', '32.00000']

// Pseudocode:

// To set decimal point precision, use .toFixed(<points needed>), and otherwise
// use the formula of celsius + 273.15 to get Kelvin, and (c * 1.80) + 32.00 to get
// fahrenheit.

// By wrapping the two terms in the .toFixed() method and then placing them in
// an array literal, I return the array and voila!

var convertTemperature = function(celsius) {
    return [(celsius + 273.15).toFixed(5) , ((celsius * 1.80) + 32.00).toFixed(5)]
};
