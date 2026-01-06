import React from 'react';

const Hero = () => {
    return (
        <section id="inicio" className="hero-section">
            <div className="hero-background">
                <div className="bg-gradient-overlay"></div>
                <div className="bg-blob blob-1"></div>
                <div className="bg-blob blob-2"></div>
                <div className="bg-blob blob-3"></div>
            </div>

            <div className="container hero-container">
                <div className="hero-content">
                    <div className="hero-badge-container">
                        <span className="badge badge-secondary">Tu mejor versión</span>
                    </div>

                    <h1 className="hero-title">
                        Descubre tu potencial en
                        <span className="gradient-text"> Lina García</span>
                    </h1>

                    <p className="hero-subtitle">
                        <span className="subtitle-text">
                            "El poder está en ti"
                            <span className="underline-gradient"></span>
                        </span>
                    </p>

                    <p className="hero-description">
                        Transforma tu cuerpo y mente con nuestros programas personalizados de entrenamiento y bienestar.
                    </p>

                    <div className="hero-cta-container">
                        <button
                            className="btn btn-primary whatsapp-btn"
                            onClick={() => window.open('https://wa.me/573123973657?text=Hola,%20me%20gustaría%20conocer%20más%20sobre%20los%20planes%20de%20entrenamiento%20que%20ofrecen.', '_blank')}
                        >
                            Conoce nuestros planes
                        </button>
                        <button
                            className="btn btn-outline whatsapp-btn"
                            onClick={() => window.open('https://wa.me/573123973657?text=Hola,%20me%20gustaría%20agendar%20una%20visita%20para%20conocer%20el%20gimnasio%20y%20tomar%20la%20clase%20gratuita%20de%20prueba.', '_blank')}
                        >
                            Agendar visita
                            <svg className="btn-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="9 18 15 12 9 6"></polyline>
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="hero-image-wrapper">
                    <div className="gradient-overlay"></div>
                    <img src="/foto-grupal.jpg" alt="Gimnasio Lina García" className="hero-image" />
                    <div className="hero-decoration">
                        <div className="decoration-corner top-right"></div>
                        <div className="decoration-corner bottom-left"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
