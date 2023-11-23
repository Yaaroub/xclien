// Footer.js
import React from 'react';
import './Footer.css'; // Stil für den Footer hinzufügen

const Footer = () => {
  return (
    <footer className="fixed-footer custom-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Kontakt</h4>
          <p>Adresse: Ulmenstr 61, 24306 Plön</p>
          <p>Telefon: 0176 40499965</p>
          <p>Email: xclien.r@gmail.com</p>
        </div>
        <div className="footer-section">
          <h4>Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/leistungen">Leistungen</a></li>
            <li><a href="/über-uns">Über uns</a></li>
            <li><a href="/kontakt">Kontakt</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Folgen Sie uns</h4>
          <div className="social-icons">
            {/* Hier können Sie Ihre Social-Media-Icons oder Links hinzufügen */}
            <a href="https://facebook.com"><img src="facebook-icon.png" alt="Facebook" /></a>
            <a href="https://twitter.com"><img src="twitter-icon.png" alt="Twitter" /></a>
            {/* Weitere Icons und Links hier einfügen */}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Reinigungsunternehmen. Alle Rechte vorbehalten.</p>
      </div>
    </footer>
  );
};

export default Footer;
