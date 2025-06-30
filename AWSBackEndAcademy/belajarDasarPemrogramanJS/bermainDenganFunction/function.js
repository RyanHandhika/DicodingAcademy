/*

=> function adalah program kecil berisi sekumpulan perintah sehingga bisa dijalankan saat dibutuhkan
=> function ini bertujuan untuk meminimalisir aktivitas rendundan (menuliskan kode yang sama secara berulang kali)


*/

/*

Deklarasi Function
Ada tiga istilah yang perlu dipahami dalam mendefinisikan function, yakni function keyword, identifier, dan function body.

1. Function keyword: syarat paling utama saat membuat function.
2. Identifier: identitas function.
3. Function body: block of code yang membungkus banyak perintah.

*/

// Contoh pembuatan sebuah function:
function convertCelsiusToFahrenheit(temperature) {
  const temperatureInFahrenheit = (9 / 5) * temperature + 32;
  console.log("Hasil konversi:", temperatureInFahrenheit);
}

// Setelah membuat function, kita harus memanggil function tersebut untuk mengeksekusi kode dan mengeluarkan hasil yang kita butuhkan
// cara pemanggilan function:
const temperatureInCelsius = 90;
convertCelsiusToFahrenheit(temperatureInCelsius);
