import React from "react";

function SideBar({ categories, onCategoryClick, onReset }) {
  return (
    <div className="sidebar">
      <h3>Categories</h3>

      <button onClick={onReset}>All Products</button>

      {categories.map((category, index) => (
        <button key={index} onClick={() => onCategoryClick(category)}>
          {category}
        </button>
      ))}

      <button>Shipping Information</button>
    </div>
  );
}

export default SideBar;
