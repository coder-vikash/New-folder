let nameInput = document.querySelector("#name");
let emailInput = document.querySelector("#email");
let nameValues = document.querySelector(".nameValue");
let emailValues = document.querySelector(".emailValue");
let password = document.querySelector("#password");
let nameError = document.querySelector(".nameError");
let emailError = document.querySelector(".emailError");
let passwordError = document.querySelector(".passwordError");

nameInput.addEventListener("input", (e) => {
  let name = e.target.value;
  if (name.length < 3) {
    nameError.innerHTML = "Name Must be Atlest 3 digit";
  } else {
    nameError.innerHTML = "";
  }
});
emailInput.addEventListener("input", (e) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let email = e.target.value;

  if (!emailPattern.test(email)) {
    emailError.innerHTML = "Please Enter Valid Email";
  } else {
    emailError.innerHTML = "";
  }
});

password.addEventListener("input", (e) => {
  let password = e.target.value;
  if (password.length < 6) {
    passwordError.innerHTML = "Please Enter 6 Digit Passoword";
  } else {
    passwordError.innerHTML = "";
  }
});
