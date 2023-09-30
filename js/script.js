// Mobile navbar toggle button

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

// Phone number movement on main splash screen

const phoneNum = document.getElementById("services-phone");
const phoneBackground = document.getElementById("white-back-phone");
const colorOverlay = document.querySelector(".color-overlay");

window.onscroll = function () {
	checkScrollPosition();
	closeNavbar();
	// adds white background on mobile behind phone number when at top of screen
	if (window.innerHeight * 0.28 > window.innerHeight - window.scrollY) {
		phoneBackground.classList.add("active");
		phoneNum.classList.add("active");
	} else {
		phoneBackground.classList.remove("active");
		phoneNum.classList.remove("active");
	}

	// this makes the blue video overlay be 100% opacity to hide
	// the video at the bottom of the page on mobile for when people
	// scroll to quickly
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
		} else if (window.scrollY >= 501 && window.scrollY <= 625) {
			phoneNum.style.left = "25vw";
			phoneNum.style.fontSize = "48px";
			phoneNum.style.marginTop = "0px";
		} else if (window.scrollY >= 625) {
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

// Functions for the picture modal, creates then removes the modal element
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

// here tried to lock screen to be portrait mode only for mobile but
// it didnt work

// window.screen.orientation
//   .lock("portrait")
//   .then(() => {
//     console.log("good");
//   })
//   .catch((error) => {
//     console.log(error);
//   });
