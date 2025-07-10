import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import data from "../assets/data.json";

export default function Home() {
  const navigate = useNavigate();

  const [lowStock, setLowStock] = useState([]);
  const [lowRatings, setLowRatings] = useState([]);

  const totalProducts = data.length;
  const totalCategories = new Set(data.map((p) => p.category)).size;
  const averageRating =
    data.reduce((sum, p) => sum + (p.rating || 0), 0) / totalProducts;
  const topDiscount = Math.max(...data.map((p) => p.discountPercentage || 0));

  useEffect(() => {
    const stockThreshold = 5;
    const ratingThreshold = 4;

    setLowStock(data.filter((product) => product.stock < stockThreshold));

    setLowRatings(
      data.filter((product) => {
        if (product.reviews?.length > 0) {
          const avg =
            product.reviews.reduce((sum, r) => sum + r.rating, 0) /
            product.reviews.length;
          return avg < ratingThreshold;
        }
        return false;
      })
    );
  }, []);

  return (
    <div className="home-page">
      <h1>
        Welcome to <i>Veloura</i> Admin
      </h1>
      <p>Manage your inventory, check alerts, and monitor performance.</p>

      <div className="overview">
        <div className="overview-card">📦 Total Products: {totalProducts}</div>
        <div className="overview-card">📂 Categories: {totalCategories}</div>
        <div className="overview-card">
          ⭐ Average Rating: {averageRating.toFixed(2)}
        </div>
        <div className="overview-card">
          🏷️ Top Discount: {topDiscount.toFixed(1)}%
        </div>
      </div>

      <h2 className="alerts-title">Alerts</h2>

      <div className="alerts">
        <div className="alert-card">
          🛒 <strong>{lowStock.length} products low in stock</strong>
        </div>
        <div className="alert-card">
          ⭐ <strong>{lowRatings.length} products with low ratings</strong>
        </div>
      </div>

      <button
        className="go-to-dashboard"
        onClick={() => navigate("/dashboard")}
      >
        Go to Dashboard
      </button>
    </div>
  );
}
