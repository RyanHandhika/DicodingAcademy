/*

=> Terdapat beberapa syarat untuk bisa disebut sebagai pure function, yaitu:
1. Menghasilkan nilai yang sama setiap kali dipanggil dengan argumen yang sama.
2. Tidak memiliki efek samping yang dapat memengaruhi keadaan di luar fungsi tersebut.

*/

// Contoh kode pure function:
function addWithPureFP(value, addingValue) {
  return value + addingValue;
}

const resultPure1 = addWithPureFP(0, 1);
console.log(`result Pure 1 is ${resultPure1}`); // Output: result Pure 1 is 1

const resultPure2 = addWithPureFP(resultPure1, 1);
console.log(`result Pure 2 is ${resultPure2}`); // Output: result Pure 2 is 2

const resultPure3 = addWithPureFP(resultPure2, 1);
console.log(`result Pure 3 is ${resultPure3}`); // Output: result Pure 3 is 3

console.log(resultPure1, resultPure2, resultPure3); // Output: 1, 2, 3

// Contoh kode impure function:
let value = 0;

function addWithImpureFP(addingValue) {
  value += addingValue;
  console.log(`result impure is ${value}`);
  return value;
}

const resultImpure1 = addWithImpureFP(1); // Output: Current value is 1
const resultImpure2 = addWithImpureFP(1); // Output: Current value is 2
const resultImpure3 = addWithImpureFP(1); // Output: Current value is 3

console.log(resultImpure1, resultImpure2, resultImpure3); // Output: 1, 2, 3

/*

=> Keuntungan menggunakan pure function termasuk kemampuan untuk mengoptimalkan kode melalui memoization, yakni:
-> hasil dari fungsi disimpan dan digunakan kembali jika input yang sama ditemukan.

*/
