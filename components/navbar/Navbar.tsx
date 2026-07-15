"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  /* CLOSE DROPDOWN */

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="navbar">
      {/* LOGO */}

      <a href="#home" className="logo-wrapper">
        <Image
          src="/logo/hardvanta.png"
          alt="Hardvanta Technologies LLP"
          width={50}
          height={50}
          priority
          className="logo-image"
        />

        <div className="logo-text">
          <h2>HARDVANTA</h2>

          <span>TECHNOLOGIES LLP</span>
        </div>
      </a>

      {/* DESKTOP NAV */}

      <nav className="desktop-nav">
        <a href="#home">Home</a>

        <a href="#about">About</a>

        <a href="#services">Services</a>

        <a href="#research">Research</a>

        {/* DROPDOWN */}

        <div className="dropdown" ref={dropdownRef}>
          <button
            className="dropdown-btn"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            Company
            <span className={`dropdown-icon ${dropdownOpen ? "rotate" : ""}`}>
              ▾
            </span>
          </button>

          <div
            className={`dropdown-menu ${dropdownOpen ? "show-dropdown" : ""}`}
          >
            <Link href="/industries">Industries</Link>

            <Link href="/blog">Blog</Link>

            <Link href="/team">Team</Link>

            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </nav>

      {/* CTA */}

      <Link href="/contact" className="nav-btn">
        Get In Touch
      </Link>

      {/* MOBILE MENU BUTTON */}

      <button
        className="mobile-menu-btn"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? "✕" : "☰"}
      </button>

      {/* MOBILE MENU */}

      <div
        className={`mobile-menu ${mobileMenuOpen ? "show-mobile-menu" : ""}`}
      >
        <a href="#home" onClick={() => setMobileMenuOpen(false)}>
          Home
        </a>

        <a href="#about" onClick={() => setMobileMenuOpen(false)}>
          About
        </a>

        <a href="#services" onClick={() => setMobileMenuOpen(false)}>
          Services
        </a>

        <a href="#research" onClick={() => setMobileMenuOpen(false)}>
          Research
        </a>

        <Link href="/industries" onClick={() => setMobileMenuOpen(false)}>
          Industries
        </Link>

        <Link href="/blog" onClick={() => setMobileMenuOpen(false)}>
          Blog
        </Link>

        <Link href="/team" onClick={() => setMobileMenuOpen(false)}>
          Team
        </Link>

        <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
          Contact
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
