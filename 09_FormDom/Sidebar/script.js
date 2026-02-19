let button = document.querySelector("button");
let sidebar = document.querySelector(".showsidebar");

button.addEventListener("click", () => {
  sidebar.classList.toggle("showsidebar");
});
