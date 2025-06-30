/*

=> High Order Function (HOF)
-> adalah fungsi yang menerima fungsi lainnya sebagai argumen dan/atau mengembalikan sebuah fungsi lain.
-> Ada beberapa tujuan dari teknik HOF ini, yaitu:
1. Mengabstraksi fungsi aksi dari sebuah proses asynchronous dalam bentuk callback.
2. buat utility function, yaitu fungsi Array.map, Array.filter, Array.reduce, dan sebagainya.
3. erapkan teknik matematika, seperti currying dan function composition.

*/

// Contoh penerapan teknik High Order Function (HOF):
function apply(operation, ...args) {
  // kita bisa menambahkan kode lain sebelum operation dijalankan.

  return operation(...args);
}

function sum(a, b, c) {
  return a + b + c;
}

function discount(disc, value) {
  return value - (disc / 100) * value;
}

const productPrice = apply(sum, 100, 100, 200);
const withDiscount = apply(discount, 25, productPrice);

console.log("Product price:", productPrice); // Output: Product price: 400
console.log("With discount 25%:", withDiscount); // Output: With discount 25%: 300

// Contoh penggunaan fungsi map:
const angka = [1, 2, 3, 4];
const newAngka = angka.map((angka) => angka * 2);
console.log(angka);
console.log(newAngka);
