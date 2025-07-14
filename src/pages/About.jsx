import React from "react";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import joicePhoto from "../assets/Joice.jpg";
import timPhoto from "../assets/Tim.jpg";
const About = () => {
  return (
    <div className="about-page">
      <section className="team-section">
        <div className="team-member">
          <h3>Joice Conte</h3>
          <img src={joicePhoto} alt="Joice Conte" />
          <p>
            She holds a degree in Industrial Design with professional experience
            in the furniture industry, where she developed a strong eye for
            usability and aesthetics. Currently transitioning into tech, she is
            studying full-stack web development and focusing on building
            interactive, user-friendly interfaces with React. Her background in
            design brings a creative and user-centered approach to every
            project.
          </p>
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/joiceconte/"
              target="_blank"
              rel="noopener noreferrer"
              title="Joice LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://github.com/JoiceCnt"
              target="_blank"
              rel="noopener noreferrer"
              title="Joice GitHub"
            >
              <FaGithub size={24} />
            </a>
          </div>
        </div>

        <div className="team-member">
          <h3>Timal Muralage</h3>
          <img src={timPhoto} alt="Timal Muralage" />
          <p>
            He holds a degree in Graphic Design and has worked as a professional
            bartender, where he developed strong communication and
            problem-solving skills. Now studying full-stack web development, he
            is focused on creating visually appealing and functional web
            applications. His background in design and hospitality brings both
            creativity and adaptability to every project.
          </p>
          <div
            style={{
              marginTop: "10px",
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
            }}
          >
            <a
              href="https://www.linkedin.com/in/timal-muralage-4070541a1/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              target="_blank"
              rel="noopener noreferrer"
              title="Timal LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://github.com/Tim4019"
              target="_blank"
              rel="noopener noreferrer"
              title="Timal GitHub"
            >
              <FaGithub size={24} />
            </a>
          </div>
        </div>
      </section>

      <section className="project-description">
        <h2>About the project</h2>
        <p>
          Veloura Admin is a single-user React application built to efficiently
          manage and explore a curated list of products. Designed with a clean
          and responsive layout, the application offers intuitive navigation and
          user-friendly components to help administrators view, edit, delete,
          and filter products with ease. The project showcases key React
          concepts such as component-based architecture, routing, conditional
          rendering, and dynamic data handling using JSON. It also integrates
          interactive features like category filtering, detailed product views,
          and form-based product updates. This admin dashboard is ideal for
          small-scale e-commerce platforms or inventory management systems,
          combining functionality with a modern UI.
        </p>

        <h1>Features:</h1>
        <ul>
          <li>
            <b>Navbar:</b> Includes logo branding and user information.
          </li>
          <li>
            <b>Sidebar:</b> Navigates between pages and categories.
          </li>
          <li>
            <b>Product List:</b> Displays product data from JSON.
          </li>
          <li>
            <b>Dropdown Filter:</b> Filters products by category.
          </li>
          <li>
            <b>Delete Function:</b> Removes items from the list dynamically.
          </li>
          <li>
            <b>Item Details:</b> Shows additional product details via routing.
          </li>
          <li>
            <b>Responsive Layout:</b> Supports different screen sizes.
          </li>
          <li>
            <b>404 Page:</b> Custom not found page for invalid routes.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default About;
