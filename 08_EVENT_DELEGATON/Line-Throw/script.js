let containers = document.querySelector(".containers");

containers.addEventListener("click", function (e) {
  if (e.target.classList.contains("listItems")) {
    e.target.style.textDecoration = "line-through";
  }
});
