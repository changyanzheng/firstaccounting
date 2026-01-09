// basic interactions: mobile nav toggle, simple fade-in
document.addEventListener('DOMContentLoaded', function () {
  // mobile nav toggle
  const btn = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (btn && navLinks) {
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      navLinks.style.display = expanded ? 'none' : 'flex';
    });
  }

  // simple staggered fade-in for major blocks
  const fadeEls = document.querySelectorAll('.service-card, .insight, .hero-left, .hero-right, .about-card, .service-panel');
  fadeEls.forEach((el, idx) => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(8px)';
    setTimeout(() => {
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    }, 80 * idx);
  });
});


document.addEventListener('DOMContentLoaded', function () {

  /* MOBILE NAV */
  const btn = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (btn && navLinks) {
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      navLinks.style.display = expanded ? 'none' : 'flex';
    });
  }

  /* FADE-IN ANIMATIONS */
  const fadeEls = document.querySelectorAll('.service-card, .insight, .hero-left, .hero-right, .about-card, .service-panel');
  fadeEls.forEach((el, idx) => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(8px)';
    setTimeout(() => {
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    }, 80 * idx);
  });

document.addEventListener('DOMContentLoaded', function() {
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.main-nav');

    if (mobileBtn) {
        mobileBtn.addEventListener('click', function() {
            // This toggles the menu on and off
            nav.classList.toggle('active');
            
            // Optional: This changes the icon from 3 lines to an 'X'
            mobileBtn.classList.toggle('open');
        });
    }
});




});




