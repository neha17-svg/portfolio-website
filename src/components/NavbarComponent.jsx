import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavbarStyle.css";

export default function NavbarComponent() {
  const location = useLocation();
  const [hideNavbar, setHideNavbar] = useState(false);

  const handleClick = () => {
    // close mobile menu
    const navbar = document.getElementById("navbarNav");
    if (navbar && navbar.classList.contains("show")) {
      navbar.classList.remove("show");
    }

    // hide navbar (slide up)
    setHideNavbar(true);

    // show navbar again after 1.5 sec
    setTimeout(() => setHideNavbar(false), 1500);
  };

  // If route changes → reset navbar
  useEffect(() => {
    setHideNavbar(false);
  }, [location]);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top glass-navbar shadow-sm ${hideNavbar ? "navbar-hide" : ""}`}>
      <div className="container">
        <Link className="navbar-brand fw-bold glow-logo" to="/" onClick={handleClick}>
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
                    onClick={handleClick}
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


