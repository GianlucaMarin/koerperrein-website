/**
 * KörperRein - Contact Form Validation & Submission
 * Handles client-side validation and form submission
 */

document.addEventListener('DOMContentLoaded', function() {
  'use strict';

  const form = document.getElementById('contactForm');
  if (!form) {
    console.error('contactForm not found - script aborted');
    return;
  }

  console.log('✅ contactForm found, continuing script initialization...');

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

    // Manually reset all fields (since we're using a div, not a form)
    nameInput.value = '';
    emailInput.value = '';
    telefonInput.value = '';
    nachrichtInput.value = '';
    datenschutzInput.checked = false;

    // Clear any error states
    clearError(nameInput, nameError);
    clearError(emailInput, emailError);
    clearError(nachrichtInput, nachrichtError);
    clearError(datenschutzInput, datenschutzError);

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
  async function handleSubmit() {
    console.log('handleSubmit called');

    // Hide previous messages
    successMessage.style.display = 'none';
    errorMessage.style.display = 'none';

    // Validate form
    if (!validateForm()) {
      console.log('Form validation failed');
      return;
    }

    console.log('Form validation passed');

    // Check if EmailJS is available
    if (typeof emailjs === 'undefined') {
      console.error('EmailJS is not loaded!');
      alert('EmailJS ist nicht geladen. Bitte laden Sie die Seite neu.');
      return;
    }

    console.log('EmailJS is available');

    // Disable submit button
    const submitButton = document.getElementById('submitBtn');
    const originalButtonText = submitButton.textContent;
    submitButton.textContent = 'Wird gesendet...';
    submitButton.disabled = true;

    try {
      // Get recipient (Sandra or Tamara)
      const recipient = recipientField.value;

      // Determine which service and template to use based on recipient
      let serviceID, templateID;

      if (recipient === 'sandra') {
        serviceID = 'service_aschfsb';  // Sandra's service
        templateID = 'template_m4z3d2x'; // Sandra's template (fixed: z not 2)
      } else if (recipient === 'tamara') {
        serviceID = 'service_zjumkyh';  // Tamara's service
        templateID = 'template_faqzqcp'; // Tamara's template
      } else {
        console.error('Invalid recipient selected');
        showFormError();
        return;
      }

      // Prepare template parameters (must match EmailJS template variables)
      const templateParams = {
        name: nameInput.value,
        email: emailInput.value,
        telefon: telefonInput.value || 'Nicht angegeben',
        nachricht: nachrichtInput.value
      };

      console.log('Sending email with params:', templateParams);
      console.log('Using service:', serviceID, 'and template:', templateID);

      // Send email via EmailJS
      const response = await emailjs.send(serviceID, templateID, templateParams);

      console.log('Email sent successfully:', response);
      showSuccess();

    } catch (error) {
      console.error('Email sending error:', error);
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

  // Note: No form submit listener needed since we're using a div with button onclick

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

  // Make handleSubmit globally accessible for inline onclick
  console.log('✅ About to define window.contactFormHandler...');
  window.contactFormHandler = function() {
    console.log('Global contactFormHandler called from button click');
    handleSubmit();
  };
  console.log('✅ window.contactFormHandler defined successfully!');
});
