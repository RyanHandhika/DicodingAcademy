const API = {
  fetch(delay, simulateError = false) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (simulateError) {
          return reject(new Error(`Error from delay ${delay}`));
        }
        return resolve(`Data from delay ${delay}`);
      }, delay);
    });
  },
};

const sampleSuccessData = [
  { delay: 100, simulateError: false },
  { delay: 50, simulateError: false },
];

const sampleErrorData = [
  { delay: 100, simulateError: false },
  { delay: 50, simulateError: true },
];

export { API, sampleSuccessData, sampleErrorData };
