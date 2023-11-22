import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import Logo from './images/logo.gif';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Halima
        </Link>

        <div className="d-flex justify-content-end align-items-center">
          <ul className="navbar-nav">
            <li className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className={`nav-item ${location.pathname === '/about' ? 'active' : ''}`}>
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className={`nav-item ${location.pathname === '/gallery' ? 'active' : ''}`}>
              <Link className="nav-link" to="/gallery">
                Gallery
              </Link>
            </li>
            <li className={`nav-item ${location.pathname === '/contact' ? 'active' : ''}`}>
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>

          
        </div>
        <img src={Logo} width="5%" alt="Logo" className="ml-3" />
      </div>
    </nav>
  );
};

export default Navbar;