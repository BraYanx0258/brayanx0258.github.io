import React, { useEffect, useRef } from 'react';

const Services = () => {
    const observerRef = useRef(null);

    useEffect(() => {
        observerRef.current = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.fade-in').forEach(el => {
            observerRef.current.observe(el);
        });

        return () => observerRef.current.disconnect();
    }, []);

    return (
        <section id="servicios" className="section-padding bg-light">
            <div className="container">
                <div className="text-center mb-16">
                    <span className="badge badge-primary">Nuestros Servicios</span>
                    <h2 className="section-title">Todo lo que necesitas para tu bienestar</h2>
                    <p className="section-description">
                        Ofrecemos una amplia gama de servicios diseñados para ayudarte a alcanzar tus objetivos de fitness y salud.
                    </p>
                </div>

                <div className="programs-grid">
                    {/* Entrenamiento Funcional */}
                    <div className="program-card fade-in" style={{ '--accent-color': '#00B4A0', '--accent-light': 'rgba(0, 180, 160, 0.1)' }}>
                        <div className="program-card-inner">
                            <div className="program-icon">
                                <svg width="56" height="56" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path d="M12 2v20M2 12h20" />
                                    <path d="m19 19-7-7 7-7M5 5l7 7-7 7" />
                                </svg>
                            </div>
                            <h3 className="program-title">Entrenamiento Funcional</h3>
                            <p className="program-description">Ejercicios que simulan movimientos de la vida diaria, mejorando tu fuerza, equilibrio y coordinación.</p>
                            <ul className="program-features">
                                <li className="feature">Movimientos naturales</li>
                                <li className="feature">Mejora la postura</li>
                                <li className="feature">Previene lesiones</li>
                                <li className="feature">Resultados rápidos</li>
                            </ul>
                        </div>
                    </div>

                    {/* Clases Grupales */}
                    <div className="program-card fade-in" style={{ '--accent-color': '#6C63FF', '--accent-light': 'rgba(108, 99, 255, 0.1)' }} data-delay="0.2s">
                        <div className="program-card-inner">
                            <div className="program-icon">
                                <svg width="56" height="56" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                    <circle cx="9" cy="7" r="4" />
                                    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                                </svg>
                            </div>
                            <h3 className="program-title">Clases Grupales</h3>
                            <p className="program-description">Entrena en grupo con la motivación y energía que necesitas para superar tus límites.</p>
                            <ul className="program-features">
                                <li className="feature">Ambiente motivador</li>
                                <li className="feature">Horarios flexibles</li>
                                <li className="feature">Diferentes intensidades</li>
                                <li className="feature">Comunidad activa</li>
                            </ul>
                        </div>
                    </div>

                    {/* Asesoramiento Nutricional */}
                    <div className="program-card fade-in" style={{ '--accent-color': '#FF6B6B', '--accent-light': 'rgba(255, 107, 107, 0.1)' }} data-delay="0.4s">
                        <div className="program-card-inner">
                            <div className="program-icon">
                                <svg width="56" height="56" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" />
                                    <path d="M8 12h8M12 8v8" />
                                </svg>
                            </div>
                            <h3 className="program-title">Asesoramiento Nutricional</h3>
                            <p className="program-description">Complementa tu entrenamiento con una alimentación adecuada y personalizada para tus objetivos.</p>
                            <ul className="program-features">
                                <li className="feature">Planes personalizados</li>
                                <li className="feature">Seguimiento continuo</li>
                                <li className="feature">Educación nutricional</li>
                                <li className="feature">Resultados sostenibles</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
