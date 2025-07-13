import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import data from "../assets/data.json";

export default function ItemDetailsPage() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const product = data.find((item) => item.id.toString() === productId);

  if (!product) {
    return (
      <div className="item-details">
        <h2>Item not found</h2>
        <Link to="/" className="home-button">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="item-details">
      <img src={product.thumbnail} alt={product.title} className="item-image" />
      <div className="item-info">
        <h2>{product.title}</h2>
        <p>
          <strong>Category:</strong> {product.category}
        </p>
        <p>
          <strong>Price:</strong> ${product.price}
        </p>
        <p>{product.description}</p>

        <div className="product-actions">
          <button
            onClick={() => navigate(`/dashboard/manage?id=${product.id}`)}
          >
            ✏️ Update Product
          </button>
        </div>

        <p style={{ marginTop: "1.5rem", fontStyle: "italic", color: "#555" }}>
          You can manage this product using Update Product above. For
          navigation, use the Sidebar to check to Home, Dashboard or About
          information.
        </p>

        <Link to="/" className="home-button">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
