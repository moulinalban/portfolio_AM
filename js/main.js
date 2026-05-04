/* Portfolio Alban Moulin — interactions */

// Nav scroll
const nav = document.querySelector('.nav');
if (nav) {
  const handleScroll = () => {
    if (window.scrollY > 8) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  };
  handleScroll();
  window.addEventListener('scroll', handleScroll, { passive: true });
}

// Burger
const burger = document.querySelector('.nav__burger');
const mobileMenu = document.querySelector('.mobile-menu');
if (burger && mobileMenu) {
  const toggle = () => {
    const open = burger.classList.toggle('is-open');
    mobileMenu.classList.toggle('is-open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  };
  burger.addEventListener('click', toggle);
  mobileMenu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => {
    burger.classList.remove('is-open');
    mobileMenu.classList.remove('is-open');
    document.body.style.overflow = '';
  }));
}

// Fade-up au scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el));

// Compteur KPI animé (sur les blocs avec data-count)
const easeOut = (t) => 1 - Math.pow(1 - t, 3);

const animateCount = (el) => {
  const target = parseFloat(el.dataset.count);
  if (isNaN(target)) return;
  const decimals = parseInt(el.dataset.decimals || '0', 10);
  const duration = 1200;
  const start = performance.now();

  const tick = (now) => {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeOut(progress);
    const value = target * eased;
    el.textContent = decimals > 0 ? value.toFixed(decimals) : Math.round(value).toLocaleString('fr-FR');
    if (progress < 1) requestAnimationFrame(tick);
    else el.textContent = decimals > 0 ? target.toFixed(decimals) : target.toLocaleString('fr-FR');
  };

  requestAnimationFrame(tick);
};

const countObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      animateCount(entry.target);
      countObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.4 });

document.querySelectorAll('[data-count]').forEach((el) => countObserver.observe(el));

// Form contact (simulation locale + fallback mailto)
const form = document.querySelector('.form');
if (form) {
  const feedback = form.querySelector('.form__feedback');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = (data.get('name') || '').toString().trim();
    const email = (data.get('email') || '').toString().trim();
    const message = (data.get('message') || '').toString().trim();

    if (!name || !email || !message) {
      feedback.classList.remove('is-success');
      feedback.classList.add('is-error');
      feedback.textContent = 'Merci de remplir tous les champs.';
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      feedback.classList.remove('is-success');
      feedback.classList.add('is-error');
      feedback.textContent = 'Adresse email invalide.';
      return;
    }

    // Ouvre le client mail avec le message pré-rempli
    const subject = encodeURIComponent(`Contact portfolio — ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
    window.location.href = `mailto:moulin.alban@gmail.com?subject=${subject}&body=${body}`;

    feedback.classList.remove('is-error');
    feedback.classList.add('is-success');
    feedback.textContent = 'Merci ! Votre messagerie va s\'ouvrir pour finaliser l\'envoi.';
    form.reset();
  });
}

// Année footer
document.querySelectorAll('[data-year]').forEach((el) => {
  el.textContent = new Date().getFullYear();
});
