/**
 * KörperRein - Contact Form Validation & Submission
 * Handles client-side validation and form submission
 */

(function() {
  'use strict';

  const form = document.getElementById('contactForm');
  if (!form) return;

  // Recipient Selection Functionality
  const recipientButtons = document.querySelectorAll('.btn-recipient');
  const recipientField = document.getElementById('recipientField');

  recipientButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Remove active class from all buttons
      recipientButtons.forEach(btn => btn.classList.remove('active'));

      // Add active class to clicked button
      this.classList.add('active');

      // Update hidden field with selected recipient
      const recipient = this.dataset.recipient;
      recipientField.value = recipient;

      console.log('Selected recipient:', recipient, 'Email:', this.dataset.email);
    });
  });

  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const telefonInput = document.getElementById('telefon');
  const nachrichtInput = document.getElementById('nachricht');
  const datenschutzInput = document.getElementById('datenschutz');

  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const nachrichtError = document.getElementById('nachrichtError');
  const datenschutzError = document.getElementById('datenschutzError');

  const successMessage = document.getElementById('successMessage');
  const errorMessage = document.getElementById('errorMessage');

  /**
   * Validate Name Field
   */
  function validateName() {
    const value = nameInput.value.trim();
    if (value.length === 0) {
      showError(nameInput, nameError, 'Bitte geben Sie Ihren Namen ein.');
      return false;
    }
    if (value.length < 2) {
      showError(nameInput, nameError, 'Der Name muss mindestens 2 Zeichen lang sein.');
      return false;
    }
    clearError(nameInput, nameError);
    return true;
  }

  /**
   * Validate Email Field
   */
  function validateEmail() {
    const value = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (value.length === 0) {
      showError(emailInput, emailError, 'Bitte geben Sie Ihre E-Mail-Adresse ein.');
      return false;
    }
    if (!emailRegex.test(value)) {
      showError(emailInput, emailError, 'Bitte geben Sie eine gültige E-Mail-Adresse ein.');
      return false;
    }
    clearError(emailInput, emailError);
    return true;
  }

  /**
   * Validate Message Field
   */
  function validateNachricht() {
    const value = nachrichtInput.value.trim();
    if (value.length === 0) {
      showError(nachrichtInput, nachrichtError, 'Bitte geben Sie eine Nachricht ein.');
      return false;
    }
    if (value.length < 10) {
      showError(nachrichtInput, nachrichtError, 'Die Nachricht muss mindestens 10 Zeichen lang sein.');
      return false;
    }
    clearError(nachrichtInput, nachrichtError);
    return true;
  }

  /**
   * Validate Privacy Checkbox
   */
  function validateDatenschutz() {
    if (!datenschutzInput.checked) {
      showError(datenschutzInput, datenschutzError, 'Bitte akzeptieren Sie die Datenschutzerklärung.');
      return false;
    }
    clearError(datenschutzInput, datenschutzError);
    return true;
  }

  /**
   * Show Error Message
   */
  function showError(input, errorElement, message) {
    input.classList.add('input-error');
    input.setAttribute('aria-invalid', 'true');
    errorElement.textContent = message;
    errorElement.style.display = 'block';
  }

  /**
   * Clear Error Message
   */
  function clearError(input, errorElement) {
    input.classList.remove('input-error');
    input.setAttribute('aria-invalid', 'false');
    errorElement.textContent = '';
    errorElement.style.display = 'none';
  }

  /**
   * Validate All Fields
   */
  function validateForm() {
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isNachrichtValid = validateNachricht();
    const isDatenschutzValid = validateDatenschutz();

    return isNameValid && isEmailValid && isNachrichtValid && isDatenschutzValid;
  }

  /**
   * Show Success Message
   */
  function showSuccess() {
    successMessage.style.display = 'block';
    errorMessage.style.display = 'none';
    form.reset();

    // Scroll to success message
    successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });

    // Hide success message after 10 seconds
    setTimeout(() => {
      successMessage.style.display = 'none';
    }, 10000);
  }

  /**
   * Show Error Message
   */
  function showFormError() {
    errorMessage.style.display = 'block';
    successMessage.style.display = 'none';

    // Scroll to error message
    errorMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  /**
   * Handle Form Submission
   */
  async function handleSubmit(e) {
    e.preventDefault();

    // Hide previous messages
    successMessage.style.display = 'none';
    errorMessage.style.display = 'none';

    // Validate form
    if (!validateForm()) {
      return;
    }

    // Get form data
    const formData = new FormData(form);

    // Disable submit button
    const submitButton = form.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.textContent;
    submitButton.textContent = 'Wird gesendet...';
    submitButton.disabled = true;

    try {
      // Submit form using Fetch API (Netlify Forms)
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString()
      });

      if (response.ok) {
        showSuccess();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      showFormError();
    } finally {
      // Re-enable submit button
      submitButton.textContent = originalButtonText;
      submitButton.disabled = false;
    }
  }

  // Event Listeners
  nameInput.addEventListener('blur', validateName);
  emailInput.addEventListener('blur', validateEmail);
  nachrichtInput.addEventListener('blur', validateNachricht);
  datenschutzInput.addEventListener('change', validateDatenschutz);

  form.addEventListener('submit', handleSubmit);

  // Real-time validation as user types (optional enhancement)
  nameInput.addEventListener('input', () => {
    if (nameInput.classList.contains('input-error')) {
      validateName();
    }
  });

  emailInput.addEventListener('input', () => {
    if (emailInput.classList.contains('input-error')) {
      validateEmail();
    }
  });

  nachrichtInput.addEventListener('input', () => {
    if (nachrichtInput.classList.contains('input-error')) {
      validateNachricht();
    }
  });
})();
