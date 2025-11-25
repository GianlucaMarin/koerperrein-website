/**
 * KörperRein - Legal Tabs Navigation
 * Handles tab switching between Impressum, AGB, and Datenschutz
 */

(function() {
  'use strict';

  const tabs = document.querySelectorAll('.legal-tab');
  const sections = document.querySelectorAll('.legal-section');

  if (tabs.length === 0 || sections.length === 0) return;

  /**
   * Show section by ID
   */
  function showSection(targetId) {
    sections.forEach(section => {
      if (section.id === targetId) {
        section.style.display = 'block';
      } else {
        section.style.display = 'none';
      }
    });

    // Update active tab
    tabs.forEach(tab => {
      const href = tab.getAttribute('href');
      if (href === `#${targetId}`) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    });
  }

  /**
   * Handle tab click
   */
  tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = tab.getAttribute('href').substring(1);
      showSection(targetId);

      // Update URL hash without scrolling
      history.pushState(null, null, `#${targetId}`);
    });
  });

  /**
   * Handle initial hash on page load
   */
  function initFromHash() {
    const hash = window.location.hash.substring(1);

    if (hash && document.getElementById(hash)) {
      showSection(hash);
    } else {
      // Default to first section (Impressum)
      showSection('impressum');
    }
  }

  /**
   * Handle browser back/forward buttons
   */
  window.addEventListener('popstate', () => {
    initFromHash();
  });

  // Initialize
  initFromHash();
})();
