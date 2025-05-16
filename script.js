document.addEventListener('DOMContentLoaded', function() {
  // Menú móvil
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', function() {
      menuToggle.classList.toggle('active');
      mobileMenu.classList.toggle('active');
      
      // Prevenir scroll cuando el menú está abierto
      document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });
    
    // Cerrar menú al hacer clic en un enlace
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', function() {
        menuToggle.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }
  
  // Navegación activa
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  
  function setActiveLink() {
    let scrollPosition = window.scrollY;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        // Desktop nav
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('data-section') === sectionId) {
            link.classList.add('active');
          }
        });
        
        // Mobile nav
        mobileNavLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('data-section') === sectionId) {
            link.classList.add('active');
          }
        });
      }
    });
  }
  
  window.addEventListener('scroll', setActiveLink);
  setActiveLink();
  
  // Animación de tarjetas al hacer scroll
  const revealCards = document.querySelectorAll('.reveal-card');
  
  function revealOnScroll() {
    revealCards.forEach(card => {
      const cardTop = card.getBoundingClientRect().top;
      const triggerPoint = window.innerHeight * 0.8;
      
      if (cardTop < triggerPoint) {
        card.classList.add('revealed');
      }
    });
  }
  
  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();
  
  // Tabs de productos
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabContents = document.querySelectorAll('.tab-content');
  
  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const tabId = button.getAttribute('data-tab');
      
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));
      
      button.classList.add('active');
      document.getElementById(`tab-${tabId}`).classList.add('active');
    });
  });
  
  // Formulario de contacto
  const contactForm = document.querySelector('.contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Aquí iría la lógica para enviar el formulario
      alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
      contactForm.reset();
    });
  }
  
  // Animación suave para enlaces internos
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        // Ajustar el desplazamiento según el tamaño de la pantalla
        const offset = window.innerWidth < 768 ? 60 : 80;
        
        window.scrollTo({
          top: targetElement.offsetTop - offset,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Inicializar animaciones
  function initAnimations() {
    // Asegurarse de que las animaciones con delay se muestren correctamente
    const animatedElements = document.querySelectorAll('.fade-in');
    animatedElements.forEach(el => {
      const delay = el.style.animationDelay;
      if (delay) {
        setTimeout(() => {
          el.style.opacity = 1;
        }, parseFloat(delay) * 1000);
      }
    });
  }
  
  // Ajustar altura en dispositivos móviles (para el 100vh)
  function setMobileHeight() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
  
  window.addEventListener('resize', setMobileHeight);
  setMobileHeight();
  
  // Optimizar carga de imágenes
  const lazyImages = document.querySelectorAll('img');
  
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.src; // Asegurarse de que la imagen se cargue
          imageObserver.unobserve(img);
        }
      });
    });
    
    lazyImages.forEach(img => {
      imageObserver.observe(img);
    });
  }
  
  // Detectar resolución de pantalla para optimizaciones específicas
  function handleScreenSizeChanges() {
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    const isLargeDesktop = window.matchMedia("(min-width: 1920px)").matches;
    
    // Ajustes específicos para pantallas grandes (1920x1080)
    if (isLargeDesktop) {
      document.documentElement.classList.add('large-screen');
    } else {
      document.documentElement.classList.remove('large-screen');
    }
    
    // Ajustes para móviles vs desktop
    if (!isDesktop) {
      document.documentElement.classList.add('mobile-view');
    } else {
      document.documentElement.classList.remove('mobile-view');
    }
  }
  
  window.addEventListener('resize', handleScreenSizeChanges);
  handleScreenSizeChanges();
  
  initAnimations();

  // Botón de WhatsApp
  document.querySelectorAll('.whatsapp-btn').forEach(button => {
    button.addEventListener('click', function() {
      const message = this.getAttribute('data-message');
      const phoneNumber = '573123973657'; // Número de WhatsApp de Lina
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');
    });
  });
});