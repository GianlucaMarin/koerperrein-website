/**
 * Handles global header/footer injection and navigation interactions.
 */

document.addEventListener('DOMContentLoaded', () => {
  const headerPromise = injectComponent('header-placeholder', 'includes/header.html?v=2');
  const footerPromise = injectComponent('footer-placeholder', 'includes/footer.html?v=2');

  headerPromise
    .then(() => {
      initNavigation();
      highlightActiveNavLink();
      initStickyHeader();
      initScrollAnimations();
    })
    .catch(error => {
      console.error('Fehler beim Initialisieren der Navigation:', error);
    });

  footerPromise.catch(error => {
    console.error('Fehler beim Laden des Footers:', error);
  });
});

/**
 * Fetches HTML partials and injects them into the page.
 */
function injectComponent(placeholderId, url) {
  const placeholder = document.getElementById(placeholderId);
  if (!placeholder) {
    return Promise.resolve();
  }

  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP ${response.status} beim Laden von ${url}`);
      }
      return response.text();
    })
    .then(markup => {
      placeholder.innerHTML = markup;
    });
}

/**
 * Sets up mobile navigation, overlay, and accessibility features.
 */
function initNavigation() {
  const navbar = document.getElementById('navbar');
  const menu = document.getElementById('navbarMenu');
  const toggle = document.getElementById('navbarToggle');
  const overlay = document.getElementById('navbarOverlay');
  const closeButton = navbar ? navbar.querySelector('.navbar-close') : null;

  if (!navbar || !menu || !toggle) {
    return;
  }

  const navLinks = navbar.querySelectorAll('.nav-link');

  const openMenu = () => {
    menu.classList.add('active');
    toggle.classList.add('is-active');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Menü schließen');
    if (overlay) {
      overlay.classList.add('is-visible');
      overlay.hidden = false;
    }
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    menu.classList.remove('active');
    toggle.classList.remove('is-active');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Menü öffnen');
    if (overlay) {
      overlay.classList.remove('is-visible');
      overlay.hidden = true;
    }
    document.body.style.overflow = '';
  };

  toggle.addEventListener('click', () => {
    if (menu.classList.contains('active')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  closeButton?.addEventListener('click', closeMenu);
  overlay?.addEventListener('click', closeMenu);

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menu.classList.contains('active')) {
      closeMenu();
      toggle.focus();
    }
  });

  document.addEventListener('click', event => {
    if (!menu.classList.contains('active')) return;
    if (!menu.contains(event.target) && !toggle.contains(event.target)) {
      closeMenu();
    }
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      closeMenu();
    }
  });
}

/**
 * Highlights the active navigation link based on current URL.
 */
function highlightActiveNavLink() {
  const navLinks = document.querySelectorAll('.nav-link');
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  navLinks.forEach(link => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });
}

/**
 * Adds subtle style change when sticky header is scrolled.
 */
function initStickyHeader() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  const toggleShadow = () => {
    if (window.scrollY > 10) {
      navbar.classList.add('is-scrolled');
    } else {
      navbar.classList.remove('is-scrolled');
    }
  };

  toggleShadow();
  window.addEventListener('scroll', toggleShadow, { passive: true });
}

/**
 * Adds fade-in animations to elements with .fade-in-on-scroll.
 */
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.fade-in-on-scroll');
  if (!animatedElements.length) return;

  document.body.classList.add('js-animations');

  const reveal = element => {
    element.classList.add('is-visible');
  };

  if (!('IntersectionObserver' in window)) {
    animatedElements.forEach(reveal);
    return;
  }

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          reveal(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.25 }
  );

  animatedElements.forEach(el => observer.observe(el));
}
