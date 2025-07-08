import React from "react";
import { useParams, Link } from "react-router-dom";
import data from "../assets/data.json";

export default function ItemDetailsPage() {
  const { productId } = useParams();
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
        <h2>{product.title} </h2>
        <p>
          <strong>Category:</strong>
          {product.category}
        </p>
        <p>
          <strong>Price:</strong> ${product.price}
        </p>
        <p>{product.description}</p>
        <Link to="/" className="home-button">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
