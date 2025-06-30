/*

=> Set
-> Set adalah struktur data yang spesial dibandingkan dengan map, array, dan object.
-> Set dapat dibuat dengan cara menuliskan object constructor set seperti contoh berikut ini.

*/

// Contoh menuliskan struktur data set:
// 1. Tanpa nilai
const set = new Set();
// 2. Dengan nilai
const mySet = new Set([1, 2, 3]);

// Cara menyimpan nilai di set:
set.add(1);
set.add(2);

// Cara mengakses nilai di set:
// Cara 1:
for (const number of set) {
  console.log(number); // Output: 1, 2
}
// Cara 2:
set.forEach((value) => console.log(value)); // Output: 1, 2

// Cara menghapus nilai di set:
set.delete(1);
console.log(set); // Set(1) { 2 }
