/*

=> Spread Operator
-> Spread operator adalah fitur yang menarik dan membantu dalam pengelolaan object dan array.
-> Spread operator ditandai dengan sintaks tiga titik (...).

*/

// Spread Operator pada Obkjek
const obj1 = { name: "Dicoding" };
const obj2 = { lastName: "Indonesia", address: "Jl. Batik Kumeli No 50" };
const newObj = { ...obj1, ...obj2 };
console.log(newObj); // Output: { name: 'Dicoding', lastName: 'Indonesia', address: 'Jl. Batik Kumeli No 50' }

// Spread Operator pada Obkjek
const array1 = ["Dicoding"];
const array2 = ["Indonesia", "Jl. Batik Kumeli No 50"];
const newArray = [...array1, ...array2];
console.log(newArray); // Output: ['Dicoding', 'Indonesia', 'Jl. Batik Kumeli No 50']
