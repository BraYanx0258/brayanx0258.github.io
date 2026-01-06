import React from 'react';

const Team = () => {
    return (
        <section className="team-section">
            <div className="container">
                <div className="team-header text-center">
                    <h2 className="team-title">
                        Conoce el equipo que te impulsa a dar lo mejor de ti <span className="text-primary">💙</span>
                    </h2>
                </div>

                <div className="trainers-grid">
                    {/* Lina García */}
                    <div className="trainer-card">
                        <div className="trainer-image-container">
                            <img src="/lina.png" alt="Lina García" className="trainer-image" />
                        </div>
                        <div className="trainer-content">
                            <h3 className="trainer-name">Lina García</h3>
                            <p className="trainer-description">
                                Entrenadora personal fundadora. Apasionada por transformar vidas a través del movimiento y el bienestar integral.
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

                <div className="team-quote mt-8">
                    <p className="team-quote-text">
                        Juntos te acompañamos a superar tus límites, a creer en ti y a disfrutar cada paso del proceso.
                        <span className="team-quote-author" style={{ display: 'block', marginTop: '1rem', fontWeight: '700' }}>¡El poder está en ti!</span>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Team;
