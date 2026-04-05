import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FlaskConical } from 'lucide-react';
import globalData from '../data/global.json';
import './Navbar.css';

export default function Navbar() {
  const location = useLocation();
  const { siteTitle, links } = globalData.navbar;

  return (
    <motion.header 
      className="navbar-header"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
    >
      <nav className="navbar container">
        <Link to="/" className="navbar-logo">
          <FlaskConical size={28} className="logo-icon" />
          <span>{siteTitle}</span>
        </Link>
        <div className="navbar-links">
          {links.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className={`nav-link ${location.pathname.startsWith(link.path) ? 'active' : ''}`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </nav>
    </motion.header>
  );
}
