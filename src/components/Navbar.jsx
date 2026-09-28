import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './components.css';

function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="navbar-brand">Autoscuola Tre Re</Link>
        
        <div className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <div className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
          {isHome ? (
            <>
              <a href="#hero" onClick={closeMobileMenu}>Home</a>
              <a href="#chi-siamo" onClick={closeMobileMenu}>Chi Siamo</a>
              <a href="#servizi" onClick={closeMobileMenu}>Corsi & Patenti</a>
              <a href="#orari" onClick={closeMobileMenu}>Orari</a>
              <a href="#faq" onClick={closeMobileMenu}>FAQ</a>
              <a href="#contatti" onClick={closeMobileMenu}>Contatti</a>
            </>
          ) : (
            <Link to="/" onClick={closeMobileMenu}>Torna alla Home</Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;