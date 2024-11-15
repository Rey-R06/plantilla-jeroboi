function despliegueMenu() {
    const menuD = document.querySelector(".menu-icon");
    const menu = document.querySelector(".menu");

    menuD.addEventListener("click", () => {
        if (menu.style.visibility === "visible") {
            menu.style.visibility = "hidden";
            menu.style.opacity = 0;
        } else {
            menu.style.visibility = "visible";
            menu.style.opacity = 1;
        }
    });
}
// Llamar a la función al cargar la página
document.addEventListener("DOMContentLoaded", despliegueMenu);

function cambioImg() {
    const imagen = document.getElementById("imagen");

    // Cambia la imagen si el ancho de la ventana es menor a 700px
    if (window.innerWidth < 700) {
        imagen.src = "assets/img/fondo-bici-celular.png"; // Imagen para pantallas pequeñas
    } else {
        imagen.src = "assets/img/fondo-bici.png"; // Imagen para pantallas grandes
    }
}

// Ejecuta la función al cargar la página y cada vez que se redimensiona la ventana
window.addEventListener("load", cambioImg);
window.addEventListener("resize", cambioImg);
