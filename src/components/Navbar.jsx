import logo from "../assets/VelouraLogo.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar({ onSearch }) {
  const [searchText, setSearchText] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchText(value);
    onSearch(value);
  };

  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="Veloura Logo" className="logo-img" />
      </div>

      <div className="search-bar">
        <span role="img" aria-label="search">
          🔍
        </span>
        <input
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={handleInputChange}
        />
      </div>

      <div className="admin">
        <span className="admin-icon" role="img" aria-label="admin">
          👤
        </span>
        <span>Admin</span>
      </div>
    </nav>
  );
}
