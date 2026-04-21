import { useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <a href="#" className="navbar__logo">
          URBAN THREADS
        </a>

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
          <li>
            <Link to="/" className="navbar__link">
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/products" className="navbar__link">
              Productos
            </Link>
          </li>
          <li>
            <Link to="/contact" className="navbar__link">
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
