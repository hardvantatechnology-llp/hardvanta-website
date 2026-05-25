import Image from "next/image";

import Link from "next/link";

import { Mail, MapPin, Globe, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      {/* BACKGROUND GLOW */}

      <div className="footer-blur footer-blur-one"></div>

      <div className="footer-blur footer-blur-two"></div>

      {/* MAIN */}

      <div className="footer-container">
        {/* BRAND */}

        <div className="footer-brand">
          <Link href="/" className="footer-logo-wrap">
            <Image
              src="/logo/logo.jpeg"
              alt="Hardvanta Technologies LLP"
              width={58}
              height={58}
              priority
              className="footer-logo"
            />

            <div className="footer-brand-text">
              <h2>HARDVANTA</h2>

              <span>TECHNOLOGIES LLP</span>
            </div>
          </Link>

          <p className="footer-description">
            We help businesses build intelligent engineering systems through
            Embedded Technologies, IoT Solutions, Artificial Intelligence,
            Firmware Engineering, and Industrial Automation.
          </p>

          {/* SOCIAL */}

          <div className="footer-socials">
            <a
              href="https://www.linkedin.com/in/hardvanta-technologies-llp-3561a2407/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social"
            >
              <span className="linkedin-badge">in</span>

              <span>LinkedIn</span>

              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>

        {/* SERVICES */}

        <div className="footer-links">
          <h4>Services</h4>

          <ul>
            <li>
              <Link href="/services">Embedded Systems</Link>
            </li>

            <li>
              <Link href="/services">IoT Development</Link>
            </li>

            <li>
              <Link href="/services">PCB Design</Link>
            </li>

            <li>
              <Link href="/services">AI Solutions</Link>
            </li>

            <li>
              <Link href="/services">Industrial Automation</Link>
            </li>
          </ul>
        </div>

        {/* COMPANY */}

        <div className="footer-links">
          <h4>Company</h4>

          <ul>
            <li>
              <Link href="/about">About Us</Link>
            </li>

            <li>
              <Link href="/research">Research</Link>
            </li>

            <li>
              <Link href="/industries">Industries</Link>
            </li>

            <li>
              <Link href="/team">Leadership</Link>
            </li>

            <li>
              <Link href="/blog">Blog</Link>
            </li>

            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* CONTACT */}

        <div className="footer-contact">
          <h4>Contact</h4>

          <div className="footer-contact-item">
            <MapPin size={18} />

            <p>Greater Noida, Uttar Pradesh, India</p>
          </div>

          <div className="footer-contact-item">
            <Mail size={18} />

            <a href="mailto:info@hardvantatechnologies.in">
              info@hardvantatechnologies.in
            </a>
          </div>

          <div className="footer-contact-item">
            <Globe size={18} />

            <a
              href="https://hardvantatechnologies.in"
              target="_blank"
              rel="noopener noreferrer"
            >
              hardvantatechnologies.in
            </a>
          </div>
        </div>
      </div>

      {/* BOTTOM */}

      <div className="footer-bottom">
        <p>© 2026 Hardvanta Technologies LLP. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
