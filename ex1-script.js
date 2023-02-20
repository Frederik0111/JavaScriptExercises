window.addEventListener("load", start);

function start() {
  console.log("start");
  document.querySelector("#orange_sprite")
    .addEventListener("click", clickOrange);
}

function clickOrange() {
  console.log("jump");
  document.querySelector("#orange_sprite")
    .removeEventListener("click", clickOrange);
  document.querySelector("#orange_sprite")
    .classList.add("jump");
}
