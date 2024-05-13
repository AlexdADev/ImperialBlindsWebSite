import React from "react";
import emailjs from 'emailjs-com';
import './Mails.css'


export default function Mails() {

    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_0kimbyv', 'template_f512nce', e.target, 'dXjM5XK_RlYrKxLbZ')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };

    //  service_md8ezek’ es el ID del servicio de correo electrónico.
    // ‘template_2tac2fm’ es el ID de la plantilla de correo electrónico.
    // e.target es el formulario que se está enviando.
    // 94eDvL9TNP9apfe74 es el ID del usuario de EmailJS

    return (
        <div className='container-border'>
            <form className='row' onSubmit={sendEmail}>
                <div className='box'>
                    <input type='text' name='name' className='form-control' placeholder="Name" />
                </div>
                <div className='box'>
                    <input type='email' name='user_email' className='form-control' placeholder="example.example@gmail.com" />
                </div>
                <div className='box'>
                    <textarea name='message' rows='4' className='form-control'  placeholder="Leave your comment" />
                </div>
                <br />
                <input  id="sendbox" type='submit' value='Send' className='form-control btn btn-primary' />
            </form>
        </div>
    )
}
