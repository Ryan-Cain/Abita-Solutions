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
const phoneBackground = document.getElementById("white-back-phone");
const colorOverlay = document.querySelector(".color-overlay");
const serviceLinkContainer 

window.onscroll = function () {
  checkScrollPosition();
  closeNavbar();
  // console.log(window.scrollY);
  // console.log(window.innerHeight * 0.15);
  // console.log(window.innerHeight - window.scrollY);
  if (window.innerHeight * 0.28 > window.innerHeight - window.scrollY) {
    phoneBackground.classList.add("active");
    phoneNum.classList.add("active");
    // phoneNum.style.fontSize = "26px";
  } else {
    phoneBackground.classList.remove("active");
    phoneNum.classList.remove("active");
    // phoneNum.style.backgroundColor = "white";
  }
  console.log(window.scrollY, document.body.scrollHeight / 2);
  if (window.scrollY > document.body.scrollHeight / 2) {
    colorOverlay.classList.add("active");
  } else {
    colorOverlay.classList.remove("active");
  }
};
function checkScrollPosition() {
  if (screen.width < 500) {
    return;
  } else {
    if (window.scrollY <= 500) {
      phoneNum.style.left = "55vw";
      // phoneNum.classList.add("active1");
    } else if (window.scrollY >= 501 && window.scrollY <= 625) {
      // phoneNum.classList.remove("active3");
      // phoneNum.classList.add("active2");
      phoneNum.style.left = "25vw";
      phoneNum.style.fontSize = "56px";
      phoneNum.style.marginTop = "0px";
    } else if (window.scrollY >= 625) {
      // phoneNum.classList.remove("active2");
      // phoneNum.classList.add("active3");
      phoneNum.style.left = "25vw";
      phoneNum.style.fontSize = "36px";
      phoneNum.style.marginTop = "8px";
      if (window.screen.width < 1400) {
        phoneNum.style.fontSize = "30px";
        phoneNum.style.marginTop = "0px";
      }
    }
  }
}

// intersection observer

const observerElements = document.querySelectorAll("#about-us");

// Open pic modal
function openPicModal() {
  if (screen.width < 500) {
    return;
  } else {
    const body = document.querySelector("body");
    body.classList.add("stop-scroll");

    const modalInsert = document.querySelector("#insert-box");
    modalInsert.innerHTML = `
  <div id="image-modal-container" >
  
  <div id="image-modal">
  <p onclick="closePicModal()">X</p>
        <img src="./img/real-pics/bfp-certificate.jpg" alt="" />
        </div>
      
        </div>
        `;
  }
}

function closePicModal() {
  const modalInsert = document.querySelector("#insert-box");
  modalInsert.innerHTML = ``;
  const body = document.querySelector("body");
  body.classList.remove("stop-scroll");
}

// phone number
// let formPhoneNum = document.querySelector("#phone");
// formPhoneNum.addEventListener("input", phoneNumber);

// function phoneNumber(elem) {
//   let number = elem.target.value;
//   console.log(number);
//   console.log(elem);
//   elem.target.value = number + "l";
// }

window.screen.orientation
  .lock("portrait")
  .then(() => {
    console.log("good");
  })
  .catch((error) => {
    console.log(error);
  });
