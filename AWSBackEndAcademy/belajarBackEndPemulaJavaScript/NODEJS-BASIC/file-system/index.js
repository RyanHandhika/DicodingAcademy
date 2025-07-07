import fs from "fs";
import process from "process";

// readFile
const readFile = (error, data) => {
  if (error) {
    console.log("Data tidak ditemukan!");
    return;
  }
  console.log(data);
};

fs.readFile(
  "D:/dicodingCourse/AWSBackEndAcademy/belajarBackEndPemulaJavaScript/NODEJS-BASIC/file-system/note.txt",
  "utf8",
  readFile
);

// readableStream
const readableStream = fs.createReadStream(
  "D:/dicodingCourse/AWSBackEndAcademy/belajarBackEndPemulaJavaScript/NODEJS-BASIC/file-system/article.txt",
  {
    highWaterMark: 10,
  }
);

readableStream.on("readable", () => {
  try {
    process.stdout.write(`[${readableStream.read()}]`);
  } catch (err) {
    console.log(err);
  }
});

readableStream.on("end", () => {
  console.log("Done");
});
