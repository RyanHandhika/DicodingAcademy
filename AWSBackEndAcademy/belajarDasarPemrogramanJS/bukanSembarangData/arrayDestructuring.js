// Destructuring adalah cara kita untuk memecah sebuah array agar menjadi sebuah kepingan-kepingan data
// Sehingga kepingan-kepingan data tersebut bisa kita manipulasi sesuai keinginan kita

// Contoh:
const introduction = ["Hello", "Arsy"];
const [greeting, name] = introduction;
console.log(greeting); // Output: Hello

/*

=> Map
-> Map adalah tipe data yang mirip dengan object yaitu menyimpan data dengan key-value.
-> Map dapat dibuat dengan mudah yaitu menggunakan object map constructor seperti berikut ini:

*/
const map = new Map();
map.set("name", "aras");
console.log(map); // Map(1) { 'name' => 'aras' }

// Cara mengakses nilai pada map:
console.log(map.get("name")); // Output: aras

// Cara menghapus nilai di map:
map.set("last name", "opraza");
map.delete("last name");
console.log(map); // Map(1) { 'name' => 'aras' }
