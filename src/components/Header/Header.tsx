import { useState } from 'react';
import './Header.scss';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__content">
          <div className="header__logo">
            <span className="header__logo-icon">✨</span>
            <h1 className="header__title">DynamicDuo</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="header__nav">
            <a href="#home" className="header__nav-link">
              <span className="header__nav-icon">🏠</span>
              Home
            </a>
            <a href="#features" className="header__nav-link">
              <span className="header__nav-icon">⚡</span>
              Features
            </a>
            <a href="#about" className="header__nav-link">
              <span className="header__nav-icon">💡</span>
              About
            </a>
            <a href="#contact" className="header__nav-link">
              <span className="header__nav-icon">📧</span>
              Contact
            </a>
          </nav>

          {/* Desktop CTA Button */}
          <div className="header__cta">
            <button className="header__button">
              <span className="header__button-text">Get Started</span>
              <span className="header__button-arrow">→</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="header__mobile-menu">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="header__mobile-toggle"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <div className={`header__hamburger-wrapper ${isMobileMenuOpen ? 'header__hamburger-wrapper--open' : ''}`}>
                <span className="header__hamburger-line"></span>
                <span className="header__hamburger-line"></span>
                <span className="header__hamburger-line"></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="header__mobile-nav">
            <div className="header__mobile-nav-content">
              <a href="#home" className="header__mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                <span className="header__mobile-nav-icon">🏠</span>
                Home
              </a>
              <a href="#features" className="header__mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                <span className="header__mobile-nav-icon">⚡</span>
                Features
              </a>
              <a href="#about" className="header__mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                <span className="header__mobile-nav-icon">💡</span>
                About
              </a>
              <a href="#contact" className="header__mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                <span className="header__mobile-nav-icon">📧</span>
                Contact
              </a>
              <div className="header__mobile-cta">
                <button className="header__mobile-button" onClick={() => setIsMobileMenuOpen(false)}>
                  Get Started
                  <span className="header__mobile-button-arrow">→</span>
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