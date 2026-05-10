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

// Bouton son sur les vidéos de galerie
const ICON_MUTED = '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>';
const ICON_UNMUTED = '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>';

document.querySelectorAll('.gallery__item').forEach((item) => {
  const video = item.querySelector('video');
  if (!video) return;

  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'video-sound';
  btn.setAttribute('aria-label', 'Activer le son');
  item.appendChild(btn);

  const allVideos = document.querySelectorAll('.gallery__item video');

  const update = () => {
    if (video.muted) {
      btn.classList.remove('is-on');
      btn.innerHTML = ICON_MUTED + '<span>Son</span>';
      btn.setAttribute('aria-label', 'Activer le son');
    } else {
      btn.classList.add('is-on');
      btn.innerHTML = ICON_UNMUTED + '<span>Son</span>';
      btn.setAttribute('aria-label', 'Couper le son');
    }
  };

  const toggle = (e) => {
    e.stopPropagation();
    e.preventDefault();
    const willUnmute = video.muted;
    if (willUnmute) {
      // Couper les autres vidéos pour éviter la cacophonie
      allVideos.forEach((v) => {
        if (v !== video && !v.muted) {
          v.muted = true;
          v.dispatchEvent(new Event('volumechange'));
        }
      });
    }
    video.muted = !video.muted;
    if (!video.muted) video.volume = 1;
  };

  btn.addEventListener('click', toggle);
  video.addEventListener('click', toggle);
  video.addEventListener('volumechange', update);
  update();
});
