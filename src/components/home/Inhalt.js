import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import "./Inhalt.css";
export default function Inhalt() {
  return (
    <>
      <motion.div className="inhalt">
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed once, initially
            "In Plön und Umgebung können Sie sich auf unsere professionelle Betreuung und zuverlässige Durchführung von Gebäudereinigungsprojekten verlassen. Wir garantieren unseren Kunden stets den bestmöglichen Service, sei es bei der Reinigung von Büros und Praxen, der Gebäude- und Unterhaltsreinigung oder anderen Dienstleistungen. Teilen Sie uns einfach Ihre Anliegen mit, und gemeinsam finden wir die optimale Lösung für Ihre Bedürfnisse.",
          ]}
          speed={100}
          style={{
            fontSize: "1.5rem",
            wordSpacing: "5px",
            lineHeight: "2.5rem",
          }}
        />
        {/* <motion.p
        initial={{ opacity: 0, x: 70 }}
        whileInView={{ opacity: 1, x: 10 }}
        transition={{ duration: 2, delay: 3.5 }}>
        In Plön und Umgebung bieten wir professionelle Gebäudereinigungsdienste
        für Büros, Praxen und andere Unternehmensbereiche an. Unsere engagierte
        Betreuung und zuverlässige Durchführung garantieren stets erstklassigen
        Service. Teilen Sie uns einfach Ihre Anliegen mit, und gemeinsam finden
        wir die optimale Lösung für Ihre Bedürfnisse.
      </motion.p> */}
      </motion.div>
      <div className="img-div">
        <motion.img
          className="b-logo"
          src="./bLogo.svg"
          alt="logo"
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 30 }}
          transition={{ duration: 3,delay:3 }}
        />
      </div>
    </>
  );
}
