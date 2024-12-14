import React, { useState, useEffect } from 'react';
import './banner.css';

const Banner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slides = [
        { id: 1, title: 'Nuevos Baños', description: 'Lorem Ipsum', image: 'https://i.pinimg.com/550x/f4/28/cb/f428cb39fcd86876992e04391bfd7214.jpg' },
        { id: 2, title: 'Mantenimiento de cancha futból 5', description: 'Lorem Ipsum', image: 'https://sportmaster.mx/wp-content/uploads/CANCHA-FUTBOL-7.jpeg' },
        { id: 3, title: 'Nuevas actividades', description: 'Lorem Ipsum', image: 'https://amsterdamsportcenter.com.co/wp-content/uploads/2023/03/centro-deportivo-amsterdam-6-1.png' }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <div className="banner-container">
            <div className="banner">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`banner-slide ${index === currentIndex ? 'active' : ''}`}
                    >
                        <div className="banner-info">
                            <h2>{slide.title}</h2>
                            <p>{slide.description}</p>
                        </div>
                        <div
                            className="banner-image"
                            style={{ backgroundImage: `url(${slide.image})` }}
                        ></div>
                    </div>
                ))}
                <div className="banner-controls">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={index === currentIndex ? 'active' : ''}
                        ></button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Banner;
