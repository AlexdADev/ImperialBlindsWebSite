import React from 'react'
import "./SliderGaleri.css"

import { NavLink } from 'react-router-dom';

export const SliderGaleri = () => {
    return (
        <div id="hero-carousel" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active c-item">
                    <img src="https://scontent-mia3-1.xx.fbcdn.net/v/t39.30808-6/327429309_1240656479994804_7729797223849737601_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=HW2I1ulYCDoQ7kNvgGpbaf8&_nc_ht=scontent-mia3-1.xx&oh=00_AfCK-oSTAOJDcWjD1NVsD2_FCDDqa6zH94S3Nm04cmFJ3w&oe=66388B6A" class="d-block w-100 c-img" alt="..." />
                    <div class="carousel-caption top-0 mt-4 ">
                        <p className='mt-5 fs-4 text-uppercase'>Elegancia que iluminara tu hogar , lograras si compras este estilo. </p>
                        <h5 className='display-1 fw-bolder text-capitalize'>Zebra</h5>
                        <button className='btn btn-primary px-4 py-2 fs-5 mt-5'> <NavLink to="/shop">Realice su pedido</NavLink></button>
                    </div>
                </div>
                <div class="carousel-item c-item">
                    <img src="https://scontent.cdninstagram.com/v/t39.30808-6/438675721_17965382429723501_4869912947058981774_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDEwODAuc2RyLmYzMDgwOCJ9&_nc_ht=scontent.cdninstagram.com&_nc_cat=105&_nc_ohc=9bKzLJ5KvHAQ7kNvgFmMDe_&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzM1MDY3NzcwMTUxNjY3ODI3NQ%3D%3D.2-ccb7-5&oh=00_AfBkWXdw4-U2SDvNzOuGI_EPkcyFvFykDAbAGDmTqPLqng&oe=66386CBC&_nc_sid=10d13b" class="d-block w-100 c-img" alt="..." />
                    <div class="carousel-caption top-0 mt-4 ">
                        <p className='mt-5 fs-4 text-uppercase'>La mejor opción para resistir adversidades del clima y brinder privacidad a los lugares</p>
                        <h5 className='display-1 fw-bolder text-capitalize'>Screen</h5>
                        <button className='btn btn-primary px-4 py-2 fs-5 mt-5'> <NavLink to="/shop">Realice su pedido</NavLink></button>
                    </div>
                </div>
                <div class="carousel-item c-item">
                    <img src="https://scontent.cdninstagram.com/v/t39.30808-6/435679843_449716084398873_6199502564873579509_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyLmYzMDgwOCJ9&_nc_ht=scontent.cdninstagram.com&_nc_cat=109&_nc_ohc=CrvM4LyekO0Q7kNvgHrWSFT&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzM0NDg0ODMyMzk3NjQ4MzQ5OA%3D%3D.2-ccb7-5&oh=00_AfB5vNmPPI4J0lY2heRih-QbQAxMi8JIj-57Tsbl0tylAw&oe=66386D0F&_nc_sid=10d13b" class="d-block w-100 c-img" alt="..." />
                    <div class="carousel-caption top-0 mt-4 ">
                        <p className='mt-5 fs-4 text-uppercase'>Producto para las personas que prefieren una máxima privaciad, sin que se filtre una gota de luz </p>
                        <h5 className='display-1 fw-bolder text-capitalize'>Block Out</h5>
                        <button className='btn btn-primary px-4 py-2 fs-5 mt-5'> <NavLink to="/shop">Realice su pedido</NavLink></button>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#hero-carousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#hero-carousel" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    )
}
