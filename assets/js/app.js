/* ==========================================
   Kontaktformular (Formspree)
========================================== */

const form = document.querySelector(".contact-form");

if (form) {

    form.addEventListener("submit", async function (e) {

        e.preventDefault();

        const button = form.querySelector("button");

        button.disabled = true;
        button.innerHTML = "Nachricht wird gesendet...";

        const data = new FormData(form);

        const response = await fetch(form.action, {

            method: "POST",

            body: data,

            headers: {

                Accept: "application/json"

            }

        });

        if (response.ok) {

            window.location.href = "danke.html";

        } else {

            alert("Leider konnte Ihre Nachricht nicht versendet werden. Bitte versuchen Sie es erneut.");

            button.disabled = false;
            button.innerHTML = "Anfrage senden";

        }

    });

}
