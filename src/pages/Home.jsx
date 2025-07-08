import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import data from "../assets/data.json";

export default function Home() {
  const navigate = useNavigate();
  const [lowStock, setLowStock] = useState([]);
  const [noOrders, setNoOrders] = useState([]);
  const [lowRatings, setLowRating] = useState([]);

  useEffect(() => {
    const stockThreshold = 5;
    const ratingThreshold = 4;

    setLowStock(data.filter((product) => product.stock < stockThreshold));
    setNoOrders(data.filter((product) => product.orders === 0));
    setLowRating(
      data.filter((product) => {
        if (product.reviews && product.reviews.length > 0) {
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
        Welcome to <i>Veloura</i> Admin Page
      </h1>
      <p>Manage your inventory, check alerts, and monitor performance.</p>

      <div className="alerts">
        <div className="alert-card">
          🛒 {lowStock.length} products low in stock
          {lowStock.map((p) => (
            <button
              key={p.id}
              onClick={() => navigate(`/product/details/${p.id}`)}
            >
              {p.title}
            </button>
          ))}
        </div>

        <div className="alert-card">
          ⏳ {noOrders.length} products with no recent orders
          {noOrders.map((p) => (
            <button
              key={p.id}
              onClick={() => navigate(`/product/details/${p.id}`)}
            >
              {p.title}
            </button>
          ))}
        </div>

        <div className="alert-card">
          ⭐ {lowRatings.length} products with low ratings
          {lowRatings.map((p) => (
            <button
              key={p.id}
              onClick={() => navigate(`/product/details/${p.id}`)}
            >
              {p.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
