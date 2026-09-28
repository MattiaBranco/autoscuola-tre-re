import React from 'react';
import './components.css';

function ChiSiamo() {
  const staff = [
    { name: "Armando Modarelli", role: "Fondatore", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=150" },
    { name: "Alberto Modarelli", role: "Istruttore & Gestione", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=150" },
    { name: "Matteo Modarelli", role: "Istruttore & Gestione", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150" },
  ];

  return (
    <section id="chi-siamo" className="chi-siamo">
      <div className="container">
        <h2>Chi Siamo</h2>
        <p>Fondata a Brugherio nel 1981 da Armando Modarelli, Autoscuola Tre Re è oggi gestita dalla seconda generazione: Alberto e Matteo. Siamo un team giovane e dinamico, pronto a seguirti in ogni passo verso la tua patente, con veicoli moderni e aule multimediali.</p>
        
        <div className="staff-grid">
          {staff.map((person, index) => (
            <div className="staff-card" key={index}>
              <img src={person.img} alt={person.name} className="staff-img" />
              <h3>{person.name}</h3>
              <p>{person.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ChiSiamo;
