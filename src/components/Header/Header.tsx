import { useState } from 'react';
import './Header.scss';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__content">
          <div className="header__logo">
            <h1 className="header__title">DynamicDuo</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="header__nav">
            <a href="#home" className="header__nav-link">Home</a>
            <a href="#features" className="header__nav-link">Features</a>
            <a href="#about" className="header__nav-link">About</a>
            <a href="#contact" className="header__nav-link">Contact</a>
          </nav>

          {/* Desktop CTA Button */}
          <div className="header__cta">
            <button className="header__button">Get Started</button>
          </div>

          {/* Mobile menu button */}
          <div className="header__mobile-menu">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="header__mobile-toggle"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMobileMenuOpen ? (
                <svg className="header__hamburger" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="header__close" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="header__mobile-nav">
            <div className="header__mobile-nav-content">
              <a href="#home" className="header__mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
              <a href="#features" className="header__mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Features</a>
              <a href="#about" className="header__mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>About</a>
              <a href="#contact" className="header__mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
              <div className="header__mobile-cta">
                <button className="header__mobile-button" onClick={() => setIsMobileMenuOpen(false)}>
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;