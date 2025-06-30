/*

=> Rekursi (rekursive) 
-> Teknik fungsi yang memanggil dirinya sendiri sehingga operasi dalam fungsi tersebut terus berulang,
-> dan akan berhenti jika mencapai kondisi tertentu untuk ia keluar dari perulangannya.

*/

// Penyelesaian menggunakan for loop
function generateArray(n) {
  const result = [];
  for (let counter = 0; counter <= n; counter += 1) {
    result.push(counter);
  }
  return result;
}

console.log(generateArray(5)); // Output: [0, 1, 2, 3, 4, 5]

// Penyelesaian menggunakan rekursi
function generateArray(n) {
  if (n < 0) {
    return [];
  }
  return [...generateArray(n - 1), n];
}

console.log(generateArray(5)); // Output: [0, 1, 2, 3, 4, 5]
