import React from "react";
import profileIcon from "../assets/profile.png";

const About = () => {
  return (
    <div className="about-page">
      <section className="team-section">
        <div className="team-member">
          <h3>Joice Conte</h3>
          <img src={profileIcon} alt="Profile" />
          <p>
            This is simply dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>

        <div className="team-member">
          <h3>Tim</h3>
          <img src={profileIcon} alt="Profile" />
          <p>
            This is simply dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </section>

      <section className="project-description">
        <h2>About the project</h2>
        <p>
          Veloura Admin is a single-user React application designed to manage
          and explore a collection of products through a responsive and
          user-friendly interface. The project showcases core React concepts
          such as routing, component-based structure, conditional rendering, and
          dynamic filtering.
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

        <br></br>
      </section>
    </div>
  );
};

export default About;
