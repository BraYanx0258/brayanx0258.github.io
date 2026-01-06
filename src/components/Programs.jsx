import React from 'react';

const Programs = () => {
    return (
        <section className="section-padding bg-light">
            <div className="container">
                <div className="text-center mb-16">
                    <span className="badge badge-primary">Nuestros Programas</span>
                    <h2 className="section-title">Transforma tu cuerpo y mente</h2>
                    <p className="section-description">
                        Descubre nuestros programas diseñados para ayudarte a alcanzar tus metas de fitness y bienestar, sin importar tu nivel de experiencia.
                    </p>
                </div>

                <div className="programs-grid">
                    {/* Programa Presencial */}
                    <div className="program-card fade-in" style={{ '--accent-color': '#00B4A0', '--accent-light': 'rgba(0, 180, 160, 0.1)' }}>
                        <div className="program-card-inner">
                            <div className="program-icon">
                                <svg width="56" height="56" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path d="M3 9h18v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9zm0 0V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v2" />
                                    <path d="M7 5v2h10V5a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2z" />
                                    <path d="M12 12v4m-2-2h4" />
                                </svg>
                            </div>
                            <h3 className="program-title">Entrenamiento Presencial</h3>
                            <p className="program-description">Entrena en nuestras instalaciones con equipos de última generación y el apoyo de entrenadores certificados. Incluye acceso ilimitado a clases grupales.</p>
                            <ul className="program-features">
                                <li className="feature">Acceso ilimitado al gimnasio</li>
                                <li className="feature">Clases grupales incluidas</li>
                                <li className="feature">Asesoramiento personalizado</li>
                                <li className="feature">Rutinas personalizadas</li>
                            </ul>
                            <button
                                className="program-button whatsapp-btn"
                                onClick={() => window.open('https://wa.me/573123973657?text=Hola,%20me%20interesa%20el%20programa%20de%20entrenamiento%20presencial.%20¿Podrían%20darme%20más%20información%3F', '_blank')}
                            >
                                Más información
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14" />
                                    <path d="m12 5 7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Programa Virtual */}
                    <div className="program-card fade-in" style={{ '--accent-color': '#6C63FF', '--accent-light': 'rgba(108, 99, 255, 0.1)' }} data-delay="0.2s">
                        <div className="program-card-inner">
                            <div className="program-icon">
                                <svg width="56" height="56" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <rect x="2" y="4" width="20" height="16" rx="2" ry="2" />
                                    <path d="m2 8 7.89 5.26a2 2 0 0 0 2.22 0L22 8" />
                                    <path d="M10 15h4" />
                                </svg>
                            </div>
                            <h3 className="program-title">Entrenamiento Virtual</h3>
                            <p className="program-description">Entrena desde la comodidad de tu hogar con nuestro programa virtual. Acceso a clases en vivo, rutinas personalizadas y seguimiento en línea.</p>
                            <ul className="program-features">
                                <li className="feature">Clases en vivo y grabadas</li>
                                <li className="feature">Seguimiento online</li>
                                <li className="feature">Comunidad virtual</li>
                                <li className="feature">Rutinas sin equipamiento</li>
                            </ul>
                            <button
                                className="program-button whatsapp-btn"
                                onClick={() => window.open('https://wa.me/573123973657?text=Hola,%20me%20interesa%20el%20programa%20de%20entrenamiento%20virtual.%20¿Podrían%20darme%20más%20información%3F', '_blank')}
                            >
                                Más información
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14" />
                                    <path d="m12 5 7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Programa Personalizado */}
                    <div className="program-card fade-in" style={{ '--accent-color': '#FF6B6B', '--accent-light': 'rgba(255, 107, 107, 0.1)' }} data-delay="0.4s">
                        <div className="program-card-inner">
                            <div className="program-icon">
                                <svg width="56" height="56" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" />
                                    <path d="M12 6v6l4 2" />
                                    <path d="M12 16v1" />
                                </svg>
                            </div>
                            <h3 className="program-title">Plan Personalizado</h3>
                            <p className="program-description">Un programa 100% personalizado según tus objetivos, horarios y necesidades. Incluye plan de alimentación y entrenamiento adaptado a ti.</p>
                            <ul className="program-features">
                                <li className="feature">Evaluación inicial completa</li>
                                <li className="feature">Plan de alimentación</li>
                                <li className="feature">Sesiones 1 a 1</li>
                                <li className="feature">Ajustes periódicos</li>
                            </ul>
                            <button
                                className="program-button whatsapp-btn"
                                onClick={() => window.open('https://wa.me/573123973657?text=Hola,%20me%20interesa%20el%20programa%20personalizado.%20¿Podrían%20darme%20más%20información%3F', '_blank')}
                            >
                                Más información
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14" />
                                    <path d="m12 5 7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Programs;
