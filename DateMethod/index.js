let currDate = new Date("2025-02-25T22:02:33Z");
let userEndDate = new Date("2026-07-28T20:09:35Z");

function CalculateDate(start, end) {
  let startDate = new Date(start);
  let endDate = new Date(end);
  let diff = endDate - startDate; // in milliseconds

  diff = Math.floor(diff / 1000); // convert to seconds

  let year = Math.floor(diff / (60 * 60 * 24 * 365));
  diff = diff % (60 * 60 * 24 * 365);

  let month = Math.floor(diff / (60 * 60 * 24 * 30));
  diff = diff % (60 * 60 * 24 * 30);

  let days = Math.floor(diff / (60 * 60 * 24));
  diff = diff % (60 * 60 * 24);

  let hour = Math.floor(diff / (60 * 60));
  diff = diff % (60 * 60);

  let min = Math.floor(diff / 60);
  let sec = diff % 60;

  //   console.log(year, month, days, hour, min, sec);
  return `${year} year ${month} month ${days} days ${hour} hours ${min} minutes ${sec} sec`;
}

let diff = CalculateDate(currDate, userEndDate);
console.log(diff);
