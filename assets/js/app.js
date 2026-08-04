/* ==========================================================
   PVPlanungshilfe Professional Edition
   app.js
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       Header beim Scrollen
    ========================================== */

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 40) {

            header.style.boxShadow = "0 12px 30px rgba(18,59,93,.08)";
            header.style.background = "rgba(255,255,255,.98)";

        } else {

            header.style.boxShadow = "none";
            header.style.background = "rgba(255,255,255,.95)";

        }

    });


    /* ==========================================
       FAQ
    ========================================== */

    document.querySelectorAll(".faq-item").forEach(item => {

        item.querySelector(".faq-question").addEventListener("click", () => {

            item.classList.toggle("active");

        });

    });


    /* ==========================================
       Smooth Scroll
    ========================================== */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (!target) return;

            e.preventDefault();

            window.scrollTo({

                top: target.offsetTop - 90,

                behavior: "smooth"

            });

        });

    });


    /* ==========================================
       Animation Observer
    ========================================== */

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {

        threshold: .15

    });


    document.querySelectorAll(

        ".service-card, .process-card, .card, .highlight-box, .about-content, .about-image, .victron-box, .contact-box"

    ).forEach(el => {

        el.classList.add("hidden");

        observer.observe(el);

    });


    /* ==========================================
       Kontaktformular
    ========================================== */

    const form = document.querySelector(".contact-form");

    if (form) {

        form.addEventListener("submit", () => {

            const button = form.querySelector("button");

            button.disabled = true;

            button.innerHTML = "Wird gesendet ...";

        });

    }

});
