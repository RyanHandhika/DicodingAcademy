// Disetiap nilai yang ditampung oleh variabel pasti memiliki tipe data
// Tipe data adalah tipe dari si value nya
// Macam-macam tipe data:

/*
1. String (tipe data yang merepresentasikan teks)
2. Number (tipe data yang merepresentasikan bilangan bulat maupun pecahan)
3. Boolean (tipe data yang memiliki 2 nilai, yaitu true dan false)
4. Nilai kosong (tipe data yang merepresentasikan nilai kosong, seperti null dan undefined)
*/

// Contoh:
var nama = "Ryan Handhika"; // String
let age = 19; // Number
const haveAccount = true; // Boolean
let girlFriend; // undefine
let bestFriend = null; // null

/*
Perbedaan undefined dengan null:
=> undefined (baru membuat variabel tanpa meberikan nilai nya)
=> null (membuat variabel dan mengatur null sebagai nilai variabel nya)
*/

// kita juga mampu mengubah tipe data dari sebuah nilai jika tidak sesuai dengan keinginan kita
// contoh kita ingin nilai nya bertipe data string, tetapi di program mengeluarkan nilai bertipe data number,
// cara untuk mengubah nya adalah dengan menggunakan fungsi String (bawaan dari javascript)
let satu = 1; // Number
let ubahSatu = String(satu); // String

/*
selain number ke string, kita juga bisa mengubah dari boolean ke string, number ke boolean, dan sebaliknya.
*/
