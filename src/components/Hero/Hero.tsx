import { useState, useEffect } from 'react';
import './Hero.scss';

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    { src: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=600&fit=crop', alt: 'Digital Innovation' },
    { src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=600&fit=crop', alt: 'Team Collaboration' },
    { src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&h=600&fit=crop', alt: 'Future Technology' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section id="home" className="hero">
      <div className="hero__carousel">
        {images.map((image, index) => (
          <div
            key={index}
            className={`hero__slide ${index === currentImage ? 'hero__slide--active' : ''}`}
          >
            <img src={image.src} alt={image.alt} className="hero__image" />
            <div className="hero__image-glass" />
          </div>
        ))}
        <div className="hero__overlay" />
        <div className="hero__glass-panel">
          <div className="hero__content">
            <div className="hero__text">
              <h2 className="hero__title">
                Transform Your Business
              </h2>
              <p className="hero__subtitle">
                Experience the future of digital innovation with cutting-edge solutions designed to elevate your business to new heights.
              </p>
              <div className="hero__actions">
                <div className="hero__action">
                  <button className="hero__button hero__button--primary">
                    Get Started
                  </button>
                </div>
                <div className="hero__action">
                  <button className="hero__button hero__button--secondary">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Carousel Indicators */}
        <div className="hero__indicators">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`hero__indicator ${index === currentImage ? 'hero__indicator--active' : ''}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        <div className="hero__glow hero__glow--1"></div>
        <div className="hero__glow hero__glow--2"></div>
      </div>
    </section>
  );
};

export default Hero;