let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode = "light";

modeBtn.addEventListener("click", () => {
  if (currMode === "light") {
    body.classList.add("dark");
    currMode = "dark";
    modeBtn.textContent = "Switch to Light Mode";
  } else {
    body.classList.remove("dark");
    currMode = "light";
    modeBtn.textContent = "Switch to Dark Mode";
  }
});
