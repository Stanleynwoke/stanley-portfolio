// ==================================
// MOBILE NAVIGATION
// ==================================

const navLinks = document.querySelectorAll(".nav-link");

const navbarMenu = document.querySelector("#navbarMenu");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        // Close the mobile menu after clicking a link
        if (navbarMenu.classList.contains("show")) {

            const bootstrapMenu = bootstrap.Collapse.getInstance(navbarMenu);

            if (bootstrapMenu) {
                bootstrapMenu.hide();
            }

        }

    });

});


// ==================================
// NAVBAR SCROLL EFFECT
// ==================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {

        navbar.style.boxShadow = "0 5px 25px rgba(0, 0, 0, 0.3)";

    } else {

        navbar.style.boxShadow = "none";

    }

});


// ==================================
// SCROLL REVEAL ANIMATION
// ==================================

const revealElements = document.querySelectorAll(
    ".section-heading, .about-description, .skill-card, .project-card"
);

const revealObserver = new IntersectionObserver(function (entries) {

    entries.forEach(function (entry) {

        if (entry.isIntersecting) {

            entry.target.classList.add("reveal-visible");

            revealObserver.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.15
});

revealElements.forEach(function (element) {

    element.classList.add("reveal");

    revealObserver.observe(element);

});