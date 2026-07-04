const header = document.getElementById('header');
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');
const signupForm = document.getElementById('signupForm');
const formNote = document.getElementById('formNote');

// Header scroll state
function updateHeader() {
  const hero = document.querySelector('.hero');
  const headerH = 72;
  const heroBottom = hero ? hero.offsetHeight - headerH : 0;
  const scrollY = window.scrollY;

  header.classList.toggle('is-scrolled', scrollY > 20);
  header.classList.toggle('is-hero', Boolean(hero && scrollY < heroBottom));
}

header?.classList.add('is-hero');
window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();

// Mobile menu
menuToggle?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', isOpen);
});

document.querySelectorAll('.nav a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

// FAQ accordion
document.querySelectorAll('.accordion__trigger').forEach((trigger) => {
  trigger.addEventListener('click', () => {
    const item = trigger.closest('.accordion__item');
    const isOpen = item.classList.contains('is-open');

    document.querySelectorAll('.accordion__item.is-open').forEach((openItem) => {
      openItem.classList.remove('is-open');
      openItem.querySelector('.accordion__trigger').setAttribute('aria-expanded', 'false');
    });

    if (!isOpen) {
      item.classList.add('is-open');
      trigger.setAttribute('aria-expanded', 'true');
    }
  });
});

// Scroll reveal
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

// Hero spotlight (mouse-tracking, 21st.dev style)
const hero = document.querySelector('.hero');

hero?.addEventListener('mousemove', (e) => {
  const rect = hero.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width) * 100;
  const y = ((e.clientY - rect.top) / rect.height) * 100;
  hero.style.setProperty('--spot-x', `${x}%`);
  hero.style.setProperty('--spot-y', `${y}%`);
});

document.querySelectorAll('.stat-card--spotlight').forEach((card) => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  });
});

// Signup form
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
