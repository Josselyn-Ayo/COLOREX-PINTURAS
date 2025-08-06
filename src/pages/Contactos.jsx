import React, { useContext, useState } from 'react';
import '../css/contact.css';
import Header from '../component/Header';
import Main from '../component/Main';
import Footer from '../component/Footer';
import CarritoDashboard from '../component/CarritoDashboart';// Asegúrate que la ruta sea correcta
import { CartContext } from '../CartContext';

function Contactos() {
    const { carrito, carritoInfo } = useContext(CartContext);
    const [mostrarCarrito, setMostrarCarrito] = useState(false);

    // Calcular total
    const total = carrito.reduce((sum, prod) => sum + (prod.priceCurrent || 0), 0);

    const handleCheckout = () => {
        alert("Procesando pago...");
        // Puedes redirigir o limpiar el carrito aquí
    };

    return (
        <>
        <div className="top-banner"></div>
            <div className="banner-content">
                <span className="banner-text">
                    Pintura Para Interiores <br />
                    <span className="banner-small">Pintura de pared premium</span>
                </span>
                <div className="banner-offer">
                    <div className="box-banner">
                        <span className="offer-text">10%</span>
                    </div>
                    <span className="offer-small1">
                        Introduce el código <br />
                        <span className="offer-text1">DESCUENTO</span>
                    </span>
                </div>
                <div className="banner-images">
                    <img id="image-banner1" src="images/oferts/Pinturas_Oferta_1.png" alt="Oferta de Pinturas 1" />
                    <img id="image-banner2" src="images/oferts/Pinturas_Oferta2.png" alt="Oferta de Pinturas 2" />
                </div>
                <button className="banner-btn">COMPRAR AHORA</button>
            </div>
            
            <Header 
                carrito={carrito} 
                carritoInfo={carritoInfo} 
                onCarritoClick={() => setMostrarCarrito(true)} 
            />
            <Main />

            {mostrarCarrito && (
                <CarritoDashboard
                    carrito={carrito}
                    total={total}
                    onClose={() => setMostrarCarrito(false)}
                    onCheckout={handleCheckout}
                />
            )}

            

            <section className="contacto">
                <div className="formulario">
                    <h2>¿LISTO PARA TRANSFORMAR TU ESPACIO?</h2>
                    <p>Cuéntanos sobre tu proyecto y te ayudaremos a elegir los materiales perfectos.</p>
                    <form id="contact-form">
                        <div className="fila">
                            <div className="input-box">
                                <label>Nombre <span className="required">*</span></label>
                                <input type="text" name="nombre" required />
                            </div>
                            <div className="input-box">
                                <label>Apellido <span className="required">*</span></label>
                                <input type="text" name="apellido" required />
                            </div>
                        </div>
                        <div className="input-box">
                            <label>Correo Electrónico <span className="required">*</span></label>
                            <input type="email" name="email" required />
                        </div>
                        <div className="input-box">
                            <label>Teléfono <span className="opcional">(Opcional)</span></label>
                            <input type="tel" name="telefono" />
                        </div>
                        <div className="input-box">
                            <label>Ciudad / Región <span className="required">*</span></label>
                            <select name="ciudad" required>
                                <option value="">Seleccione una opción</option>
                                <option value="Quito">Quito</option>
                                <option value="Guayaquil">Guayaquil</option>
                                <option value="Cuenca">Cuenca</option>
                            </select>
                        </div>
                        <div className="input-box">
                            <label>Asunto <span className="opcional">(Opcional)</span></label>
                            <input type="text" name="asunto" />
                        </div>
                        <div className="campo">
                            <label>Mensaje</label>
                            <textarea name="mensaje" rows="4" placeholder="Describe tu proyecto..."></textarea>
                        </div>
                        <button type="submit" className="btn-enviar">ENVIAR MENSAJE</button>
                    </form>
                </div>

                <div className="info-contacto">
                    <div className="caja">
                        <h4>COLOREX - TALLER & TIENDA</h4>
                        <p>Avenida Cosme Osorio esquina con Alberto Orellana, Quito, Ecuador</p>
                        <p>(+593) 98 463 8360</p>
                        <a href="mailto:colorex@gmail.com">colorex@gmail.com</a>
                    </div>

                    <div className="caja">
                        <h4>ALMACÉN COLOREX - ZONA INDUSTRIAL</h4>
                        <p>Avenida Cosme Osorio esquina con Alberto Orellana, Quito, Ecuador</p>
                        <p>(+593) 98 463 8360</p>
                        <a href="mailto:contactocolorex@gmail.com">contactocolorex@gmail.com</a>
                    </div>

                    <div className="social">
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
            </section>

            <div className="imagen">
                <img src="images/stock_pictures/picture_10.png" alt="Persona pintando una pared azul" />
            </div>

            <section className="mapa-seccion">
                <div className="container">
                    <div className="mapa-titulo">
                        <h2>ENCUÉNTRANOS EN GOOGLE MAPS</h2>
                    </div>
                    <div className="mapa-container">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15959.475234147419!2d-78.51238!3d-0.22985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59a107e1cd44b%3A0x88a284628e5b2621!2sQuito%2C%20Ecuador!5e0!3m2!1sen!2sus!4v1635959876543!5m2!1sen!2sus"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Contactos;
