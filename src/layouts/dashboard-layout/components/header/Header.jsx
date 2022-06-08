import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

function Header() {
  return (
    <div className="header">
      <div className="brand">
        <Link to="/">
          OrdersApp
        </Link>
      </div>
      <div className="menu">
        <div className="menu-item">
          <div className="menu-icon">
            <i className="fas fa-inbox" />
          </div>
        </div>
        <div className="menu-item">
          <div className="menu-icon">
            <i className="far fa-bell" />
          </div>
        </div>
        <div className="menu-item">
          <button
            className="menu-dropdown-button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            type="button"
          >
            Alan Galeana
          </button>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="/">
              Perfil
            </a>
            <div className="dropdown-divider" />
            <button
              className="dropdown-item"
              type="button"
            >
              Cerrar sesión
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
