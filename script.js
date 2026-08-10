```javascript
// ===============================
// MOBILE MENU
// ===============================

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {

    navbar.classList.toggle("active");

});


// ===============================
// CLOSE MENU AFTER CLICK
// ===============================

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

    });

});


// ===============================
// FOOTER YEAR
// ===============================

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();


// ===============================
// SMOOTH SCROLL
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (event) {

        event.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// ===============================
// SCROLL REVEAL ANIMATION
// ===============================

const animatedElements = document.querySelectorAll(
    ".skill-card, .project-card, .timeline-item, .about-text, .stats"
);

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },

    {
        threshold: 0.15
    }

);


animatedElements.forEach(element => {

    observer.observe(element);

});


// ===============================
// ACTIVE NAVIGATION
// ===============================

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + current
        ) {

            link.classList.add("active");

        }

    });

});


// ===============================
// TYPING TERMINAL EFFECT
// ===============================

const terminalText = document.querySelector(
    ".terminal-purple"
);

if (terminalText) {

    const originalText = terminalText.textContent;

    terminalText.textContent = "";

    let index = 0;

    function typeText() {

        if (index < originalText.length) {

            terminalText.textContent +=
                originalText.charAt(index);

            index++;

            setTimeout(typeText, 35);

        }

    }

    setTimeout(typeText, 800);

}


// ===============================
// BUTTON HOVER SOUND-LIKE EFFECT
// ===============================

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "translateY(-3px)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "translateY(0)";

    });

});


// ===============================
// PAGE LOADED
// ===============================

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

    console.log(
        "🚀 Priyanshu Maurya Portfolio Loaded Successfully!"
    );

});
```
