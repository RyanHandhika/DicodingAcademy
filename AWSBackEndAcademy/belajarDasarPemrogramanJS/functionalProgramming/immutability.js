/*

=> Immutability
-> sebuah konsep pada javascript yang melakukan proses tanpa mengubah data sebelumnya.
-> Beberapa contoh built in function javascript yang menganut konsep immutability:
1. .map() -> membuat array baru dengan kondisi tertentu
2. .filter() -> memfilter, mengambil, dan memasukkan data yang sesuai kriteria kedalam array baru
3. .reduce() -> mengeksekusi fungsi reducer pada setiap elemen array dan hanya mengembalikan output satu nilai saja

*/

// contoh:

// 1. .map()
const oldArray = ["Harry", "Ron", "Jeff", "Thomas"];
const newArray = oldArray.map((name) => `${name}!`);

console.log(newArray); // Output: [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]
console.log(oldArray); // Output: [ 'Harry', 'Ron', 'Jeff', 'Thomas' ]

// 2. .filter()
const truthyArray = [1, "", "Halo", 0, null, "Harry", 14].filter((item) =>
  Boolean(item)
);

console.log(truthyArray); // Output: [ 1, 'Halo', 'Harry', 14 ]

// 3. .reduce()
const students = [
  {
    name: "Harry",
    score: 60,
  },
  {
    name: "James",
    score: 88,
  },
  {
    name: "Ron",
    score: 90,
  },
  {
    name: "Bethy",
    score: 75,
  },
];

const totalScore = students.reduce((acc, student) => acc + student.score, 0);

console.log(totalScore); // Output: 313

/*

=> Object.freeze()
-> fungsi untuk membekukan objek sehingga tidak dapat diubah setelah dibuat

*/

// contoh 1:
const user = {
  name: "John",
  email: "john@dicoding.com",
};

// Membekukan objek user
Object.freeze(user);

// Mencoba mengubah properti dari objek yang dibekukan
user.email = "doe@dicoding.com";
console.log(user); // Output: { name: 'John', email: 'john@dicoding.com' }

// contoh 2:
// note: untuk mengaktifkan object.freeze ini ke semua object
function deepFreeze(object) {
  Object.keys(object).forEach((name) => {
    const prop = object[name];
    if (typeof prop == "object" && prop !== null) {
      deepFreeze(prop);
    }
  });

  return Object.freeze(object);
}

const complexUser = {
  name: "Bob",
  email: "bob@dicoding.com",
  preferences: {
    newsletter: true,
    notifications: "weekly",
    address: {
      city: "New York",
      zip: "10001",
    },
  },
};

deepFreeze(complexUser);

// Diabaikan
complexUser.preferences.address.city = "Los Angeles";

console.log(complexUser.preferences.address.city); // Output: 'New York'
