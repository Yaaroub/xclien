import "./Kontakt.css";

import React, { useState } from "react";
import emailjs from "emailjs-com";

const Kontakt = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nachricht, setNachricht] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();
  
    try {
      const formElement = document.getElementById("myForm"); // Holen Sie sich das HTML-Formularelement
      const response = await emailjs.sendForm("service_zpcjr5b", "template_5ijvae6", formElement, "oE3KNsmybR-YPfDnG");
  
      console.log("E-Mail erfolgreich gesendet:", response);
      // Hier können Sie eine Erfolgsmeldung für den Benutzer anzeigen
    } catch (error) {
      console.error("Fehler beim Senden der E-Mail:", error);
      // Hier können Sie eine Fehlermeldung für den Benutzer anzeigen
    }
  };
  return (
    <form id="myForm" onSubmit={sendEmail}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br />
      <label>
        E-Mail:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />
      <label>
        Nachricht:
        <textarea
          value={nachricht}
          onChange={(e) => setNachricht(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Senden</button>
    </form>
  );
};

export default Kontakt;
