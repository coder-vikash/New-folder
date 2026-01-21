class User {
  constructor(name, age, Email) {
    this.name = name;
    this.age = age;
    this.Email = Email;
  }
  ViewData() {
    console.log(`Name: ${this.name}, Age: ${this.age}, Email: ${this.Email}`);
  }
}

class Adimn extends User {
  constructor(name, age, Email, role) {
    super(name, age, Email);
    this.role = role;
  }
}

let user1 = new User("Alice", 30, "alice@example.com");
let user2 = new User("Bob", 25, "bob@example.com");
let user3 = new User("Charlie", 35, "charlie@example.com");
user1.ViewData();
user2.ViewData();
user3.ViewData();

let admin1 = new Adimn("Dave", 40, "dave@example.com", "Super Admin");
admin1.ViewData();
console.log(`Role: ${admin1.role}`);
