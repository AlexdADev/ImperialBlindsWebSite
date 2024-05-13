import React from 'react';
import './landingpage.css';
import logo1 from '../img/logo1.svg';
import { useSpring, animated } from 'react-spring';
import { Footer } from './components/FooterApp';
import { SliderGaleri } from './components/SliderGaleri';

function Number({ n }) {
    const { number } = useSpring({
        from: { number: 0 },
        number: n,
        delay: 200,
        config: { mass: 1, tension: 20, friction: 10 },
    });
    return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>
}

export const LandingPage = () => {
    return (
        <>
            <div id="introPage" class="container-fluid">
                <img src={logo1} alt="Logo de la empresa" class="logo animate__animated" />
                <div id="text01" className='animate__animated animate__fadeInUp'>
                    <p id='textparff' >
                        Empresa líder en decoración de interiores
                        especializada en la fabricación y distribución de productos de alta calidad.
                        Nuestra selección de colores, materiales y texturas ofrece la manera perfecta de transformar cualquier interior en algo verdaderamente único.
                    </p>
                    <button id="comprar" class="btn btn-primary"><a href='#galeriShop'>Comprar</a></button>
                </div>
            </div>
            <div id='textContent1' className='container-fluid'>
                <div id='textborder' className='row'>
                    <div id='text001' className=' animate__animated animate__fadeInRight '>
                        El compromiso con la <b>satisfacción</b> del <b>cliente</b> se
                        refleja en nuestro servicio <b>personalizado</b>.
                    </div>
                    <div id='text002' className='animate__animated animate__fadeInLeft'>
                        <div id='text002' className='animate__animated animate__fadeInLeft'>
                            <b>Instalación</b> y <b>asesoramiento</b>: garantizamos atención al detalle.
                        </div>
                    </div>
                </div>
            </div>
            <div id="galeriShop"></div>
            <SliderGaleri/>
            <div id='textContent2'>
                <div id='text003'>
                    <b id='fontlong'><Number n={6} /></b><p>Years in the Industry</p>
                </div>
                <div id='text004'>
                    <b id='fontlong'><Number n={400} /></b><p>Clients satisfied</p>
                </div>
            </div>
            <br />
            <br />
            <Footer />
        </>
    )
}
