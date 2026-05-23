"use client";

import { useEffect, useState } from "react";

export default function ContactPage() {
  const [showPopup, setShowPopup] = useState(true);

  /* PREVENT BODY SCROLL */

  useEffect(() => {
    document.body.style.overflow = showPopup ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showPopup]);

  return (
    <main className="contact-page">
      {/* DIRECT POPUP */}

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <button className="close-btn" onClick={() => setShowPopup(false)}>
              ✕
            </button>

            <p className="popup-tag">CONTACT HARDVANTA</p>

            <h2>Let’s Build Intelligent Solutions Together</h2>

            <p className="popup-description">
              Connect with Hardvanta Technologies LLP for Embedded Systems, IoT
              Development, AI Solutions, Industrial Automation, and Engineering
              Research.
            </p>

            <form className="contact-form">
              <input type="text" placeholder="Your Name" />

              <input type="email" placeholder="Your Email" />

              <input type="text" placeholder="Phone Number" />

              <input type="text" placeholder="Subject" />

              <textarea placeholder="Tell us about your project..." rows={5} />

              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
