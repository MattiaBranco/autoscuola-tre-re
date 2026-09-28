import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Se c'è un hash nell'URL (es: /#servizi), cerca l'elemento e scrolla lì
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        // Un piccolo timeout per assicurarsi che il DOM sia stato renderizzato (utile nel cambio pagina)
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
        return;
      }
    }
    
    // Altrimenti scrolla in cima alla pagina
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}