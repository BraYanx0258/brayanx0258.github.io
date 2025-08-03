document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const header = document.querySelector('.sticky-header');
  const menuToggle = document.getElementById('menuToggle');
  const mobileNav = document.getElementById('mobileNav');
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
  const sections = document.querySelectorAll('section[id]');
  
  // Mobile menu toggle
  menuToggle.addEventListener('click', () => {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', !isExpanded);
    mobileNav.classList.toggle('active');
    document.body.style.overflow = isExpanded ? 'auto' : 'hidden';
    
    // Toggle logo color when menu is open
    const logoIcon = document.querySelector('.logo-icon');
    const logoText = document.querySelector('.logo-text');
    
    if (!isExpanded) {
      // Menu is opening
      logoIcon.style.stroke = 'var(--primary)';
      logoText.style.background = 'var(--primary)';
      logoText.style.webkitTextFillColor = 'transparent';
    } else {
      // Menu is closing
      logoIcon.style.stroke = 'var(--primary)';
      logoText.style.background = 'linear-gradient(90deg, var(--primary) 0%, var(--primary-dark) 100%)';
      logoText.style.webkitTextFillColor = 'transparent';
    }
  });
  
  // Close mobile menu when clicking on a link
  document.querySelectorAll('.mobile-nav-link, .mobile-cta').forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = 'auto';
    });
  });
  
  // Add scroll event for header
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add/remove scrolled class based on scroll position
    if (currentScroll <= 0) {
      header.classList.remove('scrolled');
      return;
    }
    
    if (currentScroll > 0) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    
    // Hide/show header on scroll
    if (currentScroll <= 0) {
      header.style.transform = 'translateY(0)';
      return;
    }
    
    if (currentScroll > lastScroll && currentScroll > 100) {
      // Scrolling down
      header.style.transform = 'translateY(-100%)';
    } else if (currentScroll < lastScroll) {
      // Scrolling up
      header.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
    
    // Update active section in navigation
    updateActiveSection();
  });
  
  // Update active section based on scroll position
  function updateActiveSection() {
    let currentSection = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      
      if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
        currentSection = section.getAttribute('id');
      }
    });
    
    // Update active state for all nav links
    navLinks.forEach(link => {
      const href = link.getAttribute('href').substring(1);
      if (href === currentSection) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Initialize
  updateActiveSection();
  
  // Add loaded class to body to enable transitions
  document.body.classList.add('loaded');
});
