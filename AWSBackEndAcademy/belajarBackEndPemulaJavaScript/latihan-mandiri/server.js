// Http Server NodeJS Native

const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");
  const { url, method } = req;

  if (url === "/") {
    if (method === "GET") {
      res.statusCode = 200;
      res.end("Selamat datang di server!");
    } else {
      res.statusCode = 400;
      res.end(`Halaman ini tidak bisa diakses menggunakan method ${method}`);
    }
  } else if (url === "/about") {
    if (method === "GET") {
      res.statusCode = 200;
    }
  }
});

const port = 8000;
server.listen(port, () => {
  console.log(`Server is success to run on http://localhost:${port}`);
});
