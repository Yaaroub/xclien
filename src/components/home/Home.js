import React from "react";
import "./Home.css";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

import Inhalt from "./Inhalt";

const Home = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 769px)",
  });

  return (
    <main>
      {isDesktopOrLaptop ? (
        <div className="home">
          <motion.h1
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}>
            XClien
          </motion.h1>
          <motion.div
            className="mid-line"
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 1 }}></motion.div>
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 2.2 }}
            className="k-beschreibung">
            Professionelle Reinigungsdienste für
            <br /> Ferienhäuser, Büros und mehr.
          </motion.p>
        </div>
      ) : (
        <div className="home">
          <motion.h1
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}>
            XClien
          </motion.h1>
          <motion.div
            className="mid-line"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 1 }}></motion.div>
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 2.2 }}
            className="k-beschreibung">
            Professionelle Reinigungsdienste für
            <br /> Ferienhäuser, Büros und mehr.
          </motion.p>
        </div>
      )}
  
      <Inhalt />
    </main>
  );
};

export default Home;

{
  /* <TypeAnimation
  sequence={[
    // Same substring at the start will only be typed once, initially
    "In Plön und Umgebung können Sie sich auf unsere professionelle Betreuung und zuverlässige Durchführung von Gebäudereinigungsprojekten verlassen. Wir garantieren unseren Kunden stets den bestmöglichen Service, sei es bei der Reinigung von Büros und Praxen, der Gebäude- und Unterhaltsreinigung oder anderen Dienstleistungen. Teilen Sie uns einfach Ihre Anliegen mit, und gemeinsam finden wir die optimale Lösung für Ihre Bedürfnisse.",
  ]}
  speed={70}
  style={{ fontSize: "1em" }}
/> */
}
