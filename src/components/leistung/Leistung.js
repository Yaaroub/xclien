import React from "react";
import "./Leistung.css";
import { motion } from "framer-motion";

const Dienstleistung = ({ title, description, delay }) => {
  return (
    <motion.li className="l-li"
    initial={{ opacity: 0, x: -30 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1.5, delay: delay }}
    >
      <h2 className=".l-h2">{title}</h2>
      <p className=".l-p">{description}</p>
    </motion.li>
  );
};

const Leistung = () => {
  const dienstleistungen = [
    {
        title: "Unterhaltsreinigung",
        description: "Tägliche oder regelmäßige Reinigung von Büros, Geschäftsgebäuden, öffentlichen Einrichtungen usw.",
        delay: 2.5,
      },
      {
        title: "Grundreinigung",
        description: "Intensive Reinigung von Räumlichkeiten, um eine tiefgehende Sauberkeit zu gewährleisten. Dies kann weniger häufig, aber gründlicher sein.",
        delay: 2.7,
      },
      {
        title: "Teppichreinigung",
        description: "Reinigung von Teppichen, Teppichböden und Polstermöbeln.",
        delay: 2.9,
      },
      {
        title: "Fensterreinigung",
        description: "Reinigung von Fenstern und Glasflächen, sowohl innen als auch außen.",
        delay: 3.1,
      },
      {
        title: "Baureinigung",
        description: "Reinigung nach Bauarbeiten, Renovierungen oder Umbauten, um Baustaub und Schmutz zu beseitigen.",
        delay: 3.3,
      },
      {
        title: "Glasreinigung",
        description: "Spezialisierte Reinigung von Glasflächen, einschließlich Fassaden.",
        delay: 3.5,
      },
      {
        title: "Industriereinigung",
        description: "Reinigung von Produktionsstätten, Lagerhallen und anderen industriellen Einrichtungen.",
        delay: 3.7,
      },
      {
        title: "Treppenhausreinigung",
        description: "Reinigung von Treppenhäusern in Mehrfamilienhäusern oder Geschäftsgebäuden.",
        delay: 3.9,
      },
      {
        title: "Hygiene- und Desinfektionsdienste",
        description: "Besonders wichtig in Zeiten von Krankheitsausbrüchen, um eine saubere und sichere Umgebung zu gewährleisten.",
        delay: 4.1,
      },
      {
        title: "Spezialreinigung",
        description: "Reinigung von besonderen Bereichen wie Serverräumen, Labors oder Reinräumen.",
        delay: 4.3,
      },
      {
        title: "Graffiti-Entfernung",
        description: "Beseitigung von Graffiti an Gebäuden.",
        delay: 4.5,
      },
      {
        title: "Umweltfreundliche Reinigung",
        description: "Verwendung von umweltfreundlichen Reinigungsmitteln und -verfahren.",
        delay: 4.7,
      },
      {
        title: "Eventreinigung",
        description: "Reinigung vor oder nach Veranstaltungen in Veranstaltungsorten.",
        delay: 4.9,
      },
      {
        title: "Büroreinigung",
        description: "Tägliche Reinigung von Büros, Konferenzräumen und Gemeinschaftsbereichen.",
        delay: 5.1,
      },
      {
        title: "Küchenreinigung",
        description: "Reinigung von Küchen in Restaurants, Cafés oder anderen Einrichtungen.",
        delay: 5.3,
      },
  ];

  return (
    <main>
      <div className="leistungen">
        <motion.h1
           initial={{ opacity: 0, x: 70 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 2 }}
        >
          Unsere Dienstleistungen
        </motion.h1>
        <motion.div
          className="mit-line"
          initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 1 }}
        ></motion.div>

        <ul className="leistungen-liste">
          {dienstleistungen.map((dienst, index) => (
            <Dienstleistung
              key={index}
              title={dienst.title}
              description={dienst.description}
              delay={dienst.delay}
            />
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Leistung;