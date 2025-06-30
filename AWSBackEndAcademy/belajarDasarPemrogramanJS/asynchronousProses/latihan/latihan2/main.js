/**
 * @returns is a output in function
 */

import { API, sampleSuccessData, sampleErrorData } from "./support.js";

function prosesData(dataArray) {
  const promise = dataArray.map(({ delay, simulateError }, i) => {
    return API.fetch(delay, simulateError);
  });

  return Promise.allSettled(promise);
}

function tampilkanData(results) {
  results.forEach((result, i) => {
    if (result.status === "fulfilled") {
      console.log(`Data ke-${i + 1}: ${result.value}`);
    } else {
      console.log(`Data ke-${i + 1}: ${result.reason}`);
    }
  });
}

prosesData(sampleSuccessData).then(tampilkanData).catch(console.log());
prosesData(sampleErrorData).then(tampilkanData).catch(console.log());
