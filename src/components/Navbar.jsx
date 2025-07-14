import logo from "../assets/VelouraLogo.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Navbar({ onSearch }) {
  const [searchText, setSearchText] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showMenu, setShowMenu] = useState(false); // controla visibilidade
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchText(value);
    onSearch(value);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    setShowMenu(false);
    navigate("/dashboard");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setShowMenu(false);
    navigate("/");
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav style={{ position: "relative" }}>
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

      <div
        className="admin"
        onClick={toggleMenu}
        style={{ cursor: "pointer", position: "relative" }}
      >
        <span className="admin-icon" role="img" aria-label="admin">
          👤
        </span>
        <span>Admin</span>

        {showMenu && (
          <div
            className="dropdown-menu"
            style={{
              position: "absolute",
              top: "100%",
              right: 0,
              backgroundColor: "#fff",
              boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
              padding: "10px",
              borderRadius: "6px",
              zIndex: 1000,
            }}
          >
            {isLoggedIn ? (
              <button onClick={handleLogout}>Logout</button>
            ) : (
              <button onClick={handleLogin}>Login</button>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
