function fibonacci(n) {
  const result = [];

  let a = 0;
  let b = 1;

  result.push(a);
  if (n >= 1) {
    result.push(b);
  }

  for (let i = 2; i <= n; i++) {
    const nextNum = a + b;
    result.push(nextNum);

    a = b;
    b = nextNum;
  }
  return result;
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
