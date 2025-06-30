/*

=> keyword return
-> return digunakan untuk mengembalikan sebuah nilai yang dihasilkan oleh function.
-> tanpa return ini, function akan mengembalikan nilai undefined

*/

// Contoh:
function convertCelsiusToFahrenheit(temperature) {
  return (9 / 5) * temperature + 32;
}

console.log(convertCelsiusToFahrenheit(90)); // Output: 194
