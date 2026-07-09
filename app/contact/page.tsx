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

            <h2>Let&apos;s Build Intelligent Solutions Together</h2>

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

      <style jsx>{`
        .popup-overlay {
          position: fixed;
          inset: 0;
          background: rgba(15, 18, 26, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          z-index: 1000;
          overflow-y: auto;
        }

        .popup-box {
          position: relative;
          width: 100%;
          max-width: 560px;
          max-height: 90vh;
          overflow-y: auto;
          background: #ffffff;
          border-radius: 20px;
          padding: 40px 44px 36px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);
          -webkit-overflow-scrolling: touch;
        }

        .close-btn {
          position: absolute;
          top: 16px;
          right: 16px;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: none;
          background: #f1f2f5;
          color: #333;
          font-size: 16px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s ease;
        }

        .close-btn:hover {
          background: #e2e4e9;
        }

        .popup-tag {
          display: inline-block;
          background: #e8efff;
          color: #2952e3;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.06em;
          padding: 6px 14px;
          border-radius: 20px;
          margin: 0 0 20px;
        }

        .popup-box h2 {
          font-size: 32px;
          line-height: 1.2;
          font-weight: 800;
          color: #10131a;
          margin: 0 0 16px;
        }

        .popup-description {
          font-size: 15px;
          line-height: 1.6;
          color: #6b7280;
          margin: 0 0 28px;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .contact-form input,
        .contact-form textarea {
          width: 100%;
          box-sizing: border-box;
          padding: 13px 16px;
          font-size: 14px;
          border: 1px solid #e2e4e9;
          border-radius: 10px;
          background: #fafbfc;
          color: #10131a;
          outline: none;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
          font-family: inherit;
        }

        .contact-form input::placeholder,
        .contact-form textarea::placeholder {
          color: #9ca3af;
        }

        .contact-form input:focus,
        .contact-form textarea:focus {
          border-color: #2952e3;
          box-shadow: 0 0 0 3px rgba(41, 82, 227, 0.12);
        }

        .contact-form textarea {
          resize: vertical;
          min-height: 100px;
        }

        .submit-btn {
          margin-top: 6px;
          width: 100%;
          padding: 14px;
          font-size: 15px;
          font-weight: 700;
          color: #fff;
          background: linear-gradient(135deg, #12194f, #2952e3);
          border: none;
          border-radius: 10px;
          cursor: pointer;
          transition: opacity 0.2s ease, transform 0.1s ease;
        }

        .submit-btn:hover {
          opacity: 0.92;
        }

        .submit-btn:active {
          transform: scale(0.98);
        }

        /* TABLET */
        @media (max-width: 768px) {
          .popup-box {
            max-width: 460px;
            padding: 32px 28px 28px;
            border-radius: 16px;
          }

          .popup-box h2 {
            font-size: 26px;
          }

          .popup-description {
            font-size: 14px;
            margin-bottom: 22px;
          }
        }

        /* MOBILE */
        @media (max-width: 480px) {
          .popup-overlay {
            padding: 12px;
          }

          .popup-box {
            padding: 26px 20px 22px;
            border-radius: 14px;
            max-height: 95vh;
          }

          .popup-tag {
            font-size: 11px;
            padding: 5px 12px;
            margin-bottom: 16px;
          }

          .popup-box h2 {
            font-size: 22px;
          }

          .popup-description {
            font-size: 13px;
            margin-bottom: 18px;
          }

          .contact-form input,
          .contact-form textarea {
            padding: 11px 14px;
            font-size: 13px;
          }

          .submit-btn {
            padding: 12px;
            font-size: 14px;
          }

          .close-btn {
            width: 32px;
            height: 32px;
            top: 12px;
            right: 12px;
          }
        }
      `}</style>
    </main>
  );
}