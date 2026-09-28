import React from 'react';
import './components.css';

function Orari() {
  return (
    <section id="orari" className="orari">
      <div className="container">
        <h2>Orari Lezioni</h2>
        <p style={{ textAlign: 'center', marginBottom: '30px' }}>Ecco la tabella aggiornata con gli orari dei nostri corsi di teoria per le diverse sedi.</p>
        
        <div className="table-responsive">
          <table className="orari-table">
            <thead>
              <tr>
                <th>Sede</th>
                <th>LUNEDI'</th>
                <th>MARTEDI'</th>
                <th>MERCOLEDI'</th>
                <th>GIOVEDI'</th>
                <th>VENERDI'</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>BRUGHERIO</strong></td>
                <td>16.00 - 17.00<br/>19.30 - 20.30</td>
                <td>16.00 - 17.00<br/>19.30 - 20.30</td>
                <td></td>
                <td>16.00 - 17.00<br/>19.30 - 20.30</td>
                <td></td>
              </tr>
              <tr>
                <td><strong>COLOGNO M.SE<br/>CORSO ROMA</strong></td>
                <td><br/>19.00 - 20.00</td>
                <td>14.30 - 15.30<br/>19.00 - 20.00</td>
                <td>patenti superiori<br/>19.00 - 20.00</td>
                <td>14.30 - 15.30<br/>19.00 - 20.00</td>
                <td>patenti superiori<br/>19.00 - 20.00</td>
              </tr>
              <tr>
                <td><strong>COLOGNO M.SE<br/>VIA CAVOUR</strong></td>
                <td><br/>19.00 - 20.00</td>
                <td>10.00 - 11.00<br/>19.00 - 20.00</td>
                <td></td>
                <td>10.00 - 11.00<br/>19.00 - 20.00</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default Orari;