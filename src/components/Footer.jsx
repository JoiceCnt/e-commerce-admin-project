import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        © 2025 Veloura Project
        <a
          href="https://github.com/JoiceCnt/e-commerce-admin-project"
          className="text-blue-600 underline hover:text-blue-800 transition"
          target="_blank"
          rel="noreferrer noopener"
        >
          GitHub
        </a>
      </p>
    </footer>
  );
};

export default Footer;
