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
      <img src={product.image} alt={product.title} className="item-image" />
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
          <button onClick={() => navigate(`/edit/${product.id}`)}>
            ✏️ Edit Product
          </button>
          <button onClick={() => navigate(`/order/${product.id}`)}>
            📝 Make Order
          </button>
          <button onClick={() => navigate(`/reviews/${product.id}`)}>
            ⭐ View Reviews
          </button>
          <button onClick={() => navigate(`/edit-info/${product.id}`)}>
            🔧 Edit Info
          </button>
        </div>

        <p style={{ marginTop: "1.5rem", fontStyle: "italic", color: "#555" }}>
          You can manage this product using the actions above. For navigation,
          use the Sidebar to return to Home, Dashboard or About.
        </p>

        <Link to="/" className="home-button">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
