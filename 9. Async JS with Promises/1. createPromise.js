function getRandom(num) {
  return Math.floor(Math.random() * num + 1);
}

// ==================== Example 1........................

function createPromiseWithLoop() {
  return new Promise(function exec(resolve, reject) {
    for (let i = 0; i < 1000000; i++) {}
    const result = getRandom(10);
    if (result % 2 === 0) {
      resolve(result);
    } else {
      reject(result);
    }
  });
}

console.log(createPromiseWithLoop());

// ===================== Example 2.........................

function getPromise() {
  return new Promise(function exec(resolve, reject) {
    setTimeout(function () {
      let num = getRandom(10);
      if (num % 2 === 0) {
        resolve(num);
      } else {
        reject(num);
      }
    }, 1000);
  });
}

console.log(getPromise());
