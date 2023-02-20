window.addEventListener("load", start);

function start() {
  console.log("start");
  document
    .querySelector("#orange_container")
    .addEventListener("click", clickOrange);
}

function clickOrange() {
    console.log("jump-once");
    document.querySelector("#orange_sprite")
        .classList.add("jump-once");
}

// mangler løsning til en reset