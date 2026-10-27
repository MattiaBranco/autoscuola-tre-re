import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Privacy() {
  return (
    <div style={{ backgroundColor: '#f4f6f8', minHeight: '100vh', padding: '60px 20px', paddingTop: '100px' }}>
      <Navbar />

    <div style={{ maxWidth: '800px', margin: '60px auto', padding: '40px', backgroundColor: '#ffffff', borderRadius: '16px', boxShadow: '0 10px 40px rgba(0,0,0,0.08)', fontFamily: '"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif', color: '#334155', lineHeight: '1.8' }}>
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <div style={{ display: 'inline-block', padding: '12px 24px', backgroundColor: 'var(--primary-color, #d32f2f)20', color: 'var(--primary-color, #d32f2f)', borderRadius: '50px', fontWeight: 'bold', fontSize: '0.9rem', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '20px' }}>
          Trasparenza & Sicurezza
        </div>
        <h1 style={{ fontSize: '2.8rem', fontWeight: '900', color: '#0f172a', margin: '0 0 15px 0', letterSpacing: '-0.03em', lineHeight: '1.1' }}>La Tua Privacy<br/>è Importante.</h1>
        <p style={{ fontSize: '1.15rem', color: '#64748b', maxWidth: '600px', margin: '0 auto' }}>Abbiamo scritto questo documento in modo semplice e chiaro, per farti capire esattamente come proteggiamo i tuoi dati.</p>
      </header>

      <section style={{ backgroundColor: '#f8fafc', borderLeft: '4px solid var(--primary-color, #d32f2f)', padding: '25px', borderRadius: '0 12px 12px 0', marginBottom: '40px' }}>
        <h2 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#0f172a', margin: '0 0 15px 0' }}>Chi Siamo (Il Titolare del Trattamento)</h2>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '1rem' }}>
          <li style={{ marginBottom: '8px' }}><strong>Azienda:</strong> Autoscuola Tre Re S.a.s.</li>
          <li style={{ marginBottom: '8px' }}><strong>P.IVA / CF:</strong> Non specificata</li>
          <li style={{ marginBottom: '8px' }}><strong>Sede Legale:</strong> Via Tre Re, Brugherio</li>
          <li><strong>Email Privacy:</strong> <a href="mailto:info@autoscuolatrere.it" style={{ color: 'var(--primary-color, #d32f2f)', textDecoration: 'none', fontWeight: '600' }}>info@autoscuolatrere.it</a></li>
        </ul>
      </section>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginBottom: '40px' }}>
        <div style={{ padding: '25px', border: '1px solid #e2e8f0', borderRadius: '12px' }}>
          <div style={{ fontSize: '2rem', marginBottom: '15px' }}></div>
          <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#0f172a', margin: '0 0 10px 0' }}>Dati che ci fornisci tu</h3>
          <p style={{ margin: 0, fontSize: '0.95rem' }}>Raccogliamo solo i dati necessari quando compili i nostri moduli: nome, email, telefono e le informazioni del tuo messaggio.</p>
        </div>
        <div style={{ padding: '25px', border: '1px solid #e2e8f0', borderRadius: '12px' }}>
          <div style={{ fontSize: '2rem', marginBottom: '15px' }}></div>
          <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#0f172a', margin: '0 0 10px 0' }}>Dati di navigazione</h3>
          <p style={{ margin: 0, fontSize: '0.95rem' }}>I sistemi informatici raccolgono automaticamente alcuni dati anonimi, come l'indirizzo IP o l'orario della visita, per far funzionare il sito.</p>
        </div>
      </div>

      <hr style={{ border: 'none', borderTop: '1px solid #e2e8f0', margin: '40px 0' }} />

      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#0f172a', margin: '0 0 20px 0', letterSpacing: '-0.02em' }}>Perché usiamo i tuoi dati?</h2>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          <li style={{ position: 'relative', paddingLeft: '35px', marginBottom: '15px' }}>
            <span style={{ position: 'absolute', left: 0, top: '2px', color: 'var(--primary-color, #d32f2f)', fontSize: '1.2rem' }}></span>
            <strong>Per risponderti:</strong> Utilizziamo i tuoi contatti esclusivamente per rispondere alle tue richieste o fornirti un preventivo (Base giuridica: <em>Misure precontrattuali</em>).
          </li>
          <li style={{ position: 'relative', paddingLeft: '35px' }}>
            <span style={{ position: 'absolute', left: 0, top: '2px', color: 'var(--primary-color, #d32f2f)', fontSize: '1.2rem' }}></span>
            <strong>Per la legge:</strong> Conserviamo i documenti per il tempo richiesto dalle normative fiscali o di pubblica sicurezza (Base giuridica: <em>Obbligo legale</em>).
          </li>
        </ul>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#0f172a', margin: '0 0 20px 0', letterSpacing: '-0.02em' }}>Dove finiscono i tuoi dati?</h2>
        <p style={{ marginBottom: '15px' }}>I tuoi dati restano al sicuro in <strong>Italia e all'interno dell'Unione Europea</strong>.</p>
        <p>In alcuni casi, utilizziamo servizi esterni di altissima qualità (come Google Maps o Google Fonts) che potrebbero avere server fuori dall'Europa. Quando succede, ci assicuriamo che rispettino le <em>Clausole Contrattuali Standard</em> del GDPR per garantire la massima protezione.</p>
      </section>

      <section style={{ marginBottom: '40px', backgroundColor: '#f8fafc', padding: '30px', borderRadius: '12px' }}>
        <h2 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#0f172a', margin: '0 0 20px 0', letterSpacing: '-0.02em' }}>I Tuoi Diritti (Art. 15-22 GDPR)</h2>
        <p style={{ marginBottom: '20px' }}>Hai il pieno controllo. In qualsiasi momento puoi scriverci per:</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          <span style={{ padding: '8px 16px', backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '50px', fontSize: '0.9rem', fontWeight: '600' }}>Vedere i tuoi dati</span>
          <span style={{ padding: '8px 16px', backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '50px', fontSize: '0.9rem', fontWeight: '600' }}>Correggerli</span>
          <span style={{ padding: '8px 16px', backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '50px', fontSize: '0.9rem', fontWeight: '600' }}>Cancellarli (Oblio)</span>
          <span style={{ padding: '8px 16px', backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '50px', fontSize: '0.9rem', fontWeight: '600' }}>Opporti al trattamento</span>
        </div>
      </section>
    </div>
  
      <Footer />
    </div>
  );
}
