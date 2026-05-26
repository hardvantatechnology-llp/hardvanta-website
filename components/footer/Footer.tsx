import Image from "next/image";
import Link from "next/link";

import { Mail, MapPin, Globe, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      {/* BACKGROUND */}

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
              width={64}
              height={64}
              priority
              quality={100}
              className="footer-logo"
            />

            <div className="footer-brand-text">
              <h2>HARDVANTA</h2>

              <span>TECHNOLOGIES LLP</span>
            </div>
          </Link>

          <p className="footer-description">
            Hardvanta Technologies LLP is a research-driven engineering company
            focused on Embedded Systems, Artificial Intelligence, Industrial
            IoT, Firmware Engineering, PCB Design, and Industrial Automation
            solutions for future-ready industries.
          </p>

          <a
            href="https://www.linkedin.com/company/hardvanta-technologies-llp/posts/?feedView=all"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-linkedin"
          >
            LinkedIn
            <ArrowUpRight size={14} />
          </a>
        </div>

        {/* SERVICES */}

        <div className="footer-links">
          <h4>Services</h4>

          <ul>
            <li>
              <Link href="/services">Embedded Systems</Link>
            </li>

            <li>
              <Link href="/services">Industrial IoT</Link>
            </li>

            <li>
              <Link href="/services">PCB Engineering</Link>
            </li>

            <li>
              <Link href="/services">Firmware Development</Link>
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
              <Link href="/about">About</Link>
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
            <MapPin size={17} />

            <p>Greater Noida, Uttar Pradesh, India</p>
          </div>

          <div className="footer-contact-item">
            <Mail size={17} />

            <a href="mailto:info@hardvantatechnologies.in">
              info@hardvantatechnologies.in
            </a>
          </div>

          <div className="footer-contact-item">
            <Globe size={17} />

            <a
              href="https://hardvantatechnologies.in"
              target="_blank"
              rel="noopener noreferrer"
            >
              hardvantatechnologies.in
            </a>
          </div>

          <Link href="/contact" className="footer-cta-btn">
            Start a Project
            <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>

      {/* BOTTOM */}

      <div className="footer-bottom">
        <p>© 2026 Hardvanta Technologies LLP. All Rights Reserved.</p>

        <div className="footer-bottom-links">
          <Link href="/">Home</Link>

          <Link href="/services">Services</Link>

          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
