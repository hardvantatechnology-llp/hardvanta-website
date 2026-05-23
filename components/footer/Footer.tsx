import Image from "next/image";
import Link from "next/link";

import { Mail, MapPin, Globe, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      {/* BACKGROUND BLUR */}

      <div className="footer-blur footer-blur-one"></div>

      <div className="footer-blur footer-blur-two"></div>

      <div className="footer-container">
        {/* BRAND */}

        <div className="footer-brand">
          <div className="footer-logo-wrap">
            <Image
              src="/logo/logo.jpeg"
              alt="Hardvanta Technologies LLP"
              width={60}
              height={60}
              className="footer-logo"
            />

            <div className="footer-brand-text">
              <h2>HARDVANTA</h2>

              <span>TECHNOLOGIES LLP</span>
            </div>
          </div>

          <p className="footer-description">
            Hardvanta Technologies LLP is a research-driven engineering company
            focused on Embedded Systems, IoT Development, Artificial
            Intelligence, PCB Design, Firmware Engineering, and Industrial
            Automation solutions.
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

              <ArrowRight size={15} />
            </a>
          </div>
        </div>

        {/* QUICK LINKS */}

        <div className="footer-links">
          <h4>Quick Links</h4>

          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>

            <li>
              <Link href="/about">About</Link>
            </li>

            <li>
              <Link href="/services">Services</Link>
            </li>

            <li>
              <Link href="/research">Research</Link>
            </li>

            <li>
              <Link href="/industries">Industries</Link>
            </li>

            <li>
              <Link href="/team">Team</Link>
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

            <p>
              Knowledge Park 3,
              <br />
              Greater Noida,
              <br />
              Uttar Pradesh, India
            </p>
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
