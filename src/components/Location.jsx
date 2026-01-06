import React from 'react';

const Location = () => {
    return (
        <section id="ubicacion" className="section-padding bg-gradient-light">
            <div className="container">
                <div className="text-center mb-16">
                    <span className="badge badge-secondary">Ubicación</span>
                    <h2 className="section-title">Encuéntranos</h2>
                    <p className="section-description">
                        Visítanos en: <strong>Monserrate, Cl. 12 A #7-39, Santa Rosa de Cabal, Risaralda</strong>.
                    </p>
                </div>
                <div className="map-container">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!4v1747397346781!6m8!1m7!1sof1nDpzbwAAF12m0GpnS-w!2m2!1d4.867082590708701!2d-75.61511730861243!3f113.23600496843537!4f-1.6737971186871334!5f0.7820865974627469"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Ubicación Gimnasio Lina García"
                    ></iframe>
                </div>
            </div>
        </section>
    );
}

export default Location;
