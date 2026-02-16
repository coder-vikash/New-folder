let btn = document.querySelector(".btn");
let modelcontainer = document.querySelector(".modelcontainers"); // corrected class name
let closebtn = document.querySelector(".closemodel");

btn.addEventListener("click", function () {
  console.log("first");
  modelcontainer.style.display = "flex"; // show modal
});
closebtn.addEventListener("click", function () {
  console.log("btn was close");
  modelcontainer.style.display = "none";
});

modelcontainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("modelcontainers")) {
    modelcontainer.style.display = "none";
  }
});
