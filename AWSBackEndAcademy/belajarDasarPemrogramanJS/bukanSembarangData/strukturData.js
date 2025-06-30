/*

=> Struktur data adalah cara mengatur, menyimpan, dan mengorganisir data di dalam komputer agar dapat di akses, diolah, dan dimanipulasi secara efisien.
-> Struktur data yang akan kita bahas kali ini adalah object
-> Object adalah kumpulan pasangan key-value dan merupakan tipe data yang bukan primitif.

=> Cara pembuatan object:

*/

// 1. object literal
const products = {
  name: "Sepatu",
  price: 230000,
};

// Cara mengakses properti didalam object
const user = {
  name: "Dicoding",
  "last name": "Indonesia",
  age: 9,
};

// 1. menggunakan tanda " . "
console.log(user.name); // Output: Dicoding

// 2. menggunakan tanda " [] "
console.log(user["last name"]); // Output: Dicoding

// 3. menggunakan tanda " {} "
const { name, lastName } = user;
console.log(name, lastName); // Output: Dicoding Indonesia

/*

Selain mengakses properti didalam object, kita juga bisa mengubah isi dari properti didalam object, seperti:

*/
const account = {
  balance: 1000,
  debt: 10,
};

account.balance = 2000;
console.log(account.balance); // Output: 2000

/*

Selain mengubah properti didalam object, kita juga bisa menghapus isi dari properti didalam object, seperti:

*/
const cat = {
  name: "Kitty",
  color: "White",
  age: 2,
};

delete cat.age;
console.log(cat); // Output: { name: 'Kitty', color: 'White' }

/*

=> Struktur data Array
-> Array adalah struktur data spesial yang dapat menyimpan kumpulan data yang terurut.
=====================================================================================
=> Membuat Array dapat dilakukan dengan tiga cara, yaitu:

*/

// 1. Menggunakan object constructor
const users = new Array();
const numbers = new Array(5);

// 2. Menggunakan sintaks Array.from
const foo = Array.from("foo");
console.log(foo); // Output: ['f', 'o', 'o']

// 3. Menggunakan array literal
const array = [];
const fruits = ["apple", "banana", "cherry"];

/*

=> Mengakses Element Array
-> Data di dalam array terurut sehingga untuk mengaksesnya dapat dengan mudah dengan menggunakan nilai indeks-nya.
-> Indeks merupakan angka yang digunakan untuk merujuk ke nilai di dalam array, sehingga kita bisa:
1. menambahkan
2. mengubah
3. menghapus nilainya

*/
const myArray = [42, 55, 30];
console.log(myArray[1]); // Output: 55

/*

=> Manipulasi nilai array
-> Terdapat 2 cara untuk manipulasi nilai pada array, seperti:
1. indexing
2. method push (cara yang kita gunakan untuk menambahkan nilai ke dalam array pada element terakhir)

*/

// Menggunakan indexing
myArray[1] = 10;
console.log(myArray); // Output: [1, 10, 3, 4, 5]

// Menggunakan push
myArray.push(6);

/*

=> Menghapus element dan data array
-> Kita bisa menggunakan keyword delete untuk menghapus element dan data pada array

*/

// Contoh:
const myPhone = ["Android", "Data Science", "Web"];
delete myPhone[1];

console.log(myPhone); // Output: ['Android', <1 empty item>, 'Web']

/*

-> Jika kita menggunkan delete, maka yang terhapus hanya data nya saja.
-> sehingga posisi element nya masih ditampilkan.
? lalu bagaimana jika ingin menghapus data dan element nya?
=> kita bisa menggunakan 
1. splice() -> untuk menghapus data dan element yang berada di tengah
2. shift() -> untuk menghapus data dan element yang berada di awal
3. pop() -> untuk menghapus data dan element yang berada di akhir

*/

// Contoh penulisan splice, shift, dan pop
myArray.splice(1, 1);
console.log(myArray); // Output: ['Android', 'Web']
myArray.shift();
console.log(myArray); // Output: ['Data Science', 'Web']
myArray.pop();
console.log(myArray); // Output: ["Android", "Data Science"]
