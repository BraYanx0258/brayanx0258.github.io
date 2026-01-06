import React from 'react';

const Methodology = () => {
    return (
        <section id="entrenamiento" className="section-padding bg-gradient-light">
            <div className="bg-blobs">
                <div className="bg-blob blob-4"></div>
                <div className="bg-blob blob-5"></div>
            </div>

            <div className="container">
                <div className="text-center mb-16">
                    <span className="badge badge-secondary">Metodología</span>
                    <h2 className="section-title gradient-text">Lina García Entrenamiento</h2>
                    <p className="section-description">
                        Descubre nuestro <strong>enfoque único</strong> para transformar tu cuerpo y mente.<br />
                        Nuestro método combina <strong>funcionalidad</strong>, <strong>personalización</strong> y <strong>resultados visibles</strong>.
                    </p>
                </div>

                <div className="entrenamiento-container">
                    <div className="entrenamiento-content">
                        <h3 className="entrenamiento-title">Nuestro Entrenamiento</h3>

                        <div className="entrenamiento-features">
                            <div className="feature-item">
                                <div className="feature-icon">
                                    {/* Material Icons replacement since we might not have the font loaded yet, using text fallback or SVG if prefered. Stick to span for now as index.html used google fonts */}
                                    <span className="material-icons">fitness_center</span>
                                </div>
                                <div className="feature-text">
                                    <strong>Entrenamiento funcional</strong>
                                    <p>Trabaja los músculos conjuntamente, simulando movimientos comunes.</p>
                                </div>
                            </div>

                            <div className="feature-item">
                                <div className="feature-icon">
                                    <span className="material-icons">schedule</span>
                                </div>
                                <div className="feature-text">
                                    <strong>Clases semipersonalizadas</strong>
                                    <p>Por horas, que comienzan a la hora en punto.</p>
                                </div>
                            </div>

                            <div className="feature-item">
                                <div className="feature-icon">
                                    <span className="material-icons">person</span>
                                </div>
                                <div className="feature-text">
                                    <strong>Adaptaciones personalizadas</strong>
                                    <p>Según las necesidades de cada persona.</p>
                                </div>
                            </div>

                            <div className="feature-item">
                                <div className="feature-icon">
                                    <span className="material-icons">local_fire_department</span>
                                </div>
                                <div className="feature-text">
                                    <strong>Enfoque en recomposición corporal</strong>
                                    <p>Pérdida de grasa y ganancia de masa muscular.</p>
                                </div>
                            </div>
                        </div>

                        <div className="entrenamiento-cta">
                            <p className="cta-description">
                                Avísanos qué día te gustaría venir y <strong>agenda tu clase gratuita</strong> 💙
                            </p>
                            <button
                                className="btn btn-primary whatsapp-btn"
                                onClick={() => window.open('https://wa.me/573123973657?text=Hola,%20me%20gustaría%20agendar%20mi%20clase%20gratuita%20de%20prueba.', '_blank')}
                            >
                                Agendar Clase Gratis
                            </button>
                        </div>
                    </div>

                    <div className="entrenamiento-image">
                        <img src="/3-entrenadores.png" alt="Entrenamiento funcional" className="responsive-image" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Methodology;
