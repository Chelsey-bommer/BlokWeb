
/* Variabele aanmaken */
var Button = document.querySelector("img")

Button.addEventListener("click", Menu);

function Menu () {
    var MenuLijst = document.querySelector("nav ul");
    MenuLijst.classList.toggle("MenuAdd");
}