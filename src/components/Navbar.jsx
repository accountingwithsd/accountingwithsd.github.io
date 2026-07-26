import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import logoImg from '../assets/Logo.png';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <div className="logo" onClick={() => scrollTo('hero')}>
        <img src={logoImg} alt="S.D. Jagoda Logo" />
        <div>
          <div className="logo-text">S.D. JAGODA</div>
          <div className="logo-sub">A/L ACCOUNTING</div>
        </div>
      </div>

      <div className={`nav-links ${open ? 'open' : ''}`}>
        {['about', 'timetable', 'documents', 'videos', 'contact'].map((s) => (
          <a key={s} href={`#${s}`} onClick={(e) => { e.preventDefault(); scrollTo(s); }}>
            {s.charAt(0).toUpperCase() + s.slice(1)}
          </a>
        ))}
      </div>

      <a href="tel:0718115523" className="nav-cta">
        <Phone size={14} /> 071 811 5523
      </a>

      <button className="menu-toggle" onClick={() => setOpen(!open)}>
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>
    </nav>
  );
}
