/*

=> Functional Programming (FP)
-> paradigma yang di dasarkan pada fungsi matematika murni, yakni:
-> fungsi harus menghindari perubahan data sehingga selalu menghasilkan nilai sama ketika diberikan argumen sama.
-> Dalam FP, fungsi adalah elemen utama yang digunakan untuk memecah kode dan membangun keseluruhan program.
-> Dengan menerapkan konsep-konsep dalam FP, kita dapat membangun aplikasi menggunakan kode yang deklaratif (lebih simpel, tegas, dan terprediksi).

*/

// Kode 1: kode yang biasa kita gunakan (imperative)
const names = ["Harry", "Ron", "Jeff", "Thomas"];

const newNamesWithExcMark = [];

for (let i = 0; i < names.length; i++) {
  newNamesWithExcMark.push(`${names[i]}!`);
}

console.log(newNamesWithExcMark); // output: [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]

// kode 2: kode yang mengimplementasikan paradigma FP (deklaratif)
const animals = ["Cat", "Wolf", "Dog", "Cow"];

const newAnimalsWithExcMark = animals.map((animal) => `${animal}!`);

console.log(newAnimalsWithExcMark); // output: [ 'Cat!', 'Wolf!', 'Dog!', 'Cow!' ]
