// JavaScript Document

var menu = document.querySelector("header nav section");
var menuButton = document.querySelector("button");

function menuOpenen(){
    console.log("test")
    menu.classList.add("menuOpen");
}

menuButton.addEventListener("click", menuOpenen)

var sluitButton = document.querySelector("nav section button");

// stap 2 - laat die button luisteren naar kliks
sluitButton.addEventListener("click", sluitMenu);

// stap 3 - in de functie verwijder de class van de nav
function sluitMenu() {
  var deNav = document.querySelector("nav section");
  deNav.classList.remove("menuOpen");
}