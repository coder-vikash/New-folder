// Example of Promises in JavaScript to avoid callback hell
function AsyncFun1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Async Function 1 Complete");
      resolve("success");
    }, 2000);
  });
}

function AsyncFun2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Async Function 2 Complete");
      resolve("success");
    }, 4000);
  });
}

console.log("Starting Async Function 1");
let p1 = AsyncFun1();
p1.then((res) => {
  console.log("Promise 1 Resolved:", res);
  console.log("Starting Async Function 2");
  let p2 = AsyncFun2();
  p2.then((res) => {
    console.log("Promise 2 Resolved:", res);
  });
});

/*
//This is an example of callback hell in JavaScript
function getData(dataId, nextDataid) {
  setTimeout(() => {
    console.log(`Fetching data for ID: ${dataId}`);
    if (nextDataid) {
      nextDataid();
    }
  }, 2000);
}
getData(1, () => {
  getData(2, () => {
    getData(3, () => {
      getData(4);
    });
  });
});
*/
