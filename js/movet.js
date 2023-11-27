// Escuchar el evento de desplazamiento
window.addEventListener("scroll", function () {
    // Obtener la posición actual de desplazamiento vertical
    let scrollPosition = window.scrollY;

    // Calcular el ancho de la barra blanca
    let barWidth = scrollPosition > 0 ? "10px" : "0";

    // Aplicar el ancho calculado a la barra blanca
    document.querySelector(".white-bar").style.width = barWidth;
});
