// ÜberUns.js
import React from "react";
import "./ÜberUns.css";
import { motion } from "framer-motion";

const ÜberUns = () => {
  return (
    <main>
      <div className="über-uns-container">
        <motion.h1
          initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
        >
          Über Uns
        </motion.h1>
        <motion.div
          className="u-mid-line"
          initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 1 }}
        ></motion.div>

        <motion.p
          className="unternehmens-beschreibung"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 2.2 }}
        >
          Wir sind ein führendes Reinigungsunternehmen, das sich auf professionelle Reinigungsdienstleistungen für verschiedene Branchen spezialisiert hat. Mit einem engagierten Team von Experten streben wir nach höchster Qualität und Kundenzufriedenheit. Unsere umweltfreundlichen Reinigungsmethoden und unsere Verpflichtung zu herausragendem Service machen uns zu Ihrem vertrauenswürdigen Partner für Sauberkeit und Hygiene.
        </motion.p>

        <motion.div
          className="unternehmens-werte"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 3 }}
        >
          <h2>Unsere Werte</h2>
          <ul>
            <li>Nachhaltigkeit</li>
            <li>Zuverlässigkeit</li>
            <li>Kundenzufriedenheit</li>
            <li>Qualität</li>
          </ul>
        </motion.div>
      </div>
    </main>
  );
};

export default ÜberUns;
