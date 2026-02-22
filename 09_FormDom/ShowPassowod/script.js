let btn = document.querySelector("button");
let inputText = document.querySelector("#password");

btn.addEventListener("click", () => {
  let passwordType = inputText.type;
  inputText.type = passwordType === "password" ? "text" : "password";
  btn.innerText = passwordType === "password" ? "Hide" : "Show";
});
