// let string = "          Hello World          ";

// let vowelCount = 0;
// let consonantCount = 0;
// let specialCharCount = 0;

// for (let str of string) {
//   let char = str.toLowerCase();
//   if (char >= "a" && char <= "z") {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       vowelCount++;
//     } else if (str === "") {
//       console.log("space is not countable");
//     } else {
//       consonantCount++;
//     }
//   }
// }
// console.log("Number of vowels: " + vowelCount);
// console.log("Number of consonants: " + consonantCount);

//question no 1
// let sum = 0;
// console.log("enter the number and get the sum of total numbers");
// let number = prompt("Enter a number: ");

// for (let i = 1; i <= number; i++) {
//   sum += i;
// }
// console.log("Sum of first " + number + " natural numbers: " + sum);

//question no 2
// let m = Number(prompt("Enter a starting  number: "));
// let n = Number(prompt("Enter an ending number: "));
// let sum = 0;

// for (let i = m; i <= n; i++) {
//   sum += i;
// }
// console.log(" total sum = ", sum);

//question no 3 knox games
// let randomNum = Math.floor(Math.random() * 10) + 1;
// let n;

// while (true) {
//   n = Number(prompt("Guess a number between 1 and 10"));

//   if (isNaN(n)) {
//     alert("Please enter a valid number");
//   } else if (n < randomNum) {
//     prompt("Your number is smaller than the random number");
//   } else if (n > randomNum) {
//     prompt("Your number is greater than the random number");
//   } else {
//     prompt("🎉 Congratulations! You guessed the correct number: " + randomNum);
//     break;
//   }
// }

//question no 4 password matching

// let password = "vikash";
// let noOfAttempts = 3;

// while (noOfAttempts > 0) {
//   let userInput = prompt("Enter your password:");

//   if (userInput === password) {
//     alert("Login successful!");
//     break;
//   } else {
//     noOfAttempts--;
//     alert("Incorrect password. You have " + noOfAttempts + " attempts left.");
//   }
// }

//question 5 functions

// function captializeFirstLetter(str) {
//   console.log(str.charAt(0).toUpperCase() + str.slice(1));
// }
// captializeFirstLetter("hello world");
