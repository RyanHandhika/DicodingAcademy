// Game Pencocokan Angka
/*
=> Aturan Bermain:
1. Angka akan diacak secara random dengan range 1 - 10
2. Lalu pemain harus menebak angka yang keluar dengan cara menyamakan angka random dengan angka pilihan pemain
3. Pemain dapat memilih angka yang dia mau dengan cara menambahkan 2 buah angka
4. Jika angka yang dipilih pemain sama dengan angka random, maka akan pemain menang
5. Sebaliknya, jika berbeda maka pemain kalah
*/
// Contoh permainan:
/*
1. Pemain memasukkan penjumlahan dari dua buah angka untuk memilih angka yang di inginkan
-> pemain ingin memilih angka 4, maka pemain bisa melakukan cara 2 + 2, atau 3 + 1. Intinya yang menghasilkan angka 4.
-> sama hal nya jika pemain ingin memilih angka lain.
2. Setelah pemain sudah menentukan angka pilihannya, angka random akan di keluarkan.
3. Jika sama, maka menang.
4. Jika berbeda, maka kalah.
*/

import sum from "./index.js";
import test from "node:test";
import assert from "node:assert";

const angka1 = 3;
const angka2 = 2;

const angkaPilihan = sum(angka1, angka2);

// angka random
const random = Math.floor(Math.random() * 10);

// pengecekan
test(`Menyamakan angka yang dipilih: ${angkaPilihan}, dengan angka random: ${random}`, () => {
  assert.strictEqual(angkaPilihan, random);
});
