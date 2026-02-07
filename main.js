(function () {
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.getElementById('nav-links');
  const year = document.getElementById('year');

  if (year) year.textContent = String(new Date().getFullYear());

  if (!toggle || !menu) return;

  function closeMenu() {
    menu.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  }

  toggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!menu.classList.contains('is-open')) return;
    const within = menu.contains(e.target) || toggle.contains(e.target);
    if (!within) closeMenu();
  });

  // Close on escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });

  // Smooth scroll for in-page anchors (native in most browsers, but this helps)
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', () => closeMenu());
  });
})();
