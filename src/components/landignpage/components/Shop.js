import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './shop.css';
import emailjs from 'emailjs-com';

export const Shop = () => {
    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_0kimbyv', 'template_6xztn0q', e.target, 'dXjM5XK_RlYrKxLbZ')
           .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };

    const [showAlert, setShowAlert] = useState(false);
    const [user_email, setEmail] = useState('');
    const [user_name, setName] = useState('');
    const [direccion, setDireccion] = useState('');
    const [celular, setCelular] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault(); // Previene la recarga de la página
        setShowAlert(true); // Muestra la alerta
        sendEmail(event); // Envía el correo electrónico
    };

    const isFormValid = () => {
        return user_email.trim()!== '' && user_name.trim()!== '' && direccion.trim()!== '' && celular.trim()!== '';
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="container p-4" style={{ backgroundColor: '#e0f2ff', color: '#333' }}>
                <div className="row mb-3">
                    <div className="col-12 col-md-6">
                        <Link to="/" className="btn btn-primary">Regresar</Link>
                    </div>
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="user_option_scree">Seleccione tipo de screen</label>
                    <select className="form-select" id="opciones" name="user_options">
                        <option value="Block Out">Block Out</option>
                        <option value="Screen">Screen</option>
                        <option value="Zebra">Zebra</option>
                    </select>
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="user_color">Color de su pedido</label>
                    <input type="color" name="user_color" className="form-control" />
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="user_options_type">Seleccione modo:</label>
                    <select className="form-select" id="opciones" name="user_options_type">
                        <option value="Automatica">Automática</option>
                        <option value="Manual">Manual</option>
                    </select>
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="user_name">Nombre</label>
                    <input type="text" name="user_name" className="form-control" onChange={(e) => setName(e.target.value)} />
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="user_email">Email</label>
                    <input type="email" name="user_email" className="form-control" onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="direccion">Dirección</label>
                    <input type="text" id="direccion" name="user_direc" className="form-control" onChange={(e) => setDireccion(e.target.value)} />
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="user_number">Celular :</label>
                    <input type="tel" id="celular" name="user_cell" placeholder="000-000-0000" className="form-control" onChange={(e) => setCelular(e.target.value)} />
                </div>

                <div className="row">
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary float-end" disabled={!isFormValid()}>Enviar</button>
                    </div>
                </div>

                {showAlert && (
                    <div className="alert alert-success mt-3" role="alert">
                        <h4 className="alert-heading"><b>Gracias por confiar en nosotros</b></h4>
                        <p>Espere nuestra respuesta en unos momentos</p>
                        <hr />
                        <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
                    </div>
                )}
            </form>
        </>
    );
};