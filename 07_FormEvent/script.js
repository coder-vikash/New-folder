let form = document.querySelector("#form");
let UserName = document.querySelector("#name");
let UserEmail = document.querySelector("#email");
let output = document.querySelector("#output");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log(UserName.value, UserEmail.value);

  if (!UserName.value.trim() || !UserEmail.value.trim()) {
    alert("Please enter all details");
    return;
  }
  let body = document.querySelector("body");

  let div = document.createElement("div");

  div.innerHTML = `
    <p>username:  ${UserName.value}</p>
    <p>Email : ${UserEmail.value}</p>
  `;

  body.append(div);
});
