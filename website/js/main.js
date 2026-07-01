const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');

menuToggle?.addEventListener('click', () => {
  nav.classList.toggle('is-open');
});

document.querySelectorAll('.nav a').forEach((link) => {
  link.addEventListener('click', () => nav.classList.remove('is-open'));
});

const signupForm = document.getElementById('signupForm');
const formNote = document.getElementById('formNote');

signupForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(signupForm));
  const leads = JSON.parse(localStorage.getItem('orientation_leads') || '[]');
  leads.push({ ...data, date: new Date().toISOString() });
  localStorage.setItem('orientation_leads', JSON.stringify(leads));
  formNote.textContent = 'Thank you! We will contact you on WhatsApp soon.';
  formNote.style.color = '#059669';
  signupForm.reset();
});
