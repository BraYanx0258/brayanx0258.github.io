import React, { useState } from 'react';

const Products = () => {
    const [activeTab, setActiveTab] = useState('all');

    // Helper to render product card (since reused in All tab and others ideally, but here manual duplication is fine to match HTML structure or better yet, data driven)
    // For now I'll stick to the HTML structure but using React conditional rendering for tabs.

    return (
        <section id="productos" className="section-padding bg-light">
            <div className="bg-blobs">
                <div className="bg-blob blob-8"></div>
                <div className="bg-blob blob-9"></div>
            </div>

            <div className="container">
                <div className="text-center mb-12">
                    <span className="badge badge-primary">Tienda</span>
                    <h2 className="section-title">Productos Destacados</h2>
                    <p className="section-description">
                        Descubre nuestra selección de productos de alta calidad para potenciar tu rendimiento y resultados.
                    </p>

                    <div className="tabs-container">
                        <button
                            className={`tab-button ${activeTab === 'all' ? 'active' : ''}`}
                            onClick={() => setActiveTab('all')}
                        >
                            Todos
                        </button>
                        <button
                            className={`tab-button ${activeTab === 'supplements' ? 'active' : ''}`}
                            onClick={() => setActiveTab('supplements')}
                        >
                            Suplementos
                        </button>
                        <button
                            className={`tab-button ${activeTab === 'accessories' ? 'active' : ''}`}
                            onClick={() => setActiveTab('accessories')}
                        >
                            Accesorios
                        </button>
                    </div>
                </div>

                {activeTab === 'all' && (
                    <div className="tab-content active fade-in">
                        <div className="products-grid">
                            {/* Creatina */}
                            <div className="product-card">
                                <div className="product-image-container">
                                    <img src="/producto_1.jpg" alt="Creatina Iron" className="product-image" />
                                </div>
                                <div className="product-content">
                                    <h3 className="product-name">Creatina Iron</h3>
                                    <p className="product-description">Creatina monohidratada de alta pureza para aumentar la fuerza y masa muscular. Ideal para deportistas y culturistas.</p>
                                    <div className="product-details">
                                        <span className="product-price">$130.000</span>
                                    </div>
                                </div>
                                <div className="product-footer">
                                    <a href="https://wa.me/573123973657?text=Hola%2C%20me%20interesa%20la%20Creatina%20Iron%20de%20%24130.000%20que%20vi%20en%20la%20página%20web.%20¿Podrías%20darme%20más%20información%3F" className="btn btn-primary btn-full whatsapp-btn" target="_blank" rel="noreferrer">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.966-.273-.099-.471-.148-.67.15-.197.297-.767.963-.94 1.16-.173.199-.347.221-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.795-1.484-1.784-1.66-2.087-.173-.297-.018-.458.13-.606.136-.133.296-.347.445-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.508-.172-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.345m-5.446 6.443h-.015c-1.77 0-3.524-.48-5.055-1.38l-.361-.214-3.741.982.998-3.648-.235-.375a9.44 9.44 0 0 1-1.45-5.026c0-5.221 4.25-9.469 9.473-9.469 2.533 0 4.914.984 6.704 2.768 1.789 1.78 2.775 4.15 2.774 6.667 0 5.223-4.251 9.475-9.457 9.475M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.462 0 .103 5.36.101 11.943c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652c1.746.943 3.71 1.444 5.71 1.447h.006c6.585 0 11.946-5.365 11.949-11.947 0-3.176-1.24-6.163-3.48-8.403" />
                                        </svg>
                                        Preguntar por WhatsApp
                                    </a>
                                </div>
                            </div>

                            {/* Gold Standard */}
                            <div className="product-card">
                                <div className="product-image-container">
                                    <img src="/producto_2.jpg" alt="Gold Standard" className="product-image" />
                                </div>
                                <div className="product-content">
                                    <h3 className="product-name">Gold Standard</h3>
                                    <p className="product-description">Proteína de suero de leche premium con 24g de proteína por porción. Sabor vanilla ice cream, ideal para recuperación muscular.</p>
                                    <div className="product-details">
                                        <span className="product-price">$219.000</span>
                                    </div>
                                </div>
                                <div className="product-footer">
                                    <a href="https://wa.me/573123973657?text=Hola%2C%20me%20interesa%20el%20Gold%20Standard%20de%20%24219.000%20que%20vi%20en%20la%20página%20web.%20¿Podrías%20darme%20más%20información%3F" className="btn btn-primary btn-full whatsapp-btn" target="_blank" rel="noreferrer">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.966-.273-.099-.471-.148-.67.15-.197.297-.767.963-.94 1.16-.173.199-.347.221-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.795-1.484-1.784-1.66-2.087-.173-.297-.018-.458.13-.606.136-.133.296-.347.445-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.508-.172-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.345m-5.446 6.443h-.015c-1.77 0-3.524-.48-5.055-1.38l-.361-.214-3.741.982.998-3.648-.235-.375a9.44 9.44 0 0 1-1.45-5.026c0-5.221 4.25-9.469 9.473-9.469 2.533 0 4.914.984 6.704 2.768 1.789 1.78 2.775 4.15 2.774 6.667 0 5.223-4.251 9.475-9.457 9.475M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.462 0 .103 5.36.101 11.943c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652c1.746.943 3.71 1.444 5.71 1.447h.006c6.585 0 11.946-5.365 11.949-11.947 0-3.176-1.24-6.163-3.48-8.403" />
                                        </svg>
                                        Preguntar por WhatsApp
                                    </a>
                                </div>
                            </div>

                            {/* Toallas */}
                            <div className="product-card">
                                <div className="product-image-container">
                                    <img src="/producto_3.jpg" alt="Toallas" className="product-image" />
                                </div>
                                <div className="product-content">
                                    <h3 className="product-name">Toallas</h3>
                                    <p className="product-description">Toallas de alta calidad para el gimnasio, perfectas para tu entrenamiento diario. Absorbentes y suaves al tacto.</p>
                                    <div className="product-details">
                                        <span className="product-price">$18.000</span>
                                    </div>
                                </div>
                                <div className="product-footer">
                                    <a href="https://wa.me/573123973657?text=Hola%2C%20me%20interesan%20las%20Toallas%20de%20%2418.000%20que%20vi%20en%20la%20página%20web.%20¿Podrías%20darme%20más%20información%3F" className="btn btn-primary btn-full whatsapp-btn" target="_blank" rel="noreferrer">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.966-.273-.099-.471-.148-.67.15-.197.297-.767.963-.94 1.16-.173.199-.347.221-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.795-1.484-1.784-1.66-2.087-.173-.297-.018-.458.13-.606.136-.133.296-.347.445-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.508-.172-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.345m-5.446 6.443h-.015c-1.77 0-3.524-.48-5.055-1.38l-.361-.214-3.741.982.998-3.648-.235-.375a9.44 9.44 0 0 1-1.45-5.026c0-5.221 4.25-9.469 9.473-9.469 2.533 0 4.914.984 6.704 2.768 1.789 1.78 2.775 4.15 2.774 6.667 0 5.223-4.251 9.475-9.457 9.475M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.462 0 .103 5.36.101 11.943c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652c1.746.943 3.71 1.444 5.71 1.447h.006c6.585 0 11.946-5.365 11.949-11.947 0-3.176-1.24-6.163-3.48-8.403" />
                                        </svg>
                                        Preguntar por WhatsApp
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Categories (Empty for now per current images, but structure ready) */}
                {activeTab === 'supplements' && (
                    <div className="tab-content active fade-in text-center p-8">
                        <p className="text-gray-500">Filtrado por suplementos (Mostrando todos por ahora)</p>
                        {/* Duplicate grid or filter map here */}
                        <div className="products-grid">
                            {/* Just showing Creatina + Gold Standard */}
                            <div className="product-card">
                                <div className="product-image-container">
                                    <img src="/producto_1.jpg" alt="Creatina Iron" className="product-image" />
                                </div>
                                <div className="product-content">
                                    <h3 className="product-name">Creatina Iron</h3>
                                    <div className="product-details"><span className="product-price">$130.000</span></div>
                                </div>
                            </div>
                            <div className="product-card">
                                <div className="product-image-container">
                                    <img src="/producto_2.jpg" alt="Gold Standard" className="product-image" />
                                </div>
                                <div className="product-content">
                                    <h3 className="product-name">Gold Standard</h3>
                                    <div className="product-details"><span className="product-price">$219.000</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'accessories' && (
                    <div className="tab-content active fade-in text-center p-8">
                        <p className="text-gray-500">Filtrado por accesorios (Mostrando todos por ahora)</p>
                        <div className="products-grid">
                            <div className="product-card">
                                <div className="product-image-container">
                                    <img src="/producto_3.jpg" alt="Toallas" className="product-image" />
                                </div>
                                <div className="product-content">
                                    <h3 className="product-name">Toallas</h3>
                                    <div className="product-details"><span className="product-price">$18.000</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Products;
