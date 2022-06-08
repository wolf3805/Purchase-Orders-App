import React from 'react';
import SidebarNavLink from '../sidebar-nav-link/SidebarNavLink';

import './LeftSidebar.scss';

function LeftSidebar() {
  return (
    <div className="left-sidebar">
      <ul className="nav">
        <li className="nav-item">
          <SidebarNavLink
            to="/"
            iconClassName="fas fa-home"
          >
            Inicio
          </SidebarNavLink>
        </li>
        <li className="nav-item">
          <SidebarNavLink
            to="ordenes-de-compra"
            iconClassName="fa-solid fa-clipboard"
            end
          >
            Ordenes de compra
          </SidebarNavLink>
        </li>
      </ul>
    </div>
  );
}

export default LeftSidebar;
