import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const data = {
  "patente-am": {
    title: "Patente AM (Ciclomotori e Quadricicli leggeri)",
    img: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&q=80&w=1200",
    desc: "La patente AM si può conseguire a partire dai 14 anni di età. Consente di guidare ciclomotori a 2, 3 o 4 ruote.",
    points: [
      "Età minima: 14 anni",
      "Veicoli guidabili: Ciclomotori a 2 o 3 ruote, e Quadricicli leggeri (minicar)",
      "I nostri mezzi: Disponiamo anche di una Peugeot 50cc e della Citroën Ami per la pratica su 4 ruote in totale sicurezza."
    ],
    fleet: [
      { name: "Peugeot 50CC (Automatico)", img: "https://images.unsplash.com/photo-1590483863457-3f36a310619f?auto=format&fit=crop&q=80&w=600" },
      { name: "Ciclomotore (Manuale)", img: "https://images.unsplash.com/photo-1558980394-0a37c6fce7f1?auto=format&fit=crop&q=80&w=600" }
    ]
  },
  "patente-moto": {
    title: "Patenti Moto (A1, A2, A)",
    img: "https://images.unsplash.com/photo-1558981420-c532902e58b4?auto=format&fit=crop&q=80&w=1200",
    desc: "Tutte le categorie di patenti moto, adatte ad ogni età e ad ogni cilindrata.",
    points: [
      "Patente A1: Età 16 anni. Consente di guidare motoveicoli fino a 125 cm³ e fino a 11 kW di potenza. Disponibile anche con CAMBIO AUTOMATICO (nuovo motociclo KSR 125 inserito nella flotta).",
      "Patente A2: Età 18 anni. Consente di guidare motoveicoli con potenza massima fino a 35 kW (es. nostra KTM 390 DUKE).",
      "Patente A: Età 24 anni oppure dopo due anni dal conseguimento della patente A2. Consente di guidare tutti i motocicli (es. nostre Kawasaki Z650 e ER6N)."
    ],
    fleet: [
      { name: "KSR 125 (Patente A1)", img: "https://images.unsplash.com/photo-1558981001-5864b3250a69?auto=format&fit=crop&q=80&w=600" },
      { name: "KTM 390 Duke (Patente A2)", img: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&q=80&w=600" },
      { name: "Kawasaki Z650 (Patente A)", img: "https://images.unsplash.com/photo-1629899166922-db13a30c5119?auto=format&fit=crop&q=80&w=600" },
      { name: "Kawasaki ER6N (Patente A)", img: "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?auto=format&fit=crop&q=80&w=600" }
    ]
  },
  "patente-auto": {
    title: "Patenti Auto (B, B96, BE)",
    img: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=1200",
    desc: "Il classico percorso per mettersi alla guida dell'auto in modo sicuro.",
    points: [
      "Patente B: Età 18 anni. Consente di guidare autovetture fino a 9 posti, autocarri, autocaravan fino a 3.5 t. Guide con VW Polo o Mercedes Classe A.",
      "Patente B96: Età 18 anni. Consente di guidare un complesso veicolare di massa massima non superiore a 4250 kg.",
      "Patente BE: Età 18 anni. Consente di guidare complessi veicolari superiori a 4250 kg ma inferiori a 7000 kg."
    ],
    fleet: [
      { name: "Nuova VW Polo", img: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=600" },
      { name: "VW Polo", img: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&q=80&w=600" },
      { name: "Mercedes Classe A (Automatico)", img: "https://images.unsplash.com/photo-1616422285623-13ff0162193c?auto=format&fit=crop&q=80&w=600" }
    ]
  },
  "patente-superiore": {
    title: "Patenti Superiori (C, CE, D, DE, CAP)",
    img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=1200",
    desc: "Per chi vuole fare della guida la propria professione, trasportando merci o persone.",
    points: [
      "Patente C / CE: Età 21 anni. Consente di guidare autoveicoli superiori a 3.5 t non adibiti al trasporto di persone e complessi con rimorchi superiori a 750 kg.",
      "Patente D / DE: Età 24 anni. Consente di guidare autobus e autobus con rimorchio superiore a 750 kg.",
      "CAP: Età 21 anni. Consente di guidare TAXI o NCC."
    ]
  },
  "cqc": {
    title: "Corsi CQC e Carta Tachigrafica",
    img: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&q=80&w=1200",
    desc: "Qualificazioni professionali necessarie per il trasporto di merci e persone conto terzi.",
    points: [
      "CQC Merci: Età 21 anni. Consente di guidare autocarri della categoria C ad uso terzi.",
      "CQC Persone: Età 24 anni. Consente di guidare autobus della categoria D ad uso terzi.",
      "Organizziamo corsi intensivi per rinnovi CQC (anche serali o il sabato, della durata di 35 ore).",
      "Offriamo completa assistenza per la richiesta e il rinnovo della Carta Tachigrafica del conducente."
    ]
  },
  "recupero-punti": {
    title: "Corsi Recupero Punti",
    img: "/graffiti.png",
    desc: "Hai perso dei punti dalla patente? Non rischiare la revisione!",
    points: [
      "Per Patente B: Recupero di 6 punti con apposito corso.",
      "Per Patenti Superiori (C, D, CE, DE): Recupero di 9 punti.",
      "Organizziamo corsi periodici. Contattaci per conoscere le prossime date di partenza (es. serali)."
    ]
  },
  "pratiche-auto": {
    title: "Agenzia e Pratiche Auto",
    img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1200",
    desc: "Un servizio a 360 gradi per tutte le tue necessità burocratiche relative ai veicoli e patenti.",
    points: [
      "Rinnovo patente: Presenza del medico in sede tutti i mercoledì.",
      "Duplicato patente per smarrimento, furto o deterioramento.",
      "Rilascio Patente Internazionale.",
      "Trasferimenti di proprietà e immatricolazioni."
    ]
  }
};

function PatenteDetail() {
  const { id } = useParams();
  const info = data[id];

  if (!info) {
    return (
      <div style={{ textAlign: 'center', padding: '100px 20px' }}>
        <Navbar />
        <h1>Servizio non trovato</h1>
        <Link to="/" className="btn btn-blue" style={{ marginTop: '20px' }}>Torna alla Home</Link>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="detail-page">
        <div className="detail-hero" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${info.img})` }}>
          <div className="container">
            <h1>{info.title}</h1>
          </div>
        </div>
        <div className="container detail-content">
          <Link to="/#servizi" className="back-link">&larr; Torna ai Corsi</Link>
          <div className="detail-card">
            <p className="detail-desc">{info.desc}</p>
            <h3>Dettagli e Specifiche</h3>
            <ul>
              {info.points.map((pt, i) => (
                <li key={i}>{pt}</li>
              ))}
            </ul>
            
            {info.fleet && (
              <div className="fleet-section">
                <h3>I Nostri Veicoli in dotazione</h3>
                <div className="fleet-grid">
                  {info.fleet.map((vehicle, i) => (
                    <div key={i} className="fleet-card">
                      <img src={vehicle.img} alt={vehicle.name} />
                      <h4>{vehicle.name}</h4>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default PatenteDetail;