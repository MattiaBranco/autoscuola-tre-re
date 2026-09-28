# Design Plan: Autoscuola Tre Re

## Overview
A modern, single-page application (SPA) for "Autoscuola Tre Re sas", optimized for performance and all devices. The site will feature smooth scrolling, interactive elements, and a clean UI using the brand colors (Red and Light Blue).

## Tech Stack
- **Framework:** React (Vite)
- **Styling:** Vanilla CSS (for maximum flexibility and performance, as per guidelines)
- **Routing:** Built-in smooth scrolling to page sections

## Visual Identity
- **Primary Colors:** Red (Rosso) and Light Blue (Azzurro)
- **Aesthetics:** Modern, dynamic, clean spacing. 
- **Assets:** The provided graffiti image will be used prominently in the "Recupero Punti" (Points Recovery) / "Guida Sicura" section. Placeholder images will be generated/sourced for the Staff and Vehicles.

## Architecture & Layout (Single Page)

### 1. Navigation Bar (Sticky)
- Logo / Name
- Links: Home, Chi Siamo, Patenti & Servizi, FAQ, Contatti
- Smooth scroll to sections.

### 2. Hero Section
- Dynamic background (modern driving school aesthetic).
- Main headline: "Autoscuola Tre Re - La tua patente, il nostro traguardo dal 1981."
- Call to Action (CTA) buttons: "Scopri i Corsi" and "Contattaci".

### 3. Chi Siamo & Staff (About Us)
- Brief history: Founded in 1981 by Armando Modarelli, now run by Alberto and Matteo.
- Staff Section: Grid layout with photos of the instructors (young and dynamic team).

### 4. Patenti & Servizi (Services)
- **Interactive Cards:** A grid of cards for each service (Patente AM, A1, B, C/D, CQC, Pratiche Auto, Recupero Punti).
- **Modal Windows:** Clicking a card will open a pop-up modal with detailed information (e.g., A1 automatic/manual options, age requirements).
- **Featured Image Integration:** The provided graffiti image (`Screenshot 2026-08-29 alle 23.40.12.png`) will be featured on the "Recupero Punti" card.

### 5. Domande Frequenti (FAQ - Chatbot Style)
- A dedicated section simulating a chat interface.
- Users can click on pre-defined questions (e.g., "Che documenti servono per l'iscrizione?"), and the "bot" will reply with the answer in a chat-bubble layout.

### 6. Contatti & Sedi (Contact & Locations)
- Contact Form ("Non hai trovato quello che cerchi? Contattaci!").
- List of 3 locations (Brugherio, Cologno Monzese Corso Roma, Cologno Monzese Via Cavour).
- Contact info: WhatsApp (3715733820), Email (info@autoscuolatrere.it).
- **Map Button:** A prominent button linking directly to the requested Google Maps URL.

## Performance & UX
- Images will be optimized.
- Modals and chatbot will use React state for instant, no-reload interactions.
- Responsive design ensuring perfect usability on mobile devices.
