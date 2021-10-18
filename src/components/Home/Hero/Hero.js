import React from 'react';
import caru1 from '../../../images/carusel/caru1.png'
import caru2 from '../../../images/carusel/caru2.png'
import caru3 from '../../../images/carusel/caru3.png'

const Hero = () => {
    return (
        <div className="container mb-5">
            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <img src={caru1} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block text-info bg-dark fs-1 text">
                            <h1>Welcome to Splash spa</h1>
                            <h2>Its our mission your style and healthy  life is our best service always.</h2>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={caru2} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h1>Your good healthy life</h1>
                            <h2>Get most of healthy life get touct us</h2>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={caru3} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h1>The first position in orgin</h1>
                            <h2>Your happyness our business</h2>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Hero;