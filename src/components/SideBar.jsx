import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SideBar({ categories = [], onCategoryClick, onReset }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="sidebar">
      <button className="sidebar-button" onClick={() => navigate("/")}>
        Home
      </button>

      <button
        className="sidebar-button"
        onClick={toggleDropdown}
        style={{ marginTop: "5px" }}
      >
        {showDropdown ? "Hide Products" : "Show Products"}
      </button>

      {showDropdown && (
        <div className="product-dropdown">
          <ul>
            <li>
              <button
                onClick={() => {
                  onReset();
                  navigate("/products");
                }}
              >
                All Products
              </button>
            </li>
            {categories.map((category, index) => (
              <li key={index}>
                <button
                  onClick={() => {
                    onCategoryClick(category);
                    navigate("/products");
                  }}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      <button className="sidebar-button" onClick={() => navigate("/about")}>
        About
      </button>

      <button className="sidebar-button" onClick={() => navigate("/dashboard")}>
        Dashboard
      </button>
    </div>
  );
}

export default SideBar;
