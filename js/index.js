const toggleButtons = document.getElementsByClassName("navbar-toggle-btn");
const mainToggleButton = document.getElementById("nav-toggle");
const navbarLinks = document.getElementById("tab-links");

for (let i = 0; i < toggleButtons.length; i++) {
  toggleButtons[i].addEventListener("click", () => {
    navbarLinks.classList.toggle("active");
    mainToggleButton.classList.toggle("active");
  });
}

function closeNavbar() {
  if (navbarLinks.classList.contains("active")) {
    navbarLinks.classList.toggle("active");
    mainToggleButton.classList.toggle("active");
  }
}
