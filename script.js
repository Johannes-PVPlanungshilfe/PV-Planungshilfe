const menu = document.querySelector('.menu');
const nav = document.querySelector('nav');
menu?.addEventListener('click', () => nav.classList.toggle('open'));
document.querySelectorAll('nav a').forEach((link) => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

const contactForm = document.querySelector('#kontaktformular');
const formStatus = document.querySelector('#formular-status');

contactForm?.addEventListener('submit', async (event) => {
  if (!window.fetch || !window.FormData) return; // normaler Formspree-Fallback

  event.preventDefault();
  const button = contactForm.querySelector('button[type="submit"]');
  const buttonLabel = button?.querySelector('.button-label');
  const originalText = buttonLabel?.textContent || 'Anfrage senden';

  contactForm.classList.add('is-sending');
  if (button) button.disabled = true;
  if (buttonLabel) buttonLabel.textContent = 'Wird gesendet …';
  if (formStatus) {
    formStatus.textContent = 'Ihre Anfrage wird sicher übermittelt …';
    formStatus.className = 'form-status';
  }

  try {
    const response = await fetch(contactForm.action, {
      method: 'POST',
      body: new FormData(contactForm),
      headers: { Accept: 'application/json' }
    });

    if (!response.ok) {
      let message = 'Formular konnte nicht gesendet werden';
      try {
        const data = await response.json();
        if (Array.isArray(data.errors) && data.errors[0]?.message) message = data.errors[0].message;
      } catch (_) {}
      throw new Error(message);
    }

    if (formStatus) {
      formStatus.textContent = 'Vielen Dank. Ihre Anfrage wurde erfolgreich gesendet. Sie werden weitergeleitet …';
      formStatus.className = 'form-status success';
    }
    contactForm.reset();
    window.setTimeout(() => {
      window.location.assign('/danke.html');
    }, 700);
  } catch (error) {
    if (formStatus) {
      formStatus.textContent = 'Die Anfrage konnte gerade nicht gesendet werden. Bitte versuchen Sie es erneut oder schreiben Sie an info@pvplanungshilfe.de.';
      formStatus.className = 'form-status error';
    }
    contactForm.classList.remove('is-sending');
    if (button) button.disabled = false;
    if (buttonLabel) buttonLabel.textContent = originalText;
  }
});
