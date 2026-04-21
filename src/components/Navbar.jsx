import { useState } from "react";
import "../index.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <a href="#" className="navbar__logo">URBAN THREADS</a>

        <button
          className={`navbar__toggle${open ? " open" : ""}`}
          aria-label="Abrir menú"
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`navbar__menu${open ? " open" : ""}`}>
          <li><a href="#" className="navbar__link" onClick={() => setOpen(false)}>Inicio</a></li>
          <li><a href="#" className="navbar__link" onClick={() => setOpen(false)}>Productos</a></li>
          <li><a href="#" className="navbar__link" onClick={() => setOpen(false)}>Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
}