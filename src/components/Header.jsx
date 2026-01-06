import React, { useState, useEffect } from 'react';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('inicio');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);

            // Active section logic
            const sections = document.querySelectorAll('section[id]');
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (window.scrollY >= (sectionTop - 200)) {
                    current = section.getAttribute('id');
                }
            });
            if (current) setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    const closeMobileMenu = () => setIsMobileMenuOpen(false);

    return (
        <header className={`sticky-header ${isScrolled ? 'scrolled' : ''}`} style={isScrolled ? { background: 'rgba(255, 255, 255, 0.98)', boxShadow: '0 2px 20px rgba(0, 0, 0, 0.1)' } : {}}>
            <div className="container">
                <div className="nav-container">
                    {/* Logo */}
                    <a href="#inicio" className="logo-container" onClick={closeMobileMenu}>
                        <img src="/icon.png" alt="Lina García Logo" className="logo-icon" style={{ width: '30px', height: '25px' }} />
                        <span className="logo-text">Lina García</span>
                    </a>

                    {/* Desktop Navigation */}
                    <nav className="desktop-nav">
                        <div className="nav-links">
                            {['inicio', 'servicios', 'entrenamiento', 'planes', 'productos'].map((section) => (
                                <a
                                    key={section}
                                    href={`#${section}`}
                                    className={`nav-link ${activeSection === section ? 'active' : ''}`}
                                    onClick={() => setActiveSection(section)}
                                >
                                    <span>{section.charAt(0).toUpperCase() + section.slice(1)}</span>
                                    <span className="nav-indicator"></span>
                                </a>
                            ))}
                        </div>
                        <a href="#contacto" className="btn btn-primary nav-cta">
                            <span>Contacto</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                                <path d="M22 2L11 13"></path>
                                <path d="M22 2l-7 20-4-9-9-4 20-7z"></path>
                            </svg>
                        </a>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        id="menuToggle"
                        className="mobile-menu-button"
                        aria-label="Toggle menu"
                        aria-expanded={isMobileMenuOpen}
                        onClick={toggleMobileMenu}
                    >
                        <span className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}></span>
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div id="mobileMenu" className="mobile-menu" style={{ display: isMobileMenuOpen ? 'block' : 'none' }}>
                <div className="container">
                    {['inicio', 'servicios', 'entrenamiento', 'planes', 'productos', 'testimonios', 'ubicacion'].map((section) => (
                        <a
                            key={section}
                            href={`#${section}`}
                            className="mobile-nav-link"
                            onClick={closeMobileMenu}
                        >
                            {section.charAt(0).toUpperCase() + section.slice(1)}
                        </a>
                    ))}

                    <div className="mobile-menu-footer">
                        <button className="btn btn-primary btn-full whatsapp-btn" onClick={() => window.open('https://wa.me/573123973657?text=Hola,%20me%20gustaría%20obtener%20más%20información%20sobre%20el%20gimnasio%20Lina%20García.', '_blank')}>Empezar ahora</button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
