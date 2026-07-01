import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Mirchi Point', to: '/mirchi-point' },
  { label: 'Fruit Box', to: '/fruit-box' },
  { label: 'OG Soda', to: '/og-soda' },
  { label: 'Idly & Dosa', to: '/idly-dosa' },
  { label: 'Contact', to: '/contact' }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="brand-link">
          <span className="brand-badge">SF</span>
          <div>
            <strong>Shanmukh Food & Beverage</strong>
            <span>Fresh food, healthy choices</span>
          </div>
        </Link>
      </div>

      <button className="navbar-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
        {open ? <FiX size={22} /> : <FiMenu size={22} />}
      </button>

      <nav className={`navbar-menu ${open ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            onClick={() => setOpen(false)}
            className={({ isActive }) => `navbar-item ${isActive ? 'active' : ''}`}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>

      <Link className="navbar-cta" to="/contact">Order Now</Link>
    </header>
  );
}
