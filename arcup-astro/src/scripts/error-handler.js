// ERROR HANDLING & GRACEFUL FAILURES
// Provides fallbacks for common web failures

(function() {
  'use strict';

  // Global error handler
  window.addEventListener('error', function(event) {
    console.warn('Global error caught:', event.error);
    
    // Don't show errors to users unless they're critical
    if (event.error && event.error.name === 'ChunkLoadError') {
      // Handle chunk loading failures (common with dynamic imports)
      showReloadPrompt();
    }
  });

  // Handle unhandled promise rejections
  window.addEventListener('unhandledrejection', function(event) {
    console.warn('Unhandled promise rejection:', event.reason);
    
    // Prevent default browser error handling
    event.preventDefault();
    
    // Handle network errors gracefully
    if (event.reason && event.reason.name === 'NetworkError') {
      showNetworkError();
    }
  });

  // Network status monitoring
  function updateNetworkStatus() {
    const isOnline = navigator.onLine;
    const statusElement = document.getElementById('network-status');
    
    if (statusElement) {
      statusElement.textContent = isOnline ? 'Online' : 'Offline';
      statusElement.className = isOnline ? 'online' : 'offline';
    }
  }

  // Monitor network status
  window.addEventListener('online', updateNetworkStatus);
  window.addEventListener('offline', updateNetworkStatus);

  // Show reload prompt for chunk errors
  function showReloadPrompt() {
    const existingPrompt = document.getElementById('reload-prompt');
    if (existingPrompt) return;

    const prompt = document.createElement('div');
    prompt.id = 'reload-prompt';
    prompt.className = 'error-prompt';
    prompt.innerHTML = `
      <div class="error-prompt-content">
        <h3>Update Available</h3>
        <p>The website has been updated. Please reload to get the latest version.</p>
        <button onclick="window.location.reload()" class="button button-primary">
          Reload Page
        </button>
      </div>
    `;
    
    document.body.appendChild(prompt);
    
    // Auto-hide after 10 seconds
    setTimeout(() => {
      if (prompt.parentNode) {
        prompt.parentNode.removeChild(prompt);
      }
    }, 10000);
  }

  // Show network error
  function showNetworkError() {
    const existingError = document.getElementById('network-error');
    if (existingError) return;

    const error = document.createElement('div');
    error.id = 'network-error';
    error.className = 'error-prompt network-error';
    error.innerHTML = `
      <div class="error-prompt-content">
        <h3>Connection Issue</h3>
        <p>There seems to be a network problem. Some features may not work properly.</p>
        <button onclick="this.parentElement.parentElement.remove()" class="button button-muted">
          Dismiss
        </button>
      </div>
    `;
    
    document.body.appendChild(error);
    
    // Auto-hide when back online
    const checkOnline = () => {
      if (navigator.onLine && error.parentNode) {
        error.parentNode.removeChild(error);
      } else {
        setTimeout(checkOnline, 1000);
      }
    };
    checkOnline();
  }

  // Image loading fallbacks
  function handleImageErrors() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      img.addEventListener('error', function() {
        // Replace with placeholder or hide
        this.style.display = 'none';
        console.warn('Image failed to load:', this.src);
      });
    });
  }

  // Font loading fallbacks
  function handleFontFailures() {
    if ('fonts' in document) {
      document.fonts.ready.then(() => {
        console.info('Fonts loaded successfully');
      }).catch(() => {
        console.warn('Some fonts failed to load, using fallbacks');
        // Add fallback font class
        document.body.classList.add('fonts-failed');
      });
    }
  }

  // Audio fallback handling
  function handleAudioFailures() {
    const audioElements = document.querySelectorAll('audio');
    audioElements.forEach(audio => {
      audio.addEventListener('error', function() {
        console.warn('Audio failed to load:', this.src);
        // Hide audio controls if audio fails
        this.style.display = 'none';
      });
    });
  }

  // Initialize error handling when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeErrorHandling);
  } else {
    initializeErrorHandling();
  }

  function initializeErrorHandling() {
    handleImageErrors();
    handleFontFailures();
    handleAudioFailures();
    updateNetworkStatus();
  }

  // CSS for error prompts
  const errorStyles = `
    .error-prompt {
      position: fixed;
      top: 20px;
      right: 20px;
      z-index: 10000;
      max-width: 300px;
      background: var(--color-surface-strong, rgba(18, 28, 50, 0.95));
      border: 1px solid var(--color-primary, #0a9396);
      border-radius: 8px;
      padding: 1rem;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
      backdrop-filter: blur(10px);
    }

    .error-prompt-content h3 {
      margin: 0 0 0.5rem 0;
      color: var(--color-primary-bright, #5de1e4);
      font-size: 1rem;
    }

    .error-prompt-content p {
      margin: 0 0 1rem 0;
      color: var(--color-text-muted, #9aa7bd);
      font-size: 0.9rem;
      line-height: 1.4;
    }

    .error-prompt-content .button {
      width: 100%;
      font-size: 0.9rem;
      padding: 0.5rem 1rem;
    }

    .network-error {
      border-color: #ff6b6b;
    }

    .network-error h3 {
      color: #ff6b6b;
    }

    .fonts-failed {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    }

    @media (max-width: 640px) {
      .error-prompt {
        top: 10px;
        right: 10px;
        left: 10px;
        max-width: none;
      }
    }
  `;

  // Inject error handling styles
  const styleSheet = document.createElement('style');
  styleSheet.textContent = errorStyles;
  document.head.appendChild(styleSheet);

})();
