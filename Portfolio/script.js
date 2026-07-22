// ======================================
// Loading Screen
// ======================================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    loader.style.opacity = "0";

    setTimeout(() => {

        loader.style.display = "none";

    }, 600);

});

// ======================================
// Typed.js
// ======================================

var typed = new Typed(".typing", {

    strings: [

        "AI Developer",
        "Python Programmer",
        "Machine Learning Enthusiast",
        "Web Developer",
        "Generative AI Student"

    ],

    typeSpeed: 70,

    backSpeed: 40,

    backDelay: 1500,

    loop: true

});

// ======================================
// AOS Animation
// ======================================

AOS.init({

    duration: 1000,

    once: true,

    offset: 100

});

// ======================================
// Scroll To Top Button
// ======================================

const scrollBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        scrollBtn.style.display = "block";

    }

    else {

        scrollBtn.style.display = "none";

    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// ======================================
// Active Navigation Link
// ======================================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ======================================
// Navbar Shadow on Scroll
// ======================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.35)";

    }

    else {

        header.style.boxShadow = "none";

    }

});

// ======================================
// Smooth Fade-in for Cards
// ======================================

const cards = document.querySelectorAll(

    ".card, .project-card, .skill"

);

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";

        }

    });

},

    {

        threshold: 0.2

    });

cards.forEach(card => {

    card.style.opacity = "0";

    card.style.transform = "translateY(40px)";

    card.style.transition = "0.7s";

    observer.observe(card);

});

// ======================================
// Contact Form
// ======================================

const form = document.querySelector(".contact-form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    alert("Thank you! Your message has been sent.");

    form.reset();

});

// ======================================
// Button Hover Animation
// ======================================

const buttons = document.querySelectorAll(".btn, .btn2");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "scale(1.05)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "scale(1)";

    });

});

// ======================================
// Console Message
// ======================================

console.log(

    "%cWelcome to Pranay Dinesh's Portfolio!",

    "color:#38bdf8;font-size:18px;font-weight:bold;"

);

console.log(

    "Developed using HTML, CSS & JavaScript"

);