// const memberOfFamily = ["Ryan", "Ikhsan", "Jaja", "Gabriel"];

// const addFamilyMember = (newPerson, array) => {
//   // array.push(newPerson); // bukan immutability, karena menggunakan function push() yang akan mengubah data
//   return [...array, newPerson];
// };

// console.log(memberOfFamily);
// const newMember = addFamilyMember("Raka", memberOfFamily);
// console.log(memberOfFamily);
// console.log(newMember);

// const countDown = (startTime) => {
//   console.log(startTime);
//   if (startTime > 1) countDown(startTime - 1);
// };

// countDown(10);

// for (let i = 10; i > 0; i--) {
//   console.log(i);
// }

// // reusable function
// const arrayMap = (array, action) => {
//   const loopThrough = (array, action, newArray = [], indeks = 0) => {
//     const item = array[indeks];
//     if (!item) return newArray;
//     return loopThrough(array, action, [...newArray, action(item)], indeks + 1);
//   };
//   return loopThrough(array, action);
// };

// const myArray = ["Hayabusa", "Helcurt", "Kagura", "Hylos"];

// console.log(
//   arrayMap(myArray, (name) => {
//     return `${name}!`;
//   })
// );

const month = ["Mar", "Jan", "Feb", "Dec"];
const sortMonth = [...month].sort();
console.log(month);
console.log(sortMonth);
