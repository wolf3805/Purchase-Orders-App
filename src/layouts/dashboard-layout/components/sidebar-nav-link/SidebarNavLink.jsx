import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, useMatch, useResolvedPath } from 'react-router-dom';

import './SidebarNavLink.scss';

function SidebarNavLink({
  end,
  to,
  className = null,
  iconClassName,
  children,
}) {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end });

  return (
    <NavLink
      end={end}
      to={to}
      className={`sidebar-nav-link ${className ? `${className}` : ''} ${(match ? 'active' : '')}`}
    >
      <i className={`icon ${iconClassName}`} />
      <span className="text">
        {children}
      </span>
    </NavLink>
  );
}

export default SidebarNavLink;

SidebarNavLink.propTypes = {
  end: PropTypes.bool,
  to: PropTypes.string.isRequired,
  className: PropTypes.string,
  iconClassName: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
