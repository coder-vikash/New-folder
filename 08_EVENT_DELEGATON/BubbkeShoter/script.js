// let numberOfcircle = 70;
// let numbercontainer = document.querySelector(".numbercontainer");
// let targetValue = document.querySelector(".targetValue");

// let timerValue = document.querySelector(".timerValue");
// let timer = 60; // start at 60 seconds

// timerValue.innerText = timer; // show initial value

// let countdown = setInterval(() => {
//   if (timer <= 0) {
//     clearInterval(countdown); // stop when it reaches 0
//     return;
//   }
//   timer--;
//   timerValue.innerText = timer;
// }, 1000);

// for (let i = 0; i < 91; i++) {
//   let divEle = document.createElement("div");
//   divEle.className = "circle";
//   let number = Math.ceil(Math.random() * 10);
//   divEle.innerText = number;

//   numbercontainer.append(divEle);
// }

// // function targets() {
// //   let number = Math.ceil(Math.random() * 10);
// //   console.log(number);
// // }
// // targets();

// // numbercontainer.addEventListener("click", function (e) {
// //   if (e.target.classList.contains("circle")) {
// //     // console.log(e.target.innerText);
// //     let target = e.target.innerText;
// //     targetValue.innerText = targets();
// //   }
// // });

// function targets() {
//   let number = Math.ceil(Math.random() * 10);
//   console.log(number);
//   return number; // ✅ return the number
// }

// targets();

// numbercontainer.addEventListener("click", function (e) {
//   if (e.target.classList.contains("circle")) {
//     let target = e.target.innerText;
//     targetValue.innerText = targets(); // now this will show the number
//   }
// });

let numberContainer = document.querySelector(".numberContainer");
let timerValue = document.querySelector(".timerValue");
let targetValue = document.querySelector(".targetValue");
let scoreValue = document.querySelector(".scoreValue");
let numberOfCircles = 85;
let timer = 5;
let target;

restartGame();
startTimer();

function restartGame() {
  timerReset();
  generateTarget();
  generateNumbers();
  scoreValue.innerText = 0;
}

function timerReset() {
  timerValue.innerText = timer;
  timer = 10;
}

function startTimer() {
  setInterval(() => {
    if (timer <= 0) {
      numberContainer.innerHTML = `
                <div>Game Over 
                <button onclick=restartGame()>Reset Game</button>
                </div>
                `;
      return;
    }
    timer--;
    timerValue.innerText = timer;
  }, 1000);
}

function generateTarget() {
  target = Math.ceil(Math.random() * 10);
  targetValue.innerText = target;
}

function generateNumbers() {
  numberContainer.innerHTML = "";
  for (let i = 1; i <= numberOfCircles; i++) {
    let divElem = document.createElement("div");
    divElem.className = "circle";
    let number = Math.ceil(Math.random() * 10);
    divElem.innerText = number;

    numberContainer.append(divElem);
  }
}

numberContainer.addEventListener("click", function (event) {
  if (event.target.className === "circle") {
    let number = Number(event.target.innerText);
    if (target === number) {
      let sv = Number(scoreValue.innerText);
      sv += 10;
      scoreValue.innerText = sv;
    }
    generateTarget();
  }
});
