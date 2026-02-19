let btn = document.querySelector("button");
let inputText = document.querySelector("#password");

btn.addEventListener("click", () => {
  inputText.type = inputText.type === "password" ? "text" : "password";
});
