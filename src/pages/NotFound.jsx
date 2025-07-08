import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Page not Found</h2>
      <p>The page you’re looking for doesn’t exist or has been moved.</p>
      <Link to="/" className="home-button">
        Back to Home
      </Link>
    </div>
  );
}
