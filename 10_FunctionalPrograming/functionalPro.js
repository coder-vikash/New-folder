// impretive programing

// let arr = [1, 2, 3, 4, 5, 6];
// let double = [];

// for (let i = 0; i < arr.length; i++) {
//   double.push(arr[i] * 2);
// }
// console.log(double);
//Declerative Programing

// let arr = [1, 2, 3, 4, 5, 6];

// let double = arr.map((ele) => {
//   return ele * 2;
// });
// console.log(double);

//*******pure Function */

// function sum(a, b) {
//   return a + b;
// }
// let result = sum(4, 5);
// console.log(result);

//*****Functional Programming */

// let Obj = {
//   age: 23,
//   Name: "Vikash",
// };

// function replaceName(Name) {
//   let newObj = { ...Obj, Name };
//   return newObj;
// }
// console.log(Obj);
// let replacedName = replaceName("Manish Kumar");
// console.log(replacedName);

//********Another Example */
// const list = ["Aalu", "began", "govi,"];

// function addItems(Items) {
//   const newItems = [...list, Items];
//   return newItems;
// }
// console.log(list);
// let ItemsList = addItems("onion");
// console.log(ItemsList);

//********* */

// const list = ["Aalu", "began", "govi,"];

// function removeLastItems(Items) {
//   let NewItems = list.slice(0, -1);
//   return NewItems;
// }

// let ans = removeLastItems("");
// console.log(ans);

//****UserNmae Generator */

// let name = "Vikash kumar";

// function CreateUserName(str) {
//   console.log("@" + str.toLowerCase().replaceAll(" ", ""));
// }
// CreateUserName(name);

//**Reuse and compose Functions */

let str = "Vikash kumar";

let AddAtTheRate = (str) => {
  return "@" + str;
};

let removeSpace = (str) => {
  return str.replaceAll(" ", "");
};

let toLowerCase = (str) => {
  return str.toLowerCase();
};

function CreateUserName(str) {
  return AddAtTheRate(removeSpace(toLowerCase(str)));
}

let username = CreateUserName(str);
console.log(username);
