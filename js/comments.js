/**
 * KörperRein - Blog Comments System
 * Handles comment functionality for individual blog posts
 */

(function() {
  'use strict';

  const commentsSection = document.querySelector('.blog-comments');
  if (!commentsSection) return;

  const postId = commentsSection.dataset.postId;
  const commentForm = document.getElementById('commentForm');
  const commentText = document.getElementById('commentText');
  const commentsList = document.getElementById('commentsList');
  const commentsCount = document.getElementById('commentsCount');
  const commentsEmpty = document.getElementById('commentsEmpty');

  let comments = [];

  /**
   * Load comments for this post
   */
  function loadComments() {
    const blogStats = JSON.parse(localStorage.getItem('blogStats') || '{}');

    if (blogStats[postId] && blogStats[postId].comments) {
      comments = blogStats[postId].comments;
    } else {
      comments = [];
    }

    renderComments();
    updateCommentsCount();
  }

  /**
   * Save comments to localStorage
   */
  function saveComments() {
    const blogStats = JSON.parse(localStorage.getItem('blogStats') || '{}');

    if (!blogStats[postId]) {
      blogStats[postId] = {
        views: 0,
        likes: 0,
        comments: []
      };
    }

    blogStats[postId].comments = comments;
    localStorage.setItem('blogStats', JSON.stringify(blogStats));
  }

  /**
   * Format date for display
   */
  function formatDate(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return 'gerade eben';
    if (diffMins < 60) return `vor ${diffMins} Minute${diffMins === 1 ? '' : 'n'}`;
    if (diffHours < 24) return `vor ${diffHours} Stunde${diffHours === 1 ? '' : 'n'}`;
    if (diffDays < 30) return `vor ${diffDays} Tag${diffDays === 1 ? '' : 'en'}`;

    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return date.toLocaleDateString('de-DE', options);
  }

  /**
   * Get initials for avatar
   */
  function getInitials(name) {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase();
  }

  /**
   * Generate random guest name
   */
  function generateGuestName() {
    const adjectives = ['Neugierig', 'Wissbegierig', 'Interessiert', 'Aufmerksam', 'Engagiert'];
    const nouns = ['Leser', 'Gast', 'Besucher', 'Teilnehmer', 'Interessent'];

    const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    const num = Math.floor(Math.random() * 99) + 1;

    return `${adj}er ${noun} ${num}`;
  }

  /**
   * Check if user owns this comment
   */
  function isOwnComment(commentId) {
    const ownComments = JSON.parse(localStorage.getItem('ownComments') || '[]');
    return ownComments.includes(commentId);
  }

  /**
   * Render comments
   */
  function renderComments() {
    if (!commentsList) return;

    if (comments.length === 0) {
      commentsList.innerHTML = '';
      if (commentsEmpty) {
        commentsEmpty.style.display = 'block';
      }
      return;
    }

    if (commentsEmpty) {
      commentsEmpty.style.display = 'none';
    }

    // Sort comments by date (newest first)
    const sortedComments = [...comments].sort((a, b) => new Date(b.date) - new Date(a.date));

    commentsList.innerHTML = sortedComments.map(comment => `
      <div class="comment" data-comment-id="${comment.id}">
        <div class="comment-header">
          <div class="comment-avatar" aria-label="${comment.author}">
            ${getInitials(comment.author)}
          </div>
          <div style="flex: 1;">
            <div class="comment-author">${comment.author}</div>
            <div class="comment-date">${formatDate(comment.date)}</div>
          </div>
          ${isOwnComment(comment.id) ? `
            <button
              class="comment-delete-btn"
              data-comment-id="${comment.id}"
              aria-label="Kommentar löschen"
              title="Kommentar löschen"
            >
              🗑️
            </button>
          ` : ''}
        </div>
        <div class="comment-body">${escapeHtml(comment.text)}</div>
      </div>
    `).join('');

    // Attach delete button listeners
    attachDeleteListeners();
  }

  /**
   * Update comments count
   */
  function updateCommentsCount() {
    if (!commentsCount) return;
    const count = comments.length;
    commentsCount.textContent = `${count} Kommentar${count === 1 ? '' : 'e'}`;
  }

  /**
   * Escape HTML to prevent XSS
   */
  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  /**
   * Add new comment
   */
  function addComment(text) {
    const newComment = {
      id: Date.now().toString(),
      author: generateGuestName(),
      text: text.trim(),
      date: new Date().toISOString()
    };

    comments.push(newComment);

    // Mark as own comment
    const ownComments = JSON.parse(localStorage.getItem('ownComments') || '[]');
    ownComments.push(newComment.id);
    localStorage.setItem('ownComments', JSON.stringify(ownComments));

    saveComments();
    renderComments();
    updateCommentsCount();

    // Show success message (optional)
    showSuccessMessage();
  }

  /**
   * Delete comment
   */
  function deleteComment(commentId) {
    // Confirm deletion
    if (!confirm('Möchten Sie diesen Kommentar wirklich löschen?')) {
      return;
    }

    // Find and remove comment
    const index = comments.findIndex(c => c.id === commentId);
    if (index > -1) {
      comments.splice(index, 1);

      // Remove from own comments
      const ownComments = JSON.parse(localStorage.getItem('ownComments') || '[]');
      const ownIndex = ownComments.indexOf(commentId);
      if (ownIndex > -1) {
        ownComments.splice(ownIndex, 1);
        localStorage.setItem('ownComments', JSON.stringify(ownComments));
      }

      saveComments();
      renderComments();
      updateCommentsCount();
    }
  }

  /**
   * Attach delete button listeners
   */
  function attachDeleteListeners() {
    document.querySelectorAll('.comment-delete-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const commentId = btn.dataset.commentId;
        deleteComment(commentId);
      });
    });
  }

  /**
   * Show success message
   */
  function showSuccessMessage() {
    // Create temporary success message
    const message = document.createElement('div');
    message.className = 'form-message form-success';
    message.style.marginTop = 'var(--spacing-md)';
    message.innerHTML = '<p><strong>Kommentar erfolgreich hinzugefügt!</strong></p>';

    commentForm.appendChild(message);

    setTimeout(() => {
      message.remove();
    }, 3000);
  }

  /**
   * Handle form submission
   */
  function handleSubmit(e) {
    e.preventDefault();

    const text = commentText.value.trim();

    if (!text) {
      return;
    }

    if (text.length > 500) {
      alert('Kommentar darf maximal 500 Zeichen lang sein.');
      return;
    }

    // Add comment
    addComment(text);

    // Reset form
    commentText.value = '';
    commentText.focus();
  }

  // Event Listeners
  if (commentForm) {
    commentForm.addEventListener('submit', handleSubmit);
  }

  // Auto-expand textarea
  if (commentText) {
    commentText.addEventListener('input', function() {
      this.style.height = 'auto';
      this.style.height = (this.scrollHeight) + 'px';
    });
  }

  // Initialize
  loadComments();

  // Scroll to comments if hash is present
  if (window.location.hash === '#comments') {
    setTimeout(() => {
      commentsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  }
})();
