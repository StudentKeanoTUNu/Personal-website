import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#" className="nav-logo">
          <span>Keano Oliver Collins</span>
        </a>
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="#personal" className="nav-link">Personal</a>
          </li>
          <li className="nav-item">
            <a href="#work" className="nav-link">Work</a>
          </li>
          <li className="nav-item">
            <a href="#education" className="nav-link">Education</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

