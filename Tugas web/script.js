
// Aktifkan link navbar 
const sections = document.querySelectorAll("section, header");
const navLinks = document.querySelectorAll("nav ul li a")
window.addEventListener("scroll", () => {
let current = "";
sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    if (pageYOffset >= sectionTop) {
    current = section.getAttribute("id");
    }
});
navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
    link.classList.add("active");
    }
});
});

// Popup sambutan
const popup = document.getElementById("welcomePopup");
window.onload = () => {
popup.classList.add("active");
};
function closePopup() {
popup.classList.remove("active");
}