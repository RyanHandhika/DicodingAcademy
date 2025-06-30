/*

=> Paradigma Pemrograman
-> gaya atau pendekatan yang dilakukan oleh programmer dalam menulis sebuah program.

=> Contoh paradigma pemrograman:
1. paradigma object-oriented programming (OOP)
-> memberikan pandangan bahwa menyelesaikan masalah dapat dilakukan dengan pendekatan berbasis objek.
2. imperative
3. procedural
4. functional

*/

// Detail Paradigma Object-Oriented Programming (OOP)
/*

-> Object-oriented programming (OOP) adalah paradigma pemrograman yang memiliki pendekatan berbasis object.
-> Object akan berinteraksi satu sama lain untuk menyelesaikan tugas sehingga membentuk keseluruhan program.
-> Selain itu, object merupakan representasi dari entitas.
-> Object terdiri dari atribut informasi (property) dan perilaku (method).
-> Property adalah informasi tentang objek tersebut seperti nama, warna, dan jenis.
-> method adalah aksi atau perilaku yang dapat dilakukan oleh objek seperti berjalan, berlari, dan terbang.

*/

// Terdapat 2 cara untuk mebuat object dan class

// Constructor function
/*

JavaScript bukanlah bahasa pemrograman berbasis class sehingga JavaScript tidak mengenal class.
-> Meskipun tidak mengenal class, prinsip OOP tetap dapat diterapkan.
-> Constructor function adalah cara yang digunakan untuk membuat object dan class sebelum adanya ES6.
-> Cara membuat object dan class menggunakan constructor function dapat dilihat pada contoh berikut:

*/
// Membuat class person dengan constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.eat = function () {
  console.log(`${this.name} is eating`);
};
/*

-> Kode di atas merupakan contoh membuat blueprint dari entitas person.
-> JavaScript bukan bahasa pemrograman berbasis class, melainkan bahasa pemrograman berbasis prototype (prototype-based language).
-> Oleh karena itu, Anda melihat penggunaan prototype pada contoh kode di atas.

// Prototype adalah salah satu konsep fundamental dalam JavaScript yang memungkinkan pewarisan sifat dan method antar object.

*/
// Membuat object person dengan constructor function
const person1 = new Person("Alice", 30);
const person2 = new Person("Bob", 25);
console.log(person1.name); // Output: Alice
console.log(person2.name); // Output: Bob
person1.eat();
person2.eat();
