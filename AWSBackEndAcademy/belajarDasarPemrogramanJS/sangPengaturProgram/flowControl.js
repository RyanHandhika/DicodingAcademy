/*

=> Flow Control
-> flow control
- urutan bagaimana expression dan statement dijalankan oleh komputer berdasarkan kondisi dan logika tertentu.
-> Flow control memungkinkan programmer untuk membuat program yang:
1. dinamis
2. mengeksekusi perintah yang berulang
3. menangani berbagai macam kondisi berdasarkan input dari pengguna.

*/

/*

=> Conditional Flow
-> Conditional flow adalah cara untuk menentukan apakah kode dieksekusi atau dilewatkan.
-> Jika suatu kondisi terpenuhi, kode akan dieksekusi dan kode yang lainnya akan diabaikan.
-> Kondisi ini ditentukan dari inputan yang diberikan oleh pengguna.

*/

/*

=> Looping
-> Looping (perulangan) adalah statements yang memungkinkan kita untuk mengeksekusi kode yang sama secara berulang.
-> Di JavaScript terdapat banyak jenis perulangan, seperti:
1. for loop
2. for in
3. for of
4. while
5. do-while.

*/

/*

=> Error Handling
-> cara untuk menangani error.
-> Error handling dapat mencegah crash pada program ketika terjadi error yang disebabkan oleh kesalahan syntax atau error lainnya.

*/

/*

=> Throw Error
-> cara untuk melempar/mengirimkan pesan error yang akan ditampilkan pada layar jika terjadi error di program.

=> Try-Catch
-> cara yang dimiliki JavaScript untuk menangani error.
-> Try-catch memiliki dua blok utama yaitu try dan catch.
-> Try merupakan blok kode yang akan menangani error,
-> Catch merupakan blok kode yang dibangkitkan ketika terjadi error di dalam blok try.

=> Finally
->  blok kode yang berada di akhir try-catch.

*/

// contoh penulisan try catch dan finally
try {
  console.log("Ini try block");
} catch (err) {
  console.log("Ini catch block");
} finally {
  console.log("Ini finally block");
}

// Implementasi Flow Control
function checkGrades(grades) {
  for (let i = 0; i < grades.length; i++) {
    if (typeof grades[i] !== "number") {
      throw new Error("Invalid input. Please provide an array of numbers.");
    }

    const grade = grades[i];
    let predicate;

    if (grade >= 90) {
      predicate = "A";
    } else if (grade >= 80) {
      predicate = "B";
    } else if (grade >= 70) {
      predicate = "C";
    } else if (grade >= 60) {
      predicate = "D";
    } else {
      predicate = "E";
    }

    console.log(`Grade ${i + 1}: ${grade} (${predicate})`);
  }
}

try {
  const studentGrades = [95, 85, 65, 80, 70];
  checkGrades(studentGrades);
} catch (e) {
  console.error(e);
}
