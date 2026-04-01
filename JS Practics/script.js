let Obj = [
  {
    name: "vikash kumar",
    age: 34,
    PhoneNO: 9999988899,
    Branch: "CSE",
  },
  {
    name: "mukesh kumar",
    age: 45,
    PhoneNO: 998084958,
    Branch: "ECE",
  },
  {
    name: "vikram kumar",
    age: 24,
    PhoneNO: 7033714456,
    Branch: "CSE",
  },
  {
    name: "nitish kumar",
    age: 44,
    PhoneNO: 1234567889,
    Branch: "AI",
  },
  {
    name: "manish kumar",
    age: 34,
    PhoneNO: 7033718548,
    Branch: "CSE",
  },
];

let results = Obj.map((obj) => {
  return obj;
});
console.log(results);

// let { name, age, Branch, PhoneNO } = Obj;
// function getAllNO() {
//   return `${name}, ${age},${Branch},${PhoneNO}`;
// }

// let result = getAllNO();
// console.log(result);
