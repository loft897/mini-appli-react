import React from "react";
import { NavLink } from "react-router-dom"; // remplace le href -> a sur html (lien)

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>accueil</li>
        </NavLink>

        <NavLink
          to="/about" className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>à propos</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
