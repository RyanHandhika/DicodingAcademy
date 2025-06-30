/*

=> Promise
-> solusi untuk menghindari callback hell pada saat menangani kode yang bersifat asyncrhonous

*/

/*

-> promise ini memiliki beberapa statment, yaitu:
1. pending: tenggat waktu yang digunakan untuk melakukan proses pada kode
2. fulfilled: kondisi dimana promise mengembalikan nilai berupa data (bukan error)
3. rejected: kondisi dimana promise mengembalikan nilai berupa error (bukan data)

*/

// membandingkan cara penulisan menggunakan callback dan promise
// callback:
doSomething((doSomethingError, doSomethingData) => {
  if (doSomethingError) {
    console.log(doSomethingData);
  }

  console.log(doSomethingData);
});

// promise
function onFulfilled(doSomethingData) {
  // Do your jobs when "fulfilled" happens…
  console.log(doSomethingData);
}

function onRejected(doSomethingError) {
  // Do your jobs when "rejected" happens…
  console.log(doSomethingError);
}

doSomething().then(onFulfilled, onRejected);

// Contoh lain dari promise:
// chaining (menggunakan method then lebih dari 1 menggunakan simbol "." atau biasa disebut dengan chaining)
makeCoffee(order)
  .then((value) => {
    /* Do your jobs... */
  })
  .then((value) => {
    /* Do your jobs... */
  })
  .then((value) => {
    /* Do your jobs... */
  })
  .then((value) => {
    /* Do your jobs... */
  })
  .then((value) => {
    /* Do your jobs... */
  })
  .then((value) => {
    /* Do your jobs... */
  })
  .catch((error) => console.log(error.message));

// catch (menampung semua pesan error yang diberikan)
makeCoffee(order)
  .then((value) => {
    return sendCoffee(value);
  })
  .then((value) => {
    console.log(`Pramusaji memberikan ${value} pesanan.`);
    console.log(`Saya mendapatkan ${value} dan menghabiskannya.`);
  })
  .catch((error) => {
    console.log(error.message);
  });

// Note:
/*
-> Pastikan kita mengembalikan nilai Promise-nya (return) jika memanfaatkan chaining method.
-> Hal ini karena then akan berjalan jika menemukan objek Promise nya.
-> Sehingga jika tidak menemukan objek promise nya, maka chaining selanjut nya tidak akan dijalankan.
*/
// contoh tanpa mengembalikan nilai:
makeCoffee(order)
  .then((value) => {
    sendCoffee(value); // <-- tidak akan dilanjutkan ke then berikutnya.
  })
  .then((value) => console.log("tidak akan pernah dijalankan"));

// contoh mengembalikan nilai:
makeCoffee(order)
  .then((value) => {
    return sendCoffee(value); // <-- akan dilanjutkan ke then berikutnya.
  })
  .then((value) => console.log("akan dijalankan setelah then sebelumnya"));
