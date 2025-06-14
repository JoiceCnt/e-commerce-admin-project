import React from "react";
import VelouraLogo from "../assets/VelouraLogo.jpg";

export const Navbar = () => {
  return (
    <nav>
      <img src={VelouraLogo} alt="Veloura Logo" />
      <h2> NavBar text</h2>
      <button>Logout</button>
    </nav>
  );
};
