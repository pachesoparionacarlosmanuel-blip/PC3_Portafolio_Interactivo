
document.addEventListener("DOMContentLoaded", function () {

    // =====================================
    // 1. FORMULARIO DE CONTACTO
    // =====================================

    const formulario = document.getElementById("formContacto");
    const respuesta = document.getElementById("respuestaFormulario");

    formulario.addEventListener("submit", function (event) {

        // Evita que la página se recargue
        event.preventDefault();

        // Obtiene los datos del formulario
        const nombre = document.getElementById("nombre").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();

        // Validación básica
        if (!nombre || !email || !mensaje) {
            respuesta.textContent = "Completa todos los campos.";
            respuesta.className = "mt-3 text-danger";
            return;
        }

        // Respuesta de demostración
        respuesta.textContent =
            "¡Gracias, " + nombre + "! Tu formulario se validó correctamente.";

        respuesta.className = "mt-3 text-success fw-bold";

        // Los datos no se envían a un servidor
        console.log("Formulario de demostración:", {
            nombre: nombre,
            email: email,
            mensaje: mensaje
        });
    });


    // =====================================
    // 2. BOTÓN LIMPIAR
    // =====================================

    formulario.addEventListener("reset", function () {

        respuesta.textContent = "";
        respuesta.className = "mt-3";
    });


    // =====================================
    // 3. MENÚ RESPONSIVO
    // =====================================

    const enlacesMenu = document.querySelectorAll(
        "#menuPrincipal .nav-link"
    );

    const menu = document.getElementById("menuPrincipal");

    enlacesMenu.forEach(function (enlace) {

        enlace.addEventListener("click", function () {

            // Cierra el menú cuando se selecciona una opción
            if (
                window.innerWidth < 992 &&
                menu.classList.contains("show")
            ) {
                const instancia =
                    bootstrap.Collapse.getOrCreateInstance(menu);

                instancia.hide();
            }
        });
    });

    console.log("Portafolio Interactivo iniciado correctamente.");
});
