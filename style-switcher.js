/* ========================= toggle style switcher =========================== */
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
if (styleSwitcherToggle) {
    styleSwitcherToggle.addEventListener("click", () => {
        const styleSwitcher = document.querySelector(".style-switcher");
        if (styleSwitcher) {
            styleSwitcher.classList.toggle("open");
        }
    });
}

// Hide style-switcher on scroll
window.addEventListener("scroll", () => {
    const styleSwitcher = document.querySelector(".style-switcher");
    if (styleSwitcher && styleSwitcher.classList.contains("open")) {
        styleSwitcher.classList.remove("open");
    }
});

/* ======================= theme colors ======================== */
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) {
    alternateStyles.forEach((style) => {
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        } else {
            style.setAttribute("disabled", "true");
        }
    });
}

/* ==================== theme light and dark mode ===================== */
const dayNight = document.querySelector(".day-night");
if (dayNight) {
    dayNight.addEventListener("click", () => {
        document.body.classList.toggle("dark");
        const icon = dayNight.querySelector("i");
        if (icon) {
            if (document.body.classList.contains("dark")) {
                icon.classList.remove("fa-moon");
                icon.classList.add("fa-sun");
            } else {
                icon.classList.remove("fa-sun");
                icon.classList.add("fa-moon");
            }
        }
    });

    // Set the correct icon on page load based on the theme
    window.addEventListener("load", () => {
        const icon = dayNight.querySelector("i");
        if (icon) {
            if (document.body.classList.contains("dark")) {
                icon.classList.add("fa-sun");
                icon.classList.remove("fa-moon");
            } else {
                icon.classList.add("fa-moon");
                icon.classList.remove("fa-sun");
            }
        }
    });
}
