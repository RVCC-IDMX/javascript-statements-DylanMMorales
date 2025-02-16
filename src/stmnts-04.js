/*
 * stmnts-04.js
 * Language: JavaScript
 * Test: tests/stmnts-04.test.js
 * Path: src/stmnts-04.js
 *
 * Temperature Calculator Assignment:
 * Implement the following functions to perform temperature conversions.
 * Your implementations should pass all tests defined in the test file.
 *
 * Note: Use the formulas from the provided reference to convert between
 * Fahrenheit, Celsius, and Kelvin. Check your operator order carefully.
 */

/**
 * Converts a temperature in Fahrenheit to Celsius rounded to 2 decimal places.
 *
 * @param {number} fahrenheit - Temperature in Fahrenheit.
 * @returns {number} - Temperature in Celsius.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Subtraction
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Division
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Multiplication
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
 */
function fahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * (5 / 9)).toFixed(2);
}

/**
 * Converts a temperature in Celsius to Fahrenheit rounded to 2 decimal places.
 *
 * @param {number} celsius - Temperature in Celsius.
 * @returns {number} - Temperature in Fahrenheit.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Multiplication
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
 */
function celsiusToFahrenheit(celsius) {
  return ((celsius * (9 / 5)) + 32).toFixed(2);
}

/**
 * Converts a temperature in Kelvin to Celsius rounded to 2 decimal places.
 *
 * @param {number} kelvin - Temperature in Kelvin.
 * @returns {number} - Temperature in Celsius.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Subtraction
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
 */
function kelvinToCelsius(kelvin) {
  return (kelvin - 273.15).toFixed(2);
}

/**
 * Converts a temperature in Celsius to Kelvin rounded to 2 decimal places.
 *
 * @param {number} celsius - Temperature in Celsius.
 * @returns {number} - Temperature in Kelvin.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
 */
function celsiusToKelvin(celsius) {
  return (celsius + 273.15).toFixed(2);
}

// DO NOT EDIT THE FOLLOWING EXPORT STATEMENT.
// The test file depends on these exported function names.
module.exports = {
  fahrenheitToCelsius,
  celsiusToFahrenheit,
  kelvinToCelsius,
  celsiusToKelvin,
};
