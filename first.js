const Url = "https://api.thecatapi.com/v1/images/search?limit=10";
let outputDiv = document.querySelector("#output");

let btn = document.querySelector("#btn");

const getApi = async () => {
  try {
    outputDiv.innerHTML = "Loading...";
    let respon = await fetch(Url);
    let data = await respon.json();
    outputDiv.innerHTML = "";

    data.forEach((cat) => {
      let card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <img src="${cat.url}" alt="Cat Image" style="width:100%">
      `;
      outputDiv.appendChild(card);
    });
  } catch (error) {
    outputDiv.innerHTML = "An error occurred while fetching data.";
    console.error("Error fetching data:", error);
  }
};

btn.addEventListener("click", getApi);

/* Example of Promises in JavaScript to avoid callback hell
function AsyncFun1(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Async Function 1 Complete", dataId);
      resolve("success");
    }, 2000);
  });
}

// Using async/await to call the asynchronous function sequentially
async function getAllData() {
  console.log("Getting data for params:");
  await AsyncFun1(1);
  await AsyncFun1(2);
  await AsyncFun1(3);
  await AsyncFun1(4);
  console.log("All async functions complete");
}

/* Second asynchronous function
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

*/

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
