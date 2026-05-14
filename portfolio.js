// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href'))
            .scrollIntoView({ behavior: 'smooth' });
    });
});

// Scroll animation
const sections = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
    sections.forEach(sec => {
        if (sec.getBoundingClientRect().top < window.innerHeight - 100) {
            sec.classList.add("show");
        }
    });
});

// Mobile menu
const toggle = document.getElementById("menu-toggle");
const links = document.getElementById("nav-links");
toggle.onclick = () => links.classList.toggle("show");

// Dark mode
document.getElementById("darkBtn").onclick = () => {
    document.body.classList.toggle("dark");
}; 