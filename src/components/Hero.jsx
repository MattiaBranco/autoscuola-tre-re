import React from 'react';
import './components.css';

function Hero() {
  return (
    <header id="hero" className="hero">
      <div className="container">
        <h1>La tua patente,<br/>il nostro traguardo.</h1>
        <p>Dal 1981, Autoscuola Tre Re forma guidatori sicuri con professionalità e passione.</p>
        <div className="hero-buttons">
          <a href="#servizi" className="btn btn-red">Scopri i Corsi</a>
          <a href="#contatti" className="btn btn-blue">Contattaci</a>
        </div>
      </div>
    </header>
  );
}

export default Hero;
