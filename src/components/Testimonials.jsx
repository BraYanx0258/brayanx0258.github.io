import React from 'react';

const Testimonials = () => {
    return (
        <section id="testimonios" className="section-padding bg-gradient-light">
            <div className="container">
                <div className="text-center mb-16">
                    <span className="badge badge-secondary">Testimonios</span>
                    <h2 className="section-title gradient-text">Lo que dicen nuestros clientes</h2>
                    <p className="section-description">
                        Historias reales de transformación y éxito de nuestra comunidad.
                    </p>
                </div>

                <div className="testimonials-grid">
                    <div className="testimonial-card">
                        <p className="testimonial-text">"El método de Lina García cambió mi vida. Perdí peso y gané confianza en mí misma. Los entrenadores son increíbles y siempre me motivan a dar lo mejor."</p>
                        <h3 className="testimonial-name">- María López</h3>
                    </div>
                    <div className="testimonial-card">
                        <p className="testimonial-text">"Las clases son dinámicas y los entrenadores son muy profesionales. El ambiente es súper motivador. ¡Recomendado 100%!"</p>
                        <h3 className="testimonial-name">- Juan Pérez</h3>
                    </div>
                    <div className="testimonial-card">
                        <p className="testimonial-text">"Después de años sin hacer ejercicio, encontré en Lina García el lugar perfecto para retomar mi rutina. Las clases se adaptan a mi nivel y he visto resultados increíbles."</p>
                        <h3 className="testimonial-name">- Ana Rodríguez</h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
