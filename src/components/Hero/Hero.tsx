import { useState, useEffect } from 'react';
import './Hero.scss';

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    { src: 'https://picsum.photos/1000/500?random=1', alt: 'Business meeting' },
    { src: 'https://picsum.photos/1000/500?random=2', alt: 'Team collaboration' },
    { src: 'https://picsum.photos/1000/500?random=3', alt: 'Innovation' },
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
            style={{ backgroundImage: `url(${image.src})` }}
          />
        ))}
        <div className="hero__overlay" />
        <div className="hero__content">
          <div className="hero__text">
            <h2 className="hero__title">
              Welcome to DynamicDuo
            </h2>
            <p className="hero__subtitle">
              Empowering businesses with innovative solutions. We help you grow, scale, and succeed in today's competitive market.
            </p>
            <div className="hero__actions">
              <div className="hero__action">
                <button className="hero__button hero__button--primary">
                  Learn More
                </button>
              </div>
              <div className="hero__action">
                <button className="hero__button hero__button--secondary">
                  Contact Us
                </button>
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
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;