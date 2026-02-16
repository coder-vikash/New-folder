let containers = document.querySelector(".containers");
//Event Deligations
containers.addEventListener("click", function (event) {
  if (event.target.classList.contains("box")) {
    console.log(event.target.textContent);
  }
});
