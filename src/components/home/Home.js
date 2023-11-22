import "./Home.css";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const Home = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 769px)",
  });

  if (isDesktopOrLaptop) {
    return (
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
          Professionelle Reinigungsdienste für Ferienhäuser,
          <br /> Büros und mehr.
        </motion.p>
      </div>
    );
  } else {
    // Render alternative content for screens smaller than 1224px
    return (
      <div className="home"> <div className="home">
      <motion.h1
        initial={{ opacity: 0, x: 70 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}>
        XClien
      </motion.h1>
      <motion.div
        className="mid-line"
        initial={{ opacity: 0, }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, delay: 1 }}></motion.div>
      <motion.p
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, delay: 2.2 }}
        className="k-beschreibung">
        Professionelle Reinigungsdienste für Ferienhäuser,
        <br /> Büros und mehr.
      </motion.p>
    </div></div>
    );
  }
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
