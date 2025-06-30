/*

=> Async-Await
-> Istilah “async-await” terdiri dari dua keyword JavaScript, yaitu async dan await.
-> Kita perlu menggunakan mereka berdua secara bersamaan dan tidak bisa mencederai salah satunya.
-> Hal yang perlu dicatat adalah fitur ini hanya bisa dipakai jika menggunakan function.

*/

// contoh penulisan dari async-await:
// pastikan untuk menambahkan keyword async sebelum keyword function
async function promiseWithAsyncAwait() {
  try {
    console.log("Start.");

    const result = await doSomething(); // tambahkan keyword await pada baris kode yang ingin di tunggu proses nya
    console.log(result);

    console.log("End.");
  } catch (error) {
    console.log(error.message);
  }
}

promiseWithAsyncAwait();
