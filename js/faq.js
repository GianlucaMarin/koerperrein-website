/**
 * KörperRein - FAQ Accordion with Search
 * Handles expandable FAQ questions and answers with search functionality
 */

(function() {
  'use strict';

  const faqContainer = document.getElementById('faqContainer');
  const searchInput = document.getElementById('faqSearch');
  const searchResults = document.getElementById('searchResults');
  let faqItems = [];

  /**
   * Initialize FAQ items
   */
  function initFAQs() {
    faqItems = Array.from(document.querySelectorAll('.faq-item'));
    attachEventListeners();
  }

  /**
   * Toggle FAQ item
   */
  function toggleFAQ(item, forceOpen = false) {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    const isExpanded = question.getAttribute('aria-expanded') === 'true';

    // Close all other FAQs
    faqItems.forEach(otherItem => {
      if (otherItem !== item) {
        const otherQuestion = otherItem.querySelector('.faq-question');
        const otherAnswer = otherItem.querySelector('.faq-answer');

        otherQuestion.setAttribute('aria-expanded', 'false');
        otherAnswer.style.maxHeight = null;
      }
    });

    // Toggle current FAQ
    if (isExpanded && !forceOpen) {
      question.setAttribute('aria-expanded', 'false');
      answer.style.maxHeight = null;
    } else {
      question.setAttribute('aria-expanded', 'true');
      answer.style.maxHeight = answer.scrollHeight + 'px';
    }
  }

  /**
   * Attach event listeners to FAQ items
   */
  function attachEventListeners() {
    faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');

      question.addEventListener('click', () => {
        toggleFAQ(item);
      });

      // Keyboard accessibility
      question.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggleFAQ(item);
        }
      });
    });
  }

  /**
   * Search FAQs
   */
  function searchFAQs(searchTerm) {
    const term = searchTerm.toLowerCase().trim();

    if (!term) {
      // Show all FAQs
      faqItems.forEach(item => {
        item.style.display = 'block';
        item.classList.remove('faq-highlight');
      });
      searchResults.textContent = '';
      return;
    }

    let matchCount = 0;
    let firstMatch = null;

    faqItems.forEach(item => {
      const question = item.querySelector('.faq-question span').textContent.toLowerCase();
      const answer = item.querySelector('.faq-answer').textContent.toLowerCase();

      if (question.includes(term) || answer.includes(term)) {
        item.style.display = 'block';
        item.classList.add('faq-highlight');
        matchCount++;

        if (!firstMatch) {
          firstMatch = item;
        }
      } else {
        item.style.display = 'none';
        item.classList.remove('faq-highlight');
      }
    });

    // Update search results text
    if (matchCount === 0) {
      searchResults.textContent = 'Keine Ergebnisse gefunden. Versuchen Sie andere Suchbegriffe.';
      searchResults.style.color = 'var(--color-text-light)';
    } else {
      searchResults.textContent = `${matchCount} Ergebnis${matchCount === 1 ? '' : 'se'} gefunden`;
      searchResults.style.color = 'var(--color-primary)';

      // Open and scroll to first match
      if (firstMatch) {
        toggleFAQ(firstMatch, true);
        setTimeout(() => {
          firstMatch.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
      }
    }
  }

  /**
   * Debounce function for search
   */
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  // Initialize
  initFAQs();

  // Search functionality
  if (searchInput) {
    const debouncedSearch = debounce((e) => {
      searchFAQs(e.target.value);
    }, 300);

    searchInput.addEventListener('input', debouncedSearch);
  }
})();
