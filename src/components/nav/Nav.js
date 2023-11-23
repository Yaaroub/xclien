import { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="nav">
      <img src="/logo.svg" alt="logo" />
      <div className="burger-menu">
        <div
          className={`burger-icon ${isOpen ? "open" : ""}`}
          onClick={handleToggle}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        {isOpen && (
          <div className="menu">
            <Link to="/">Home</Link>
            <Link to="/leistung">Leistungen</Link>
            <Link to="/überUns">Über uns</Link>
            <Link to="/kontakt">Kontakt</Link>
          </div>
        )}
      </div>

      <div className="desktop-navbar">
        <Link to="/">Home</Link>
        <Link to="/leistung">Leistungen</Link>
        <Link to="/überUns">Über uns</Link>
        <Link to="/kontakt">Kontakt</Link>
      </div>
    </div>
  );
};

export default Nav;
