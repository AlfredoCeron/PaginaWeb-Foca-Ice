const botonNavbar = document.querySelector(".botonNavBarPhone");
const headerDer = document.querySelector(".headerDer");

botonNavbar.addEventListener("click", () => {
  headerDer.classList.toggle("active");
});
