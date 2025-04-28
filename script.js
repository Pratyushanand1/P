// Example: Add smooth scrolling

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Hide loading screen after page load
window.addEventListener('load', function() {
  const loadingScreen = document.getElementById('loading-screen');
  loadingScreen.style.display = 'none';
});
