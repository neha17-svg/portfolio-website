import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavbarStyle.css";

export default function NavbarComponent() {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg fixed-top glass-navbar shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold glow-logo" to="/">
          🌸 &lt;Neha /&gt;
        </Link>
        <button
          className="navbar-toggler custom-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {[
              { name: "Home", emoji: "🏠" },
              { name: "About", emoji: "👩‍💻" },
              { name: "Projects", emoji: "🚀" },
              { name: "Skills", emoji: "⚙️" },
              { name: "Contact", emoji: "📞" },
            ].map((item) => {
              const path = item.name === "Home" ? "/" : `/${item.name.toLowerCase()}`;
              const isActive = location.pathname === path;
              return (
                <li className="nav-item" key={item.name}>
                  <Link
                    className={`nav-link nav-animated ${isActive ? "active-link" : ""}`}
                    to={path}
                  >
                    {item.emoji} {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}


