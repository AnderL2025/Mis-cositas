document.addEventListener("DOMContentLoaded", function () {
    const mensaje = document.querySelector(".mensaje");
    const texto = mensaje.textContent;
    mensaje.textContent = ""; // Limpiar el mensaje original
    let i = 0;

    function escribirTexto() {
        if (i < texto.length) {
            mensaje.textContent += texto.charAt(i);
            i++;
            setTimeout(escribirTexto, 100); // Ajusta la velocidad aquí (100ms por letra)
        }
    }

    escribirTexto();
});
