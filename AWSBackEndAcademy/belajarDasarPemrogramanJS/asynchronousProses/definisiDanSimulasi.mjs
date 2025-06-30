/*

=> Asynchronous
-> Proses yang tidak melakukan blocking process terhadap proses berikutnya karena tugas komputasi yang besar dan memakan banyak waktu.

*/
// Contoh 1 penerapan asynchronous:
// console.log("Pemanggilan 1");

// function myFunction() {
//   console.log("Pemanggilan 2");

//   setTimeout(() => {
//     console.log("Pemanggilan 3");
//   }, 3000);
// }
// myFunction();

// console.log("Pemanggilan 4");

// Kasus cafe
import { makeCoffe, sendCoffe } from "./module.mjs";

const order = "Balerina Capucino";

function cafe() {
  console.log(`Saya memesan kopi ${order}!`);
  makeCoffe(order, (makeCoffeError, makeCoffeSuccess) => {
    if (makeCoffeError) {
      console.error(makeCoffeError);
      return;
    }

    sendCoffe(makeCoffeSuccess, (sendCoffeError, sendCoffeSuccess) => {
      if (sendCoffeError) {
        console.error(sendCoffeError);
        return;
      }

      console.log(
        `Saya mendapatkan kopi ${sendCoffeSuccess} dan menghabiskannya`
      );
    });
  });
}

cafe();

// mencoba module node js (file system)
import { readFile } from "fs";

readFile("./sample.txt", (error, data) => {
  if (error) {
    console.log(error);
    return;
  }

  const greeting = data
    .toString()
    .replace("%name%", "Dicoding")
    .replace("%your_name%", "JavaScript");

  console.log(greeting);
});
