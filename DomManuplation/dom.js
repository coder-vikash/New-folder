let h1 = document.querySelector("h1");

// h1.innerText = "hellow vikash";
/*
let p = document.querySelector("p");
let btn = document.querySelector("button");
let offbtn = document.querySelector(".offbtn");

btn.addEventListener("click", () => {
  p.style.background = "orange";

  p.innerText = "this is yellow color";
  p.style.color = "white";
});

offbtn.addEventListener("click", () => {
  p.style.background = "black";
  p.style.color = "white";
});
*/

let div = document.querySelector("div");
let p = document.querySelector("p");

//Add a new element inside the div which the help of append keyword
let ele = document.createElement("p");
ele.innerHTML = "This is the new Peragraph";

div.append(ele);

div.after(ele);

div.before(ele);
