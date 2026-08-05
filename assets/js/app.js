/* ==========================================================
   PVPlanungshilfe
   app.js – vollständige Ersatzdatei
========================================================== */

document.addEventListener("DOMContentLoaded", () => {
    /* =============================
       MOBILE NAVIGATION
    ============================= */

    const menuToggle = document.querySelector(".menu-toggle");
    const navigation = document.querySelector(".main-navigation");

    if (menuToggle && navigation) {
        menuToggle.addEventListener("click", () => {
            const isOpen = navigation.classList.toggle("open");

            menuToggle.setAttribute("aria-expanded", String(isOpen));
            menuToggle.setAttribute(
                "aria-label",
                isOpen ? "Navigation schließen" : "Navigation öffnen"
            );
        });

        navigation.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => {
                navigation.classList.remove("open");
                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.setAttribute("aria-label", "Navigation öffnen");
            });
        });

        window.addEventListener("resize", () => {
            if (window.innerWidth > 1080) {
                navigation.classList.remove("open");
                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.setAttribute("aria-label", "Navigation öffnen");
            }
        });
    }

    /* =============================
       FAQ
    ============================= */

    document.querySelectorAll(".faq-item").forEach((item) => {
        const button = item.querySelector(".faq-question");

        if (!button) {
            return;
        }

        button.addEventListener("click", () => {
            const wasOpen = item.classList.contains("active");

            document.querySelectorAll(".faq-item").forEach((otherItem) => {
                otherItem.classList.remove("active");

                const otherButton = otherItem.querySelector(".faq-question");

                if (otherButton) {
                    otherButton.setAttribute("aria-expanded", "false");
                }
            });

            if (!wasOpen) {
                item.classList.add("active");
                button.setAttribute("aria-expanded", "true");
            }
        });
    });

    /* =============================
       KONTAKTFORMULAR / FORMSPREE
    ============================= */

    const form = document.querySelector(".contact-form");

    if (form) {
        const status = form.querySelector(".form-status");
        const submitButton = form.querySelector('button[type="submit"]');

        form.addEventListener("submit", async (event) => {
            event.preventDefault();

            if (submitButton) {
                submitButton.disabled = true;
                submitButton.textContent = "Nachricht wird gesendet …";
            }

            if (status) {
                status.textContent = "";
                status.className = "form-status";
            }

            try {
                const response = await fetch(form.action, {
                    method: "POST",
                    body: new FormData(form),
                    headers: {
                        Accept: "application/json"
                    }
                });

                if (!response.ok) {
                    throw new Error("Formular konnte nicht gesendet werden.");
                }

                form.reset();
                window.location.href = "danke.html";
            } catch (error) {
                if (status) {
                    status.textContent =
                        "Die Nachricht konnte leider nicht gesendet werden. Bitte versuchen Sie es erneut.";
                    status.classList.add("is-error");
                } else {
                    alert(
                        "Die Nachricht konnte leider nicht gesendet werden. Bitte versuchen Sie es erneut."
                    );
                }

                if (submitButton) {
                    submitButton.disabled = false;
                    submitButton.textContent = "Anfrage senden";
                }
            }
        });
    }

    /* =============================
       SCROLL-ANIMATIONEN
    ============================= */

    const revealElements = document.querySelectorAll(
        ".service-card, .process-card, .highlight-box, .victron-box, .contact-box, .about"
    );

    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("reveal-visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.15
            }
        );

        revealElements.forEach((element) => {
            element.classList.add("reveal-hidden");
            observer.observe(element);
        });
    } else {
        revealElements.forEach((element) => {
            element.classList.add("reveal-visible");
        });
    }
});
