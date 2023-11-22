import { useState } from "react";
import "./Nav.css";
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="nav">
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
            <a href="/">Home</a>
            <a href="/about">Leistungen</a>
            <a href="/contact">Über uns</a>
            <a href="/contact">Contact</a>
          </div>
        )}
      </div>

      <div className="desktop-navbar">
        <a href="/">Home</a>
        <a href="/about">Leistungen</a>
        <a href="/contact">Über uns</a>
        <a href="/contact">Contact</a>
      </div>
    </div>
  );
};

export default Nav;
