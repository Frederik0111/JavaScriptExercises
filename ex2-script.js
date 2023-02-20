window.addEventListener("load", start);

function start() {
  console.log("start");
  document.querySelector("#blue_sprite")
    .addEventListener("click", clickBlue);
}

function clickBlue() {
  console.log("fallover");
  document.querySelector("#blue_sprite")
    .removeEventListener("click", clickBlue);
  document.querySelector("#blue_sprite")
    .classList.add("fallover");
}
