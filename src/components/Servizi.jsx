import React from 'react';
import { Link } from 'react-router-dom';
import './components.css';

function Servizi() {
  const servizi = [
    {
      id: "patente-am",
      title: "Patente AM (Quad e Moto)",
      img: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=400",
      short: "Per ragazzi dai 14 anni. Ciclomotori e Quadricicli leggeri.",
    },
    {
      id: "patente-moto",
      title: "Patente A1, A2, A",
      img: "https://images.unsplash.com/photo-1558980394-4c7c9299fe96?auto=format&fit=crop&q=80&w=400",
      short: "Patenti moto, con opzione automatica per A1.",
    },
    {
      id: "patente-auto",
      title: "Patente B, B96, BE",
      img: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=400",
      short: "La classica patente per l'auto e rimorchi.",
    },
    {
      id: "patente-superiore",
      title: "Patenti Superiori (C, D)",
      img: "https://images.unsplash.com/photo-1519003722811-9d4ca84f7b60?auto=format&fit=crop&q=80&w=400",
      short: "Patenti per camion, autobus e professionisti.",
    },
    {
      id: "cqc",
      title: "Corsi CQC e Rinnovi",
      img: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&q=80&w=400",
      short: "Qualificazione professionale e Carta Tachigrafica.",
    },
    {
      id: "recupero-punti",
      title: "Recupero Punti",
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=400",
      short: "Corsi per recuperare 6 o 9 punti patente.",
    },
    {
      id: "pratiche-auto",
      title: "Pratiche Auto",
      img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=400",
      short: "Rinnovi, duplicati, passaggi di proprietà.",
    }
  ];

  return (
    <section id="servizi" className="servizi">
      <div className="container">
        <h2>Corsi e Servizi</h2>
        <p style={{marginBottom: '40px', textAlign: 'center'}}>Clicca su un servizio per aprire la pagina con tutte le informazioni complete.</p>
        
        <div className="servizi-grid">
          {servizi.map(srv => (
            <Link to={`/patente/${srv.id}`} className="servizio-card" key={srv.id}>
              <img src={srv.img} alt={srv.title} className="servizio-img" />
              <div className="servizio-content">
                <h3>{srv.title}</h3>
                <p>{srv.short}</p>
                <span className="btn-scopri">Scopri di più &rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Servizi;