/**
 * KörperRein - Blog System
 * Dynamically loads blog posts from JSON and handles interactions
 */

(function() {
  'use strict';

  const blogGrid = document.getElementById('blogGrid');
  let blogPosts = [];

  /**
   * Load blog posts from JSON
   */
  async function loadBlogPosts() {
    try {
      const response = await fetch('data/blog-posts.json');
      const data = await response.json();
      blogPosts = data.posts;

      // Load stats from localStorage
      loadBlogStats();

      // Render blog cards
      renderBlogCards();
    } catch (error) {
      console.error('Error loading blog posts:', error);
      showError();
    }
  }

  /**
   * Load blog statistics from localStorage
   */
  function loadBlogStats() {
    const stats = JSON.parse(localStorage.getItem('blogStats') || '{}');

    blogPosts.forEach(post => {
      if (stats[post.id]) {
        post.views = stats[post.id].views || 0;
        post.likes = stats[post.id].likes || 0;
        post.comments = stats[post.id].comments || [];
      }
    });
  }

  /**
   * Save blog statistics to localStorage
   */
  function saveBlogStats() {
    const stats = {};
    blogPosts.forEach(post => {
      stats[post.id] = {
        views: post.views,
        likes: post.likes,
        comments: post.comments
      };
    });
    localStorage.setItem('blogStats', JSON.stringify(stats));
  }

  /**
   * Format date to German format
   */
  function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return date.toLocaleDateString('de-DE', options);
  }

  /**
   * Get author initials for avatar
   */
  function getInitials(name) {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase();
  }

  /**
   * Render blog cards
   */
  function renderBlogCards() {
    if (!blogGrid) return;

    // Sort posts by date (newest first)
    const sortedPosts = [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date));

    blogGrid.innerHTML = sortedPosts.map(post => `
      <article class="blog-card" data-post-id="${post.id}">
        <img src="${post.image}" alt="${post.title}" class="card-img" loading="lazy">
        <div class="blog-card-content">
          <!-- Header: Author, Date, Read Time -->
          <div class="blog-card-header">
            <div class="blog-author-avatar" aria-label="${post.author}">
              ${getInitials(post.author)}
            </div>
            <div class="blog-card-meta">
              <div class="blog-card-author">${post.author}</div>
              <div class="blog-card-date-time">
                <span>${formatDate(post.date)}</span>
                <span>•</span>
                <span>${post.readTime} Min. Lesezeit</span>
              </div>
            </div>
          </div>

          <!-- Title and Excerpt -->
          <h2 class="card-title">${post.title}</h2>
          <p class="card-text">${post.excerpt}</p>

          <!-- Footer: Stats and Actions -->
          <div class="blog-card-footer">
            <div class="blog-card-stats">
              <span class="blog-stat" aria-label="Ansichten">
                👁️ ${post.views} Ansichten
              </span>
              <button
                class="blog-stat blog-comments-toggle"
                data-post-id="${post.id}"
                aria-label="Kommentare anzeigen"
                style="background: none; border: none; cursor: pointer; padding: 0; color: inherit;"
              >
                💬 ${post.comments.length} Kommentare
              </button>
            </div>
            <div class="blog-card-actions">
              <button
                class="blog-action-btn blog-like-btn ${isPostLiked(post.id) ? 'liked' : ''}"
                data-post-id="${post.id}"
                aria-label="Like"
              >
                <span class="heart-icon">❤️</span>
                <span>${post.likes}</span>
              </button>
              <a href="${post.slug}" class="blog-link">Weiterlesen →</a>
            </div>
          </div>
        </div>
      </article>
    `).join('');

    // Attach event listeners
    attachEventListeners();
  }

  /**
   * Check if user has liked this post
   */
  function isPostLiked(postId) {
    const likedPosts = JSON.parse(localStorage.getItem('likedPosts') || '[]');
    return likedPosts.includes(postId);
  }

  /**
   * Toggle like on a post
   */
  function toggleLike(postId) {
    const post = blogPosts.find(p => p.id === postId);
    if (!post) return;

    const likedPosts = JSON.parse(localStorage.getItem('likedPosts') || '[]');
    const index = likedPosts.indexOf(postId);

    if (index > -1) {
      // Unlike
      likedPosts.splice(index, 1);
      post.likes = Math.max(0, post.likes - 1);
    } else {
      // Like
      likedPosts.push(postId);
      post.likes++;
    }

    localStorage.setItem('likedPosts', JSON.stringify(likedPosts));
    saveBlogStats();
    renderBlogCards();
  }

  /**
   * Increment view count
   */
  function incrementViews(postId) {
    const post = blogPosts.find(p => p.id === postId);
    if (!post) return;

    post.views++;
    saveBlogStats();
  }

  /**
   * Attach event listeners
   */
  function attachEventListeners() {
    // Like buttons
    document.querySelectorAll('.blog-like-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const postId = btn.dataset.postId;
        toggleLike(postId);
      });
    });

    // Comments toggle buttons
    document.querySelectorAll('.blog-comments-toggle').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const postId = btn.dataset.postId;
        const post = blogPosts.find(p => p.id === postId);
        if (post) {
          // Navigate to blog post and scroll to comments
          window.location.href = `${post.slug}#comments`;
        }
      });
    });

    // Track views when clicking "Weiterlesen"
    document.querySelectorAll('.blog-link').forEach(link => {
      link.addEventListener('click', () => {
        const card = link.closest('.blog-card');
        const postId = card.dataset.postId;
        incrementViews(postId);
      });
    });
  }

  /**
   * Show error message
   */
  function showError() {
    if (!blogGrid) return;
    blogGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: var(--spacing-3xl); color: var(--color-text-light);">
        <p>Fehler beim Laden der Blog-Posts. Bitte versuchen Sie es später erneut.</p>
      </div>
    `;
  }

  // Initialize
  if (blogGrid) {
    loadBlogPosts();
  }
})();
