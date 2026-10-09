document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact_form");
    //   form.reset();

    // Constantes para los elementos del formulario
    const nameInput = document.getElementById("name");
    const surname1Input = document.getElementById("surname1");
    const surname2Input = document.getElementById("surname2");
    const phoneInput = document.getElementById("phone");
    const errorMessage = document.querySelector(".error-message");

    //Validación formulario
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Formulario enviado correctamente");
    });

});

async function init() {
    await google.maps.importLibrary('maps');

    const mapElement = document.querySelector('gmp-map');
    const innerMap = mapElement.innerMap;

    console.log({ mapElement, innerMap });
}

const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

void init();