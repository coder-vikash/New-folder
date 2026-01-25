let person = {
  name: "vikash kumar",
  age: 24,
  Gender: "Male",
  PhoneNo: 776609878,
};

console.log(person);

let car = {
  brand: "Tata",
  color: "black",
  price: 12300000,
  drived: function () {
    console.log(
      `This is the Derived calss ${this.brand},and Price is ${this.price} and color is ${this.color}`,
    );
  },
};
console.log(car);
