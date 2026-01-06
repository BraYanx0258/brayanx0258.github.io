import React from 'react';

const Team = () => {
    return (
        <section className="team-section">
            <div className="team-container">
                <div className="team-header">
                    <h2 className="team-title">
                        Conoce el equipo que te impulsa a dar lo mejor de ti <span className="text-primary">💙</span>
                    </h2>
                </div>

                <div className="team-image-container">
                    <img src="/3-entrenadores.png" alt="Equipo de entrenadores Lina García" className="team-image" />
                </div>

                <div className="team-quote">
                    <p className="team-quote-text">
                        Juntos te acompañamos a superar tus límites, a creer en ti y a disfrutar cada paso del proceso.
                        <span className="team-quote-author">¡El poder está en ti!</span>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Team;
