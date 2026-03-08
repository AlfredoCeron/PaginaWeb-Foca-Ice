const botonNavbar = document.querySelector(".botonNavBarPhone");
const headerDer = document.querySelector(".headerDer");

if (botonNavbar && headerDer) {
  botonNavbar.addEventListener("click", () => {
    headerDer.classList.toggle("active");
    botonNavbar.classList.toggle(
      "active",
      headerDer.classList.contains("active"),
    );
  });

  //Cerrar menú navegacion al hacer clic fuera de él
  // Youtube: @cristianbernaldev - MenuDesplegableConHTMLcssJSmenos1Minutos
  document.addEventListener("click", (event) => {
    const clickDentroMenu = headerDer.contains(event.target);
    const clickEnBoton = botonNavbar.contains(event.target);
    // Si el clic no es dentro del menú ni en el botón, cerrar el menú
    if (!clickDentroMenu && !clickEnBoton) {
      headerDer.classList.remove("active");
      botonNavbar.classList.remove("active"); // boton vuelva a estado original (lineas H)
    }
  });
}
