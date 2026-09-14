// ===============================
// SCROLL REVEAL
// ===============================

const revealElements = document.querySelectorAll(
    ".reveal, .reveal-image"
);

const revealObserver = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.1
    }
);

revealElements.forEach((element) => {
    revealObserver.observe(element);
});


// ===============================
// MOBILE MENU
// ===============================

const menuButton = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");

if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
        menuButton.classList.toggle("active");
        nav.classList.toggle("mobile-open");
    });

    nav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            menuButton.classList.remove("active");
            nav.classList.remove("mobile-open");
        });
    });
}


// ===============================
// HEADER SCROLL
// ===============================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    if (!header) return;

    if (window.scrollY > 40) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});


// ===============================
// ACTIVE NAV LINK
// ===============================

const sections = document.querySelectorAll(
    "#collection, #story, #lookbook, #journal"
);

const navLinks = document.querySelectorAll(".nav a");

const sectionObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;

            navLinks.forEach((link) => {
                link.classList.remove("active-link");

                if (
                    link.getAttribute("href") ===
                    `#${entry.target.id}`
                ) {
                    link.classList.add("active-link");
                }
            });
        });
    },
    {
        threshold: 0.35
    }
);

sections.forEach((section) => {
    sectionObserver.observe(section);
});


// ===============================
// IMAGE HOVER — DESKTOP ONLY
// ===============================

if (window.matchMedia("(min-width: 769px)").matches) {

    const hoverImages = document.querySelectorAll(
        ".collection-image, .lookbook-feature, .lookbook-small"
    );

    hoverImages.forEach((container) => {

        const image = container.querySelector("img");

        if (!image) return;

        container.addEventListener("mousemove", (event) => {

            const rect = container.getBoundingClientRect();

            const x =
                (event.clientX - rect.left) / rect.width - 0.5;

            const y =
                (event.clientY - rect.top) / rect.height - 0.5;

            image.style.transform =
                `scale(1.04) translate(${x * 6}px, ${y * 6}px)`;
        });

        container.addEventListener("mouseleave", () => {
            image.style.transform = "";
        });

    });
}