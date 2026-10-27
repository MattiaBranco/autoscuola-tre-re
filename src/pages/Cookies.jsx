import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Cookies() {
  return (
    <div style={{ backgroundColor: '#f4f6f8', minHeight: '100vh', padding: '60px 20px', paddingTop: '100px' }}>
      <Navbar />

    <div style={{ maxWidth: '800px', margin: '60px auto', padding: '40px', backgroundColor: '#ffffff', borderRadius: '16px', boxShadow: '0 10px 40px rgba(0,0,0,0.08)', fontFamily: '"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif', color: '#334155', lineHeight: '1.8' }}>
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <div style={{ display: 'inline-block', padding: '12px 24px', backgroundColor: 'var(--primary-color, #d32f2f)20', color: 'var(--primary-color, #d32f2f)', borderRadius: '50px', fontWeight: 'bold', fontSize: '0.9rem', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '20px' }}>
          Gestione dei Cookie
        </div>
        <h1 style={{ fontSize: '2.8rem', fontWeight: '900', color: '#0f172a', margin: '0 0 15px 0', letterSpacing: '-0.03em', lineHeight: '1.1' }}>Come usiamo i Cookie.</h1>
        <p style={{ fontSize: '1.15rem', color: '#64748b', maxWidth: '600px', margin: '0 auto' }}>Piccoli file, grandi responsabilità. Ecco cosa devi sapere.</p>
      </header>

      <p style={{ fontSize: '1.1rem', marginBottom: '30px', textAlign: 'center' }}>I cookie sono dei piccoli "aiutanti digitali" (file di testo) che il nostro sito salva sul tuo telefono o computer per rendere la tua navigazione più fluida e ricordarsi di te alla visita successiva.</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px' }}>
        
        <div style={{ padding: '30px', backgroundColor: '#f8fafc', borderLeft: '4px solid #10b981', borderRadius: '0 12px 12px 0' }}>
          <h2 style={{ fontSize: '1.4rem', fontWeight: '800', color: '#0f172a', margin: '0 0 10px 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span></span> Cookie Essenziali (Tecnici)
          </h2>
          <p style={{ margin: 0 }}>Questi sono i cookie <strong>strettamente necessari</strong> per far funzionare il sito. Ad esempio, li usiamo per ricordarci se hai cliccato "Accetta" o "Rifiuta" sul banner iniziale, così da non dovertelo chiedere ogni volta. <br/><br/><em>Non richiedono il tuo consenso perché il sito non funzionerebbe senza.</em></p>
        </div>

        <div style={{ padding: '30px', backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px' }}>
          <h2 style={{ fontSize: '1.4rem', fontWeight: '800', color: '#0f172a', margin: '0 0 10px 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span></span> Cookie di Terze Parti
          </h2>
          <p style={{ margin: 0 }}>Il nostro sito potrebbe utilizzare funzionalità create da altre aziende (come le mappe di Google o font speciali). Questi servizi esterni possono inserire i <em>loro</em> cookie.<br/><br/>Hai il <strong>totale controllo</strong> su questi cookie: puoi abilitarli cliccando su "Accetta" nel banner iniziale, o bloccarli cliccando su "Rifiuta".</p>
        </div>

      </div>

      <section style={{ textAlign: 'center', marginTop: '50px', paddingTop: '40px', borderTop: '1px solid #e2e8f0' }}>
        <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#0f172a', margin: '0 0 15px 0' }}>Hai cambiato idea?</h3>
        <p style={{ marginBottom: '20px' }}>Puoi cancellare i cookie in qualsiasi momento direttamente dalle impostazioni del tuo browser.</p>
        <p style={{ fontSize: '0.9rem', color: '#64748b' }}>Titolare: <strong>Autoscuola Tre Re S.a.s.</strong> — Email: <strong>info@autoscuolatrere.it</strong></p>
      </section>
    </div>
  
      <Footer />
    </div>
  );
}
