function fun(x, gun) {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
  gun(x);
}

function gun(value) {
  console.log(value);
}

fun(10, gun);

// setTimeout

setTimeout(function greet() {
  console.log("Hello Their!!");
}, 5000);

// ==================================== Dry run this code

console.log("Hi");
setTimeout(function greet() {
  console.log("Welcome");
}, 3000);
console.log("Done");

// =================================== Asyn JS callstack, event queu, event loop

function timeConsumingByLoop() {
  console.log("Loop Start");
  for (let i = 1; i <= 100000000; i++) {
    // Some task
  }
  console.log("Loop ends");
}

function timeConsumingByRuntime() {
  console.log("Timer start");
  setTimeout(function () {
    console.log("Timmer running Woha!!!");
  }, 5000);
  console.log("Timer ends");
}

console.log("Start");
timeConsumingByLoop();
timeConsumingByRuntime();
timeConsumingByLoop();
console.log("Ends");

// ============================== Try out this case

function timeConsumingByLoop() {
  console.log("Loop Starts");
  for (let i = 0; i < 100000000; i++) {
    // some task
  }
  console.log("Loop Ends");
}

function timeConsumingByRuntimeFeature0() {
  console.log("Start Timer");
  setTimeout(function exec0() {
    console.log("Completed the timer 1");
    for (let i = 1; i <= 100000000; i++) {
      // some task
    }
  }, 5000);
}

function timeConsumingByRuntimeFeature1() {
  console.log("Starting timer 2");
  setTimeout(function exec1() {
    console.log("Completed the timer 2");
  }, 0);
}

function timeConsumingByRuntimeFeature2() {
  console.log("Starting timer 3");
  setTimeout(function exec2() {
    console.log("Completed the timer 3");
  }, 200);
}

console.log("hi");
timeConsumingByLoop();
timeConsumingByRuntimeFeature0();
timeConsumingByRuntimeFeature1();
timeConsumingByRuntimeFeature2();
timeConsumingByLoop();
console.log("bye");

// set interval and clear interval

let count = 1;
let x = setInterval(function exec() {
  console.log("Another");
  count++;
  if (count % 5 == 0) {
    clearInterval(x);
  }
}, 1000);
