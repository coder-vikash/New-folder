// let str = "Hello, World!";
// console.log(`   Original String: ${str}   `);

//Question no 1 create a username by removing spaces from a string

// createUsername = (str) => {
//   let user = prompt("Enter your username:");
//   return "@" + user + "_" + user.length;
// };
// console.log(createUsername(""));
// prompt(createUsername());

//Question no 2 chat how many times a character appears in a string

// let str = prompt("Enter a string:");
// let ch = prompt("Enter a character to count its occurrences:");

// let count = 0;
// for (let val of str) {
//   if (val.toLocaleLowerCase() === ch.toLocaleLowerCase()) {
//     count++;
//   }
// }
// prompt(`The character '${ch}' appears ${count} times in the string.`);

//Question no 3 find the accurance of word in a string

// let string = prompt("Enter a string:");
// let word = prompt("Enter a word to count its occurrences:");

// let counter = 0;
// for (let index in string) {
//   if (string[index].toLowerCase() === word.toLowerCase()) {
//     console.log("Possitions of occurance of number = ", index);
//     counter++;
//   }
// }
// console.log("total count", counter);
//prompt(`The word '${word}' appears ${counter} times in the string.`);

//map functions

// let arr = [1, 2, 3, 4, 5, 6, 10, 12, 15];
// arr.map((ele, idex) => {
//   console.log(ele, idex);
// });

//filter functions

// let arr = [2, 3, 5, 7, 8, 9, 0, 12, 35, 56];

// let filterArray = arr.filter((ele, idx) => {
//   return ele % 2 === 0;
// });
// console.log(filterArray);

// Reduce Method in array

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let newReduceArray = arr.reduce((prevVal, currVal) => {
  return prevVal + currVal;
});
console.log(newReduceArray);
