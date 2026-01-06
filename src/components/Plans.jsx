import React from 'react';
import Team from './Team';

const Plans = () => {
    return (
        <section id="planes" className="section-padding bg-gradient-light">
            <div className="bg-blobs">
                <div className="bg-blob blob-4"></div>
                <div className="bg-blob blob-5"></div>
            </div>

            <div className="container">
                <div className="text-center mb-12">
                    <span className="badge badge-secondary">Membresías</span>
                    <h2 className="section-title">Planes 2026 🩵</h2>
                    <p className="section-description">
                        Elige el plan que mejor se adapte a tus necesidades y comienza tu transformación hoy mismo.
                    </p>
                </div>

                {/* Free Trial Banner */}
                <div className="free-trial-banner reveal-card">
                    <div className="free-trial-content">
                        <div className="free-trial-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20 6L9 17l-5-5"></path>
                            </svg>
                        </div>
                        <div>
                            <h3 className="free-trial-title">¡PRIMERA CLASE GRATIS!</h3>
                            <p className="free-trial-text">Prueba nuestro método sin compromiso. Si te gusta, podrás acceder a cualquiera de nuestros planes.</p>
                        </div>
                    </div>
                    <button
                        className="btn btn-light whatsapp-btn"
                        onClick={() => window.open('https://wa.me/573123973657?text=Hola,%20me%20gustaría%20agendar%20mi%20clase%20gratuita%20de%20prueba.', '_blank')}
                    >
                        Reservar clase gratis
                    </button>
                </div>

                <div className="pricing-grid">
                    {/* Plan Completo */}
                    <div className="pricing-card">
                        <div className="pricing-header pricing-header-1">
                            <h3 className="pricing-title">Mensualidad Plan Completo 💪🏻</h3>
                        </div>
                        <div className="pricing-content">
                            <div className="pricing-price">
                                <span className="price gradient-text-1">$115.000</span>
                                <span className="period">/mes</span>
                            </div>
                            <ul className="pricing-features">
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00B4A0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="9 18 15 12 9 6"></polyline>
                                    </svg>
                                    Acceso ilimitado todos los días
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00B4A0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="9 18 15 12 9 6"></polyline>
                                    </svg>
                                    Horarios establecidos
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00B4A0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="9 18 15 12 9 6"></polyline>
                                    </svg>
                                    Evaluación física mensual
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00B4A0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="9 18 15 12 9 6"></polyline>
                                    </svg>
                                    Asesoría nutricional básica
                                </li>
                            </ul>
                            <button
                                className="btn btn-gradient-1 whatsapp-btn"
                                onClick={() => window.open('https://wa.me/573123973657?text=Hola,%20me%20interesa%20el%20Plan%20Completo%20de%20%24115.000/mes.', '_blank')}
                            >
                                Seleccionar plan
                            </button>
                        </div>
                    </div>

                    {/* Parejas */}
                    <div className="pricing-card">
                        <div className="pricing-header pricing-header-3">
                            <h3 className="pricing-title">Mensualidad Parejas 🥂</h3>
                        </div>
                        <div className="pricing-content">
                            <div className="pricing-price">
                                <span className="price gradient-text-3">$200.000</span>
                                <span className="period">/mes</span>
                            </div>
                            <p className="text-sm text-gray-500 mb-2 italic">($100.000 por persona)</p>
                            <ul className="pricing-features">
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A5B4FC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="9 18 15 12 9 6"></polyline>
                                    </svg>
                                    Para entrenar juntos
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A5B4FC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="9 18 15 12 9 6"></polyline>
                                    </svg>
                                    Deben pagar el mismo día
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A5B4FC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="9 18 15 12 9 6"></polyline>
                                    </svg>
                                    Asistir juntos
                                </li>
                            </ul>
                            <button
                                className="btn btn-gradient-3 whatsapp-btn"
                                onClick={() => window.open('https://wa.me/573123973657?text=Hola,%20me%20interesa%20el%20Plan%20Parejas%20de%20%24200.000/mes.', '_blank')}
                            >
                                Seleccionar plan
                            </button>
                        </div>
                    </div>

                    {/* 3 veces por semana */}
                    <div className="pricing-card">
                        <div className="pricing-header pricing-header-2">
                            <h3 className="pricing-title">Mensualidad 3 veces por semana 3️⃣</h3>
                        </div>
                        <div className="pricing-content">
                            <div className="pricing-price">
                                <span className="price gradient-text-2">$105.000</span>
                                <span className="period">/mes</span>
                            </div>
                            <ul className="pricing-features">
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6C63FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="9 18 15 12 9 6"></polyline>
                                    </svg>
                                    12 clases al mes
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6C63FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="9 18 15 12 9 6"></polyline>
                                    </svg>
                                    Evaluación física mensual
                                </li>
                            </ul>
                            <button
                                className="btn btn-gradient-2 whatsapp-btn"
                                onClick={() => window.open('https://wa.me/573123973657?text=Hola,%20me%20interesa%20el%20Plan%20de%203%20Días%20por%20Semana%20de%20%24105.000/mes.', '_blank')}
                            >
                                Seleccionar plan
                            </button>
                        </div>
                    </div>

                    {/* 2 veces por semana (NEW) */}
                    <div className="pricing-card">
                        <div className="pricing-header" style={{ background: 'linear-gradient(135deg, #FF6B6B 0%, #FFA5A5 100%)', color: 'white', padding: '1.5rem', borderRadius: '1rem 1rem 0 0' }}>
                            <h3 className="pricing-title">Mensualidad 2 veces por semana 2️⃣</h3>
                        </div>
                        <div className="pricing-content">
                            <div className="pricing-price">
                                <span className="price" style={{ background: 'linear-gradient(135deg, #FF6B6B 0%, #FF8E8E 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>$75.000</span>
                                <span className="period">/mes</span>
                            </div>
                            <ul className="pricing-features">
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF6B6B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="9 18 15 12 9 6"></polyline>
                                    </svg>
                                    8 clases al mes
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF6B6B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="9 18 15 12 9 6"></polyline>
                                    </svg>
                                    Ideal para mantenimiento
                                </li>
                            </ul>
                            <button
                                className="btn whatsapp-btn"
                                style={{ background: 'linear-gradient(135deg, #FF6B6B 0%, #FF8E8E 100%)', color: 'white', boxShadow: '0 4px 6px -1px rgba(255, 107, 107, 0.4)' }}
                                onClick={() => window.open('https://wa.me/573123973657?text=Hola,%20me%20interesa%20el%20Plan%20de%202%20Días%20por%20Semana%20de%20%2475.000/mes.', '_blank')}
                            >
                                Seleccionar plan
                            </button>
                        </div>
                    </div>
                </div>

                <div className="pricing-grid-2 mt-8">
                    {/* Quincena */}
                    <div className="pricing-card">
                        <div className="pricing-header pricing-header-4">
                            <h3 className="pricing-title">Quincena 1️⃣5️⃣</h3>
                        </div>
                        <div className="pricing-content">
                            <div className="pricing-price">
                                <span className="price">$65.000</span>
                                <span className="period">/15 días</span>
                            </div>
                            <ul className="pricing-features">
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00B4A0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="9 18 15 12 9 6"></polyline>
                                    </svg>
                                    15 días de entrenamiento
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00B4A0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="9 18 15 12 9 6"></polyline>
                                    </svg>
                                    Acceso continuo
                                </li>
                            </ul>
                            <button
                                className="btn btn-gradient-4 whatsapp-btn"
                                onClick={() => window.open('https://wa.me/573123973657?text=Hola,%20me%20interesa%20el%20Plan%20Quincenal%20de%20%2465.000.', '_blank')}
                            >
                                Seleccionar plan
                            </button>
                        </div>
                    </div>

                    {/* Clase */}
                    <div className="pricing-card">
                        <div className="pricing-header pricing-header-4">
                            <h3 className="pricing-title">Clase Individual</h3>
                        </div>
                        <div className="pricing-content">
                            <div className="pricing-price">
                                <span className="price">$15.000</span>
                                <span className="period">/clase</span>
                            </div>
                            <ul className="pricing-features">
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00B4A0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="9 18 15 12 9 6"></polyline>
                                    </svg>
                                    Acceso a una clase específica
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00B4A0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="9 18 15 12 9 6"></polyline>
                                    </svg>
                                    Sin compromiso de membresía
                                </li>
                            </ul>
                            <button
                                className="btn btn-gradient-4 whatsapp-btn"
                                onClick={() => window.open('https://wa.me/573123973657?text=Hola,%20me%20interesa%20la%20Clase%20Individual%20de%20%2415.000.', '_blank')}
                            >
                                Seleccionar plan
                            </button>
                        </div>
                    </div>

                    {/* Team Members inside Cards (from original design) */}
                    {/* Maria */}
                    <div className="trainer-card">
                        <div className="trainer-image-container">
                            <img src="/maria.png" alt="María Arias" className="trainer-image" />
                        </div>
                        <div className="trainer-content">
                            <h3 className="trainer-name">María Arias</h3>
                            <p className="trainer-description">
                                Estudiante de actividad física. Siempre lista para motivarte y acompañarte en cada entrenamiento.
                            </p>
                        </div>
                    </div>

                    {/* Nicolás */}
                    <div className="trainer-card">
                        <div className="trainer-image-container">
                            <img src="/nicolas.png" alt="Nicolás" className="trainer-image" />
                        </div>
                        <div className="trainer-content">
                            <h3 className="trainer-name">Nicolás</h3>
                            <p className="trainer-description">
                                Profesional en ciencias del deporte y recreación. Estudiante de fisioterapia. Enfocado en tu bienestar integral.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Team Section */}
                <Team />
            </div>
        </section>
    );
};

export default Plans;
