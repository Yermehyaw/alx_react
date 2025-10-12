/* index.html scripts */


// Notice for interactive calculator ongoing build
const ctaButton = document.querySelector(".call-to-action");
ctaButton.addEventListener("click", () => {
    alert("We're Sorry, the Calculator is still being built. Please check back later...");
    });

// Switch calculator image by user clicks
const calcImg = document.querySelector("img");
calcImg.onclick = () => {
    var imgSrc = calcImg.getAttribute("src");
    if (imgSrc === "./assets/images/modern-calculator-3d.jpg" || imgSrc === "assets/images/modern-calculator-3d.jpg") {
	calcImg.setAttribute("src", "./assets/images/3d-calculator.jpg");
    } else {
	calcImg.setAttribute("src", "./assets/images/modern-calculator-3d.jpg");
    }
};


// Add user specific welcome message
let nameButton = document.querySelector("header>button");
let heading = document.querySelector("h1");

function setUserName() {
    const userName = prompt("Please enter your name");
    // Should in case the user cancels the prompt
    if (!userName) {
	heading.textContent = "Calculator Pro is for You!";
	return;
    }
    localStorage.setItem("name", userName);
    heading.textContent = `Calculator Pro is for You, ${userName}`;
    return;
}

if (!localStorage.getItem("name")) {  // The user's name hasn't been stored?
    setUserName();
} else {  // Prevent constant user name prompting when page is refreshed
    const storedName = localStorage.getItem("name");
    heading.textContent = `Calculator Pro is for You, ${storedName}`;
}

nameButton.onclick = () => {
    setUserName();
};
