// let person = {
//   name: "vikash kumar",
//   age: 24,
//   Gender: "Male",
//   PhoneNo: 776609878,
// };

// console.log(person);

// let car = {
//   brand: "Tata",
//   color: "black",
//   price: 12300000,
//   drived: function () {
//     console.log(
//       `This is the Derived calss ${this.brand},and Price is ${this.price} and color is ${this.color}`,
//     );
//   },
// };
// console.log(car);

// let obj = Object.keys(car);
// console.log(obj);

// let { brand, color, price } = car;
// console.log(brand, color, price);

//Destructure in object

// let obj = ["vikash,", "apple", "banana"];

// let [item1, item2, item3] = obj;
// console.log(item1, item2, item3);

// let arr = [
//   { name: "a", role: "superadmin" },
//   { name: "b", role: "user" },
//   { name: "c", role: "admin" },
//   { name: "c", role: "superadmin" },
//   { name: "c", role: "admin" },
// ];

// function filterArray(arr, role) {
//   let filterItems = arr.filter((items) => {
//     return items.role === role;
//   });

//   let resultArray = filterItems.map((items) => {
//     return items.name;
//   });
//   return resultArray;
// }
// let resultArray = filterArray(arr, "admin");
// console.log(resultArray);

// let products = [
//   { id: 1, name: "samsung" },
//   { id: 2, name: "vivo" },
//   { id: 3, name: "nokia" },
//   { id: 4, name: "realme" },
// ];

// function search(products, searchItems) {
//   let filterItems = products.filter((obj) => {
//     return obj.name.toLowerCase().includes(searchItems.toLowerCase());
//   });
//   console.log(filterItems);
// }
// search(products, "vi");

//write the function groupByPost(comments) that retruns an obj gropping comments by postId

// let comments = [
//   { postId: 1, comment: "Greate post" },
//   { postId: 2, comment: "awsam" },
//   { postId: 3, comment: "good" },
// ];

// function groupByPost(comments) {
//   let groupedComments = {};
//   comments.forEach((obj) => {
//     if (groupedComments.hasOwnProperty(obj.postId)) {
//       groupedComments[obj.postId].push(obj.comment);
//     } else {
//       groupedComments[obj.postId] = [obj.comment];
//     }
//   });
//   console.log(groupedComments);
// }
// groupByPost(comments);

//write a function buildQuery(prams) that returns

let parems = {
  search: "laptop",
  page: 2,
  sort: "price",
};

function CreateUrl(parems) {
  let url = "";

  for (let key in parems) {
    url = url + `${key}=&${parems[key]}&`;
  }
  let finalUrl = url.slice(0, url.length - 1);
  return finalUrl;
}
let url1 = CreateUrl(parems);
console.log(url1);
