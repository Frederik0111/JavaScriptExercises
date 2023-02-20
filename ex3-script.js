window.addEventListener("load", start);

function start() {
    console.log("start");
    document.querySelector("#orange_container")
        .classList.add("move");
    document.querySelector("#orange_container")
        .addEventListener("click", clickOrange);
}

function clickOrange() {
  console.log("pause");
    document.querySelector("#orange_container")
        .classList.remove("move");
    document.querySelector("#orange_sprite",)
        .classList.add("jump");     
}

