
let boton = document.querySelector(".saludar");
let saludar = document.querySelector(".hello");

boton.addEventListener("click", () => {
    saludar.innerHTML = "Hola, como esta?";
});


