import React from 'react';

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="footer-grid">
                        <div className="footer-about">
                            <div className="footer-logo">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00B4A0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon">
                                    <path d="M6.5 6.5h11"></path>
                                    <path d="M6.5 17.5h11"></path>
                                    <path d="M6 12h4"></path>
                                    <path d="M14 12h4"></path>
                                    <path d="M5 6.5v11"></path>
                                    <path d="M19 6.5v11"></path>
                                </svg>
                                <span className="logo-text">Lina García</span>
                            </div>
                            <p className="footer-description">
                                Tu gimnasio de confianza para alcanzar tus metas de fitness y bienestar.
                            </p>
                            <div className="footer-social">
                                <a href="https://www.instagram.com/linagarcial_?igsh=ZzdxaXFwYXQ2dXU4" className="social-link" target="_blank" rel="noreferrer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                    </svg>
                                </a>
                                <a href="https://www.facebook.com/linagarciaentrenamiento" className="social-link" target="_blank" rel="noreferrer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div className="footer-links">
                            <h3 className="footer-title">Enlaces rápidos</h3>
                            <ul className="footer-menu">
                                <li><a href="#inicio">Inicio</a></li>
                                <li><a href="#servicios">Servicios</a></li>
                                <li><a href="#entrenamiento">Entrenamiento</a></li>
                                <li><a href="#planes">Planes</a></li>
                                <li><a href="#productos">Productos</a></li>
                                <li><a href="#testimonios">Testimonios</a></li>
                                <li><a href="#ubicacion">Ubicación</a></li>
                            </ul>
                        </div>

                        <div className="footer-hours">
                            <h3 className="footer-title">Horarios</h3>
                            <ul className="footer-schedule">
                                <li>Lunes - Viernes: 7:00 AM - 9:00 PM</li>
                                <li>Sábados: 8:00 AM - 6:00 PM</li>
                                <li>Domingos: Cerrado</li>
                            </ul>
                        </div>

                        <div className="footer-contact">
                            <h3 className="footer-title">Contacto</h3>
                            <ul className="footer-contact-info">
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00B4A0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                    </svg>
                                    <a href="tel:+573123973657" className="phone-link">+57 312 397 3657</a>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6C63FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                                    </svg>
                                    <a href="https://wa.me/573123973657" className="whatsapp-link" target="_blank" rel="noreferrer">WhatsApp</a>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A5B4FC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                        <circle cx="12" cy="10" r="3"></circle>
                                    </svg>
                                    <a href="https://maps.google.com/?q=Monserrate,+Cl.+12+A+%237-39,+Santa+Rosa+de+Cabal,+Risaralda" className="location-link" target="_blank" rel="noreferrer">Monserrate, Cl. 12 A #7-39, Santa Rosa de Cabal, Risaralda.</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <p>&copy; 2026 Gimnasio Lina García. Todos los derechos reservados.</p>
                    </div>
                </div>
            </footer>

            {/* WhatsApp Floating Button */}
            <a href="https://wa.me/573123973657" className="whatsapp-float" target="_blank" rel="noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
            </a>
        </>
    );
};

export default Footer;
