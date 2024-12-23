import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/logo192.svg";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const headerRef = useRef();
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const navigateMenuHandler = (event, path) => {
    event.preventDefault();
    setMobileMenuOpen(false);
    setTimeout(() => {
      navigate(path);
    }, 200);
  };

  useEffect(() => {
    const height = headerRef.current.offsetHeight;
  }, []);

  return (
    <header ref={headerRef} className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <Link className="logo_header" onClick={(event) => navigateMenuHandler(event, "/")}>
            <span className="logo_title">
              DEV<span className="path_title">PATH</span>
            </span>
            <img src={logo} />
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className={`menu ${isMobileMenuOpen ? "menu-open" : ""}`}>
          <Link
            onClick={(event) => navigateMenuHandler(event, "/")}
            className="menu-item"
          >
            Home
          </Link>
          <Link
            onClick={(event) => navigateMenuHandler(event, "/services")}
            className="menu-item"
          >
            Services
          </Link>
          <Link
            onClick={(event) => navigateMenuHandler(event, "/portfolio")}
            className="menu-item"
          >
            Portfolio
          </Link>
          <Link
            onClick={(event) => navigateMenuHandler(event, "/contact")}
            className="menu-item"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Hamburger Menu */}
        <div
          className={`hamburger ${isMobileMenuOpen ? "hamburger-active" : ""}`}
          onClick={toggleMobileMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
