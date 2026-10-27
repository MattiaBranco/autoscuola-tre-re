import React, { useState, useEffect } from 'react';
export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => { if (!localStorage.getItem('cookie-consent')) setIsVisible(true); }, []);
  if (!isVisible) return null;
  return (
    <div style={{ position: 'fixed', bottom: 0, left: 0, width: '100%', backgroundColor: '#111', color: '#fff', zIndex: 9999, padding: '20px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '15px', borderTop: '1px solid #333' }}>
      <p style={{ margin: 0, fontSize: '0.9rem', maxWidth: '800px' }}>Utilizziamo i cookie per migliorare la tua esperienza sul nostro sito. Puoi scegliere se accettare o rifiutare l'uso dei cookie.</p>
      <div style={{ display: 'flex', gap: '10px', flexGrow: 1, justifyContent: 'flex-end' }}>
        <button onClick={() => { localStorage.setItem('cookie-consent', 'accepted'); setIsVisible(false); }} style={{ padding: '10px 20px', backgroundColor: 'var(--primary-red)', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', minWidth: '120px' }}>Accetta</button>
        <button onClick={() => { localStorage.setItem('cookie-consent', 'rejected'); setIsVisible(false); }} style={{ padding: '10px 20px', backgroundColor: 'transparent', color: '#fff', border: '1px solid #fff', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', minWidth: '120px' }}>Rifiuta</button>
      </div>
    </div>
  );
}