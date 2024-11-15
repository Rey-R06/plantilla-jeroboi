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