import React, { useState, useRef, useEffect } from 'react';
import './components.css';

function FAQ() {
  const [chatHistory, setChatHistory] = useState([
    { type: 'bot', text: 'Benvenuto! Clicca su una delle domande qui sotto per ricevere una risposta immediata.' }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const chatAreaRef = useRef(null);

  const questions = [
    {
      q: "Ho la patente B e vorrei prendere la patente A per la moto, come devo fare?",
      a: "Bisogna effettuare solo un esame di pratica sulla moto.\n\nPassa a trovarci in sede o contattaci per iscriverti e iniziare subito le tue guide!"
    },
    {
      q: "Ho la patente B ma non guido da tempo e vorrei fare delle guide di perfezionamento, è possibile?",
      a: "Sì, basta passare nei nostri uffici e prenotare una lezione di guida con l'istruttore.\n\nTi aspettiamo in autoscuola per organizzare le tue guide in base ai tuoi orari!"
    },
    {
      q: "Mi è scaduta la patente da alcuni anni, posso rinnovarla?",
      a: "Basta effettuare la visita medica e, se sei idoneo, la patente viene immediatamente rinnovata. Nel caso in cui siano passati più di cinque anni dalla scadenza sarà necessario sottoporsi ad un esame di guida.\n\nScrivici o vieni a trovarci per prenotare la tua visita medica direttamente in sede."
    },
    {
      q: "Cosa significa il codice armonizzato 78 sul retro della patente?",
      a: "Il codice 78 significa che il conducente può guidare solo veicoli con il cambio automatico.\n\nHai altri dubbi? Contattaci o vieni a trovarci, siamo a tua completa disposizione!"
    },
    {
      q: "Cosa significa il codice armonizzato 71?",
      a: "Il codice 71 significa che la patente deriva da un duplicato.\n\nSe hai bisogno di ulteriori chiarimenti sulle pratiche auto, vieni a trovarci in ufficio!"
    },
    {
      q: "Cosa significa il codice armonizzato 01?",
      a: "Il codice 01 significa che il conducente durante la guida ha l'obbligo di indossare gli occhiali o lenti a contatto.\n\nPassa in autoscuola o chiamaci per qualsiasi altra informazione!"
    },
    {
      q: "Per quanti anni mi verrà rinnovata la patente?",
      a: "Dipende dall'età del conducente.\nPatente A/B vale:\n- 10 anni fino a 50 anni\n- 5 anni dai 50 ai 70 anni\n- 3 anni dai 70 agli 80 anni\n- 2 anni dopo gli 80 anni\n\nPatente superiore vale: 5 anni.\n\nContattaci per fissare il tuo rinnovo in modo semplice e veloce!"
    },
    {
      q: "Cosa rischio guidando con la patente scaduta?",
      a: "Si rischia una sanzione pecuniaria e il ritiro della patente.\n\nNon rischiare! Vieni a trovarci o scrivici per rinnovare la patente in sede con il nostro medico."
    },
    {
      q: "La mia CQC scade, come posso rinnovarla?",
      a: "Per rinnovarla è necessario frequentare un corso obbligatorio di 35 ore.\n\nContattaci subito per scoprire le date dei nostri prossimi corsi CQC e riservare il tuo posto!"
    }
  ];

  // Auto-scroll verso il basso quando ci sono nuovi messaggi o si sta digitando
  useEffect(() => {
    if (chatAreaRef.current) {
      chatAreaRef.current.scrollTop = chatAreaRef.current.scrollHeight;
    }
  }, [chatHistory, isTyping]);

  const handleQuestionClick = (qa) => {
    if (isTyping) return; // Evita clic multipli mentre il bot "scrive"

    // 1. Aggiungi subito la domanda dell'utente
    setChatHistory(prev => [
      ...prev,
      { type: 'user', text: qa.q }
    ]);

    // 2. Mostra lo stato "sta scrivendo..."
    setIsTyping(true);

    // 3. Dopo 1.5 secondi, rimuovi lo stato "scrivendo" e aggiungi la risposta del bot
    setTimeout(() => {
      setIsTyping(false);
      setChatHistory(prev => [
        ...prev,
        { type: 'bot', text: qa.a }
      ]);
    }, 1500);
  };

  return (
    <section id="faq" className="faq">
      <div className="container">
        <h2 style={{textAlign: 'center'}}>Domande Frequenti</h2>
        
        <div className="mac-window">
          <div className="mac-header">
            <div className="mac-buttons">
              <span className="mac-btn close"></span>
              <span className="mac-btn minimize"></span>
              <span className="mac-btn expand"></span>
            </div>
            <div className="mac-title">Assistente_Autoscuola.app</div>
          </div>
          <div className="mac-body">
            <div className="chat-area" ref={chatAreaRef}>
              {chatHistory.map((msg, index) => (
                <div key={index} className={`chat-bubble ${msg.type === 'user' ? 'chat-user' : 'chat-bot'}`}>
                  {msg.text.split('\n').map((line, i) => (
                    <span key={i}>{line}<br/></span>
                  ))}
                </div>
              ))}
              
              {isTyping && (
                <div className="chat-bubble chat-bot typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              )}
            </div>
            <div className="chat-options-scroll" style={{maxHeight: '300px', overflowY: 'auto'}}>
              <div className="chat-options">
                {questions.map((qa, index) => (
                  <button 
                    key={index} 
                    className="chat-option-btn"
                    onClick={() => handleQuestionClick(qa)}
                    disabled={isTyping}
                    style={{ opacity: isTyping ? 0.6 : 1, cursor: isTyping ? 'not-allowed' : 'pointer' }}
                  >
                    {qa.q}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;