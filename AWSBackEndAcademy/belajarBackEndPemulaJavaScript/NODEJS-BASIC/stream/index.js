/**
 * TODO:
 * Buatlah program untuk membaca teks input.txt dan menuliskannya ulang pada berkas output.txt
 * menggunakan teknik readable stream dan writable stream.
 */
import fs from "fs";

const readableStream = fs.createReadStream(
  "D:/dicodingCourse/AWSBackEndAcademy/belajarBackEndPemulaJavaScript/NODEJS-BASIC/stream/input.txt",
  {
    highWaterMark: 15,
  }
);

const writableStream = fs.createWriteStream(
  "D:/dicodingCourse/AWSBackEndAcademy/belajarBackEndPemulaJavaScript/NODEJS-BASIC/stream/output.txt"
);

readableStream.on("data", (chunk) => {
  writableStream.write(`${chunk}\n`);
});
