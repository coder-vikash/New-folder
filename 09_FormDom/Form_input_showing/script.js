let nameValue = document.querySelector("#name");
let email = document.querySelector("#email");
let nameValues = document.querySelector(".nameValue");
let emailValues = document.querySelector(".emailValue");

nameValue.addEventListener("input", () => {
  let inputValue = nameValue.value;
  nameValues.innerHTML = inputValue;
});

email.addEventListener("input", () => {
  let emailValue = email.value;
  emailValues.innerHTML = emailValue;
});
