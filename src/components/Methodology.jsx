import React from 'react';

const Methodology = () => {
    return (
        <section id="entrenamiento" className="section-padding bg-gradient-light overflow-hidden">
            <div className="bg-blobs">
                <div className="bg-blob blob-3"></div>
                <div className="bg-blob blob-1"></div>
            </div>

            <div className="container">
                <div className="methodology-grid">
                    <div className="methodology-content">
                        <span className="badge badge-secondary">Metodología</span>
                        <h2 className="section-title">Enfoque único para tu transformación</h2>
                        <p className="section-description text-left" style={{ maxWidth: '100%', margin: '0 0 2rem 0' }}>
                            Nuestro método combina <strong>funcionalidad</strong>, <strong>personalización</strong> y <strong>resultados visibles</strong> para que logres la mejor versión de ti.
                        </p>

                        <div className="methodology-features">
                            <div className="methodology-feature-card">
                                <div className="feature-icon-box">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6.5 6.5h11"></path><path d="M6.5 17.5h11"></path><path d="M6 12h4"></path><path d="M14 12h4"></path><path d="M5 6.5v11"></path><path d="M19 6.5v11"></path></svg>
                                </div>
                                <div>
                                    <h3 className="feature-title">Entrenamiento Funcional</h3>
                                    <p className="feature-desc">Trabaja los músculos conjuntamente, simulando movimientos reales.</p>
                                </div>
                            </div>

                            <div className="methodology-feature-card">
                                <div className="feature-icon-box">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                                </div>
                                <div>
                                    <h3 className="feature-title">Clases Semipersonalizadas</h3>
                                    <p className="feature-desc">Atención por horas que comienzan en punto para un control total.</p>
                                </div>
                            </div>

                            <div className="methodology-feature-card">
                                <div className="feature-icon-box">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                                </div>
                                <div>
                                    <h3 className="feature-title">Adaptaciones Personales</h3>
                                    <p className="feature-desc">Ejercicios ajustados específicamente a tus necesidades y nivel.</p>
                                </div>
                            </div>

                            <div className="methodology-feature-card">
                                <div className="feature-icon-box">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path></svg>
                                </div>
                                <div>
                                    <h3 className="feature-title">Recomposición Corporal</h3>
                                    <p className="feature-desc">Enfoque científico para perder grasa y ganar masa muscular.</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8">
                            <p className="mb-4 text-neutral-600">
                                Avísanos qué día te gustaría venir y <strong>agenda tu clase gratuita</strong> 💙
                            </p>
                            <button
                                className="btn btn-primary whatsapp-btn"
                                onClick={() => window.open('https://wa.me/573123973657?text=Hola,%20me%20gustaría%20agendar%20mi%20clase%20gratuita%20de%20prueba.', '_blank')}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                                Agendar Clase Gratis
                            </button>
                        </div>
                    </div>

                    <div className="methodology-image-wrapper">
                        {/* Using the image from the user's uploaded screenshot context, usually '3-entrenadores.png' or similar was used before. I'll stick to a nice visual representation. */}
                        <img src="/3-entrenadores.png" alt="Metodología de entrenamiento" className="methodology-image" />
                        <div className="experience-badge">
                            <span className="years">TOP</span>
                            <span className="text">Calidad</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Methodology;
