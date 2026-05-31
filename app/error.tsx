"use client";

import Link from "next/link";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <main className="error-page">
      <div className="error-container">
        <span className="error-tag">HARDVANTA TECHNOLOGIES LLP</span>

        <h1>Something Went Wrong</h1>

        <p>
          An unexpected issue occurred while loading the engineering
          infrastructure. Please try again.
        </p>

        <div className="error-actions">
          <button onClick={() => reset()} className="error-primary-btn">
            Try Again
          </button>

          <Link href="/" className="error-secondary-btn">
            Go Home
          </Link>
        </div>
      </div>
    </main>
  );
}
