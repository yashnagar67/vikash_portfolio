const testimonialCards = Array.from(document.getElementsByClassName("testminals_card"));
let currentTestimonialIndex = 0;

function showTestimonial(index) {
    testimonialCards.forEach((card, cardIndex) => {
        card.classList.toggle("hidden", cardIndex !== index);
    });
}

function nextTestimonial() {
    currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonialCards.length;
    showTestimonial(currentTestimonialIndex);
}

function previousTestimonial() {
    currentTestimonialIndex = (currentTestimonialIndex - 1 + testimonialCards.length) % testimonialCards.length;
    showTestimonial(currentTestimonialIndex);
}

const prevArrow = document.querySelector(".leftarrow");
const nextArrow = document.querySelector(".rightarrow");

if (prevArrow && nextArrow && testimonialCards.length) {
    showTestimonial(currentTestimonialIndex);
    nextArrow.addEventListener("click", nextTestimonial);
    prevArrow.addEventListener("click", previousTestimonial);
}

const hamburger = document.querySelector(".hamburger");
const navItems = document.querySelector(".navitems");
const navOverlay = document.querySelector(".nav-overlay");

function toggleNavigation() {
    const isOpen = navItems.classList.toggle("open");
    hamburger.setAttribute("aria-expanded", isOpen);
    navOverlay.classList.toggle("active", isOpen);
    document.body.style.overflow = isOpen ? "hidden" : "";
}

if (hamburger && navItems && navOverlay) {
    hamburger.addEventListener("click", toggleNavigation);
    navOverlay.addEventListener("click", toggleNavigation);
    navItems.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            if (navItems.classList.contains("open")) {
                toggleNavigation();
            }
        });
    });
}