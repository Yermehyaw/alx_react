/* index.html scripts */


// Notice for interactive calculator ongoing build
const button = document.querySelector("button");
button.addEventListener("click", () => {
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
