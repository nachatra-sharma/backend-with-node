// ================================ Example 1 =======================


function getRandom(num) {
  return Math.floor(Math.random() * num);
}

function createPromiseWithTimeout() {
  return new Promise(function exec(resolve, reject) {
    console.log("Entering the executor callback in the promise constructor");
    setTimeout(function () {
      console.log("running......");
      let num = getRandom(10);
      if (num % 2 === 0) {
        resolve(num);
      } else {
        reject(num);
      }
    }, 1000);
    console.log("Exiting the executor callback in the promise constructor");
  });
}

console.log("Starting....");
const promise = createPromiseWithTimeout();
console.log("we are now waiting for the promise to complete");
promise.then(
  function fulfillHandler(value) {
    console.log("Inside fullfill handler with value ", value);
  },
  function rejectionHandler(value) {
    console.log("Inside rejection handler with value ", value);
  }
);


// ============================= Example 2 ===============================

function createPromise() {
  return new Promise(function exec(resolve, reject) {
    let x = setTimeout(function () {
      return 2;
    }, 1000);
    if (x % 2 === 0) {
      resolve("successful");
    } else {
      reject("rejected");
    }
  });
}

const p = createPromise();
p.then(
  function fulfillHandler1(value) {
    console.log("inside fulfillhandler1 with value", value);
  },
  function rejectionHandler1(value) {
    console.log("inside rejectionhandler1 with value", value);
  }
);

p.then(
  function fulfillHandler2(value) {
    console.log("inside fulfillhandler2 with value", value);
  },
  function rejectionHandler2(value) {
    console.log("inside rejectionhandler2 with value", value);
  }
);

