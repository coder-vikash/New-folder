let currDate = new Date("2026-02-25");

let userDate = new Date("2026-03-28");

let diffDate = userDate - currDate;

let result = Math.floor(diffDate / 1000 / 60 / 60 / 24);

if (result > 30) {
  console.log(
    "aap to late ho gye form baarne ka date khatam ho gya hai.......",
  );
} else {
  console.log("conguratration aap form bhar sakete hai ......");
}
