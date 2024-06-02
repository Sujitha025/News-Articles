// src/components/NavBar.js

import React from 'react';

const NavBar = ({ children,onNavItemClick }) => {
  return (
    <nav>
      <div className="main-nav container flex">
        {/* <a href="#" className="company-logo">
          <img src="" alt="logo" />
        </a> */}
        <div className="nav-links">
          <ul className="flex">
            <li className="hover-link nav-item" id="ipl" onClick={() => onNavItemClick('ipl')}>
              IPL
            </li>
            <li className="hover-link nav-item" id="finance" onClick={() => onNavItemClick('finance')}>
              Finance
            </li>
            <li className="hover-link nav-item" id="politics" onClick={() => onNavItemClick('politics')}>
              Politics
            </li>
            <li className="hover-link nav-item" id="social media" onClick={() => onNavItemClick('social media')}>
              Social Media
            </li>
          </ul>
        </div>
        {children}
      </div>
    </nav>
    
  );
};

export default NavBar;
