/*

=> Modularisasi
-> cara kita untuk memecahkan kode program yang kompleks dan besar menjadi bentuk yang lebih sederhana dan ringkas.
-> Implementasi dari modularisasi di JavaScript adalah dengan membuat berkas-berkas terpisah per bagian function/method yang disebut dengan modul.
-> Kode yang ada di dalam Modul dapat digunakan oleh modul lainnya dengan cara export dan import.
-> Manfaat dari modularisasi adalah dapat menyelesaikan masalah terkait struktur dan kode program.

*/

// Import
// JavaScript memungkinkan kita untuk menggunakan function/method dari modul lainnya menggunakan keyword import.

// Export
// keyword yang kita gunakan untuk melabeli suatu function/method/variable agar dapat diakses dari luar modul saat ini.
// Export terdiri dari dua jenis, yaitu:
// 1. default export
// 2. named export

// contoh penulisan export:
// Mengekspor Variable
export const name = "Dicoding";

// Mengekspor Function
export function sayHi(name) {
  console.log(`Hi, ${name}!`);
}

// contoh penulisan import:
// Mengimpor Variable
import { name } from "./module.js";

// Mengimpor Function
import { name, sayHi } from "./module.js";

console.log(name);
sayHi(name);
