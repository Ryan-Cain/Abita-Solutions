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

const phoneNum = document.getElementById("services-phone");

window.onscroll = function () {
  checkScrollPosition();
  console.log(window.scrollY);
};
function checkScrollPosition() {
  // console.log(window.scrollY);
  if (window.scrollY <= 500) {
    phoneNum.style.left = "55vw";
  } else if (window.scrollY >= 501 && window.scrollY <= 625) {
    phoneNum.style.left = "25vw";
    phoneNum.style.fontSize = "56px";
    phoneNum.style.marginTop = "0px";
  } else if (window.scrollY >= 625) {
    phoneNum.style.left = "25vw";
    phoneNum.style.fontSize = "36px";
    phoneNum.style.marginTop = "8px";
  }
}

// intersection observer

const observerElement = document.querySelector("#observer");

const options = {
  root: document.body,
  rootMargin: "0px",
  threshold: 0,
};

function callback(entries, observer) {
  console.log(observer);
  console.log(entries[0].intersecting);
}

let observer = new IntersectionObserver(callback, options);
observer.observe(observerElement);
