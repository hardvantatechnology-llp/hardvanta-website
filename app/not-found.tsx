import Link from "next/link";

export default function NotFound() {
  return (
    <main className="notfound-page">
      <div className="notfound-container">
        <span className="notfound-tag">ERROR 404</span>

        <h1>Page Not Found</h1>

        <p>
          The page you are looking for does not exist or may have been moved
          within the Hardvanta Technologies platform.
        </p>

        <div className="notfound-actions">
          <Link href="/" className="notfound-primary-btn">
            Back To Home
          </Link>

          <Link href="/contact" className="notfound-secondary-btn">
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  );
}
