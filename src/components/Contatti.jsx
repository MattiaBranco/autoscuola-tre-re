import React from 'react';
import './components.css';

function Contatti() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Grazie per averci contattato! Ti risponderemo il prima possibile.");
    e.target.reset();
  };

  return (
    <section id="contatti" className="contatti">
      <div className="container">
        <h2>Contattaci</h2>
        <p>Hai dubbi o non hai trovato le informazioni che cercavi? Scrivici o vienici a trovare in una delle nostre sedi!</p>
        
        <div className="sedi-grid">
          <a href="https://www.google.com/maps/place/autoscuola+tre+re+sas/@45.5496788,9.2829277,15z/data=!4m10!1m2!2m1!1sautoscuola+tre+re+sas!3m6!1s0x4786b82720777865:0xba29753ad2ffc601!8m2!3d45.5496788!4d9.3019821!15sChVhdXRvc2N1b2xhIHRyZSByZSBzYXMiA4gBAZIBDmRyaXZpbmdfc2Nob29s4AEA!16s%2Fg%2F1tghngns" target="_blank" rel="noreferrer" className="sede-card">
            <h3>Sede Brugherio</h3>
            <p>Via Tre Re</p>
            <p>Tel: 039 / 879364</p>
            <span className="click-map">Apri in Maps &rarr;</span>
          </a>
          <a href="https://www.google.com/maps/place/autoscuola+tre+re+sas/@45.5339751,9.2813249,17.86z/data=!4m6!3m5!1s0x4786b80e7b7f0209:0x2a80090db9895822!8m2!3d45.5338684!4d9.282686!16s%2Fg%2F1tfcxpbw" target="_blank" rel="noreferrer" className="sede-card">
            <h3>Sede Cologno Monzese (1)</h3>
            <p>Corso Roma</p>
            <p>Tel: 02 / 2531755</p>
            <span className="click-map">Apri in Maps &rarr;</span>
          </a>
          <a href="https://www.google.com/maps/place/autoscuola+tre+re+sas/@45.5295917,9.2759364,17z/data=!3m1!4b1!4m6!3m5!1s0x4786b80e7b703b09:0xe4727b44374e7e7d!8m2!3d45.529588!4d9.2785113!16s%2Fg%2F1tg5yhr2" target="_blank" rel="noreferrer" className="sede-card">
            <h3>Sede Cologno Monzese (2)</h3>
            <p>Via Cavour</p>
            <p>Tel: 02 / 2543361</p>
            <span className="click-map">Apri in Maps &rarr;</span>
          </a>
        </div>

        <div className="contact-bottom-wrapper">
          <div className="contact-info-block">
            <div style={{fontSize: '1.2rem', fontWeight: 'bold'}}>
              <p>Email: info@autoscuolatrere.it</p>
              <p>WhatsApp: 3715733820</p>
              
              <div className="social-icons" style={{marginTop: '15px'}}>
                <a href="https://www.facebook.com/autoscuolatrere/" target="_blank" rel="noreferrer" style={{color: '#fff', marginRight: '15px'}}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" style={{color: '#fff'}}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form-block">
            <h3>Mandaci un'email</h3>
            <form onSubmit={handleSubmit} className="contact-form">
              <input type="text" placeholder="Il tuo nome" required />
              <input type="email" placeholder="La tua email" required />
              <textarea placeholder="Come possiamo aiutarti?" rows="4" required></textarea>
              <button type="submit" className="btn btn-red" style={{width: '100%', marginTop: '10px'}}>Invia Messaggio</button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Contatti;
