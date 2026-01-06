import React from 'react';

const CTA = () => {
    return (
        <section className="cta-section">
            <div className="container text-center">
                <h2 className="cta-title">¿Listo para transformar tu vida?</h2>
                <p className="cta-text">
                    Recuerda, "El poder está en ti". Únete a nuestra comunidad y comienza tu viaje hacia una vida más
                    saludable y plena.
                </p>
                <button
                    className="btn btn-light whatsapp-btn"
                    onClick={() => window.open('https://wa.me/573123973657?text=Hola,%20estoy%20interesado%20en%20comenzar%20mi%20transformación%20con%20ustedes.%20Me%20gustaría%20agendar%20mi%20clase%20gratuita%20de%20prueba.', '_blank')}
                >
                    Comienza hoy con tu clase GRATIS
                </button>

                <div className="cta-decoration">
                    <div className="decoration-corner top-left"></div>
                    <div className="decoration-corner bottom-right"></div>
                </div>
            </div>
        </section>
    );
}

export default CTA;
