export function makeCoffe(name, callbaack) {
  const estimationTime = 10000;
  const inSecond = estimationTime / 1000;
  let isSuccess = false;

  console.log(
    `Mohon menunggu. Pramusaji sedang membuatkan kopi dalam ${inSecond} detik`
  );

  setTimeout(() => {
    const number = Math.random();
    if (number > 0.3) {
      isSuccess = true;
    }

    if (!isSuccess) {
      callbaack(new Error("Gagal membuat kopi!"), null);
      return;
    }

    console.log("Pramusaji selesai membuat kopi.");
    callbaack(null, name);
  }, estimationTime);
}

export function sendCoffe(name, callbaack) {
  const estimationTime = 2000;
  let isSuccess = false;
  console.log("Pramusaji sedang mengantar kopi pesanan");
  setTimeout(() => {
    const number = Math.random();
    if (number > 0.3) {
      isSuccess = true;
    }

    if (!isSuccess) {
      callbaack(new Error("Gagal mengantar kopi!"), null);
      return;
    }

    console.log("Pramusaji sudah sampai dimeja");
    console.log("Pramusaji memberikan kopi pesanan");

    callbaack(null, name);
  }, estimationTime);
}
