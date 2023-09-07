const tgbutton = document.getElementById("click");
const navLinks = document.getElementById("navigation");

tgbutton.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
