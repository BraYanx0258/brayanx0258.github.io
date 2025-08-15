document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.sticky-header');
  const menuToggle = document.getElementById('menuToggle');
  const mobileNav = document.getElementById('mobileNav');
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
  
  if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', () => {
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', !isExpanded);
      mobileNav.classList.toggle('active');
      document.body.style.overflow = isExpanded ? 'auto' : 'hidden';
      
      const logoIcon = document.querySelector('.logo-icon');
      const logoText = document.querySelector('.logo-text');
      
      if (logoIcon && logoText) {
        if (!isExpanded) {
          logoIcon.style.stroke = 'var(--primary)';
          logoText.style.background = 'var(--primary)';
          logoText.style.webkitTextFillColor = 'transparent';
        } else {
          logoIcon.style.stroke = 'var(--primary)';
          logoText.style.background = 'linear-gradient(90deg, var(--primary) 0%, var(--primary-dark) 100%)';
          logoText.style.webkitTextFillColor = 'transparent';
        }
      }
    });
  }
  
  document.querySelectorAll('.mobile-nav-link, .mobile-cta').forEach(link => {
    link.addEventListener('click', () => {
      if (mobileNav) {
        mobileNav.classList.remove('active');
        if (menuToggle) {
          menuToggle.setAttribute('aria-expanded', 'false');
        }
        document.body.style.overflow = 'auto';
      }
    });
  });
  
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
      header.classList.remove('scrolled');
    } else {
      header.classList.add('scrolled');
    }
    if (currentScroll <= 0) {
      header.style.transform = 'translateY(0)';
    } else if (currentScroll > lastScroll && currentScroll > 100) {
      header.style.transform = 'translateY(-100%)';
    } else if (currentScroll < lastScroll) {
      header.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
    
    updateActiveSection();
  });
  
  function updateActiveSection() {
    const sections = document.querySelectorAll('section[id]');
    let currentSection = '';
    
    if (window.pageYOffset > 100) {
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        
        if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
          currentSection = section.getAttribute('id');
        }
      });
    }
    
    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        const targetId = href.substring(1);
        if (targetId === currentSection) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      }
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const headerHeight = header ? header.offsetHeight : 80;
        const targetPosition = targetElement.offsetTop - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
        
        history.pushState(null, null, targetId);
      }
    });
  });
  
  updateActiveSection();
  document.body.classList.add('loaded');
});
