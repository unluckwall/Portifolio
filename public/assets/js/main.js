// Animate skills progress bars when visible
function animateSkills() {
  var skills = document.getElementById('skills');
  if (!skills) return;
  var rect = skills.getBoundingClientRect();
  if (rect.top < window.innerHeight - 60) {
    document.querySelectorAll('.skill-bar').forEach(function(bar) {
      var width = bar.getAttribute('data-width');
      bar.style.width = width + '%';
    });
    window.removeEventListener('scroll', animateSkills);
  }
}
window.addEventListener('scroll', animateSkills);
window.addEventListener('DOMContentLoaded', animateSkills);
// Fade-in animation on scroll
function revealOnScroll() {
  document.querySelectorAll('.fade-in').forEach(function(el) {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 60) {
      el.classList.add('visible');
    } else {
      el.classList.remove('visible');
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('DOMContentLoaded', revealOnScroll);
// Animation on scroll
function revealOnScroll() {
  document.querySelectorAll('.fade-in').forEach(function(el) {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 60) {
      el.classList.add('visible');
    } else {
      el.classList.remove('visible');
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('DOMContentLoaded', revealOnScroll);
// Modern Portfolio JS

document.addEventListener('DOMContentLoaded', function() {
  // Smooth scroll for nav links
  document.querySelectorAll('a.nav-link').forEach(function(link) {
    link.addEventListener('click', function(e) {
      const href = link.getAttribute('href');
      if (href.startsWith('#')) {
        e.preventDefault();
        document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Navbar shrink on scroll
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled');
    }
  });

  // Mobile sidebar toggle
  var body = document.body;
  var toggle = document.getElementById('mobile-sidebar-toggle');
  var overlay = document.getElementById('sidebar-overlay');
  var sidebar = document.getElementById('sidebar');

  function openSidebar() {
    body.classList.add('sidebar-open');
    // for accessibility
    sidebar && sidebar.setAttribute('aria-hidden', 'false');
    overlay && overlay.setAttribute('aria-hidden', 'false');
  }
  function closeSidebar() {
    body.classList.remove('sidebar-open');
    sidebar && sidebar.setAttribute('aria-hidden', 'true');
    overlay && overlay.setAttribute('aria-hidden', 'true');
  }

  if (toggle) {
    toggle.addEventListener('click', function() {
      if (body.classList.contains('sidebar-open')) closeSidebar(); else openSidebar();
    });
  }

  if (overlay) overlay.addEventListener('click', closeSidebar);

  // Close sidebar when a nav link is clicked on mobile
  document.querySelectorAll('#sidebar a.nav-link').forEach(function(link) {
    link.addEventListener('click', function() {
      if (window.innerWidth < 768) closeSidebar();
    });
  });
});
