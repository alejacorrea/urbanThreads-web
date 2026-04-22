import { NavLink } from 'react-router-dom'
import { useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors duration-200 ${
      isActive ? 'text-[#F5A623]' : 'text-gray-300 hover:text-white'
    }`

  return (
    <nav className="bg-[#1a1a1a] border-b border-[#2a2a2a] sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <NavLink to="/" className="text-white font-extrabold text-sm tracking-widest uppercase">
          Urban Threads
        </NavLink>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-10">
          <NavLink to="/" className={linkClass}>Inicio</NavLink>
          <NavLink to="/products" className={linkClass}>Productos</NavLink>
          <NavLink to="/contact" className={linkClass}>Contacto</NavLink>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#1a1a1a] border-t border-[#2a2a2a] px-6 py-4 flex flex-col gap-4">
          <NavLink to="/" className={linkClass} onClick={() => setMenuOpen(false)}>Inicio</NavLink>
          <NavLink to="/products" className={linkClass} onClick={() => setMenuOpen(false)}>Productos</NavLink>
          <NavLink to="/contact" className={linkClass} onClick={() => setMenuOpen(false)}>Contacto</NavLink>
        </div>
      )}
    </nav>
  )
}