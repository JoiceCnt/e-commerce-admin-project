import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import data from "../assets/data.json";

export default function AlertsPage() {
  const navigate = useNavigate();

  const [lowStockProducts, setLowStockProducts] = useState([]);
  const [lowRatingProducts, setLowRatingProducts] = useState([]);
  const [checkedProducts, setCheckedProducts] = useState(() => {
    const stored = localStorage.getItem("checkedProducts");
    return stored ? JSON.parse(stored) : {};
  });

  useEffect(() => {
    const stockThreshold = 5;
    const ratingThreshold = 4;

    const lowStock = data.filter((product) => product.stock < stockThreshold);

    const lowRatings = data.filter((product) => {
      if (product.reviews && product.reviews.length > 0) {
        const avg =
          product.reviews.reduce((sum, r) => sum + r.rating, 0) /
          product.reviews.length;
        return avg < ratingThreshold;
      }
      return false;
    });

    setLowStockProducts(lowStock);
    setLowRatingProducts(lowRatings);
  }, []);

  const handleCheck = (id) => {
    const updated = {
      ...checkedProducts,
      [id]: !checkedProducts[id],
    };
    setCheckedProducts(updated);
    localStorage.setItem("checkedProducts", JSON.stringify(updated));
  };

  return (
    <div className="alerts-page" style={{ padding: "2rem" }}>
      <h2>Manage Products in Alert</h2>

      <div
        className="alerts-section"
        style={{
          display: "flex",
          gap: "2rem",
          marginTop: "2rem",
          flexWrap: "wrap",
        }}
      >
        {/* Low Stock Section */}
        <div style={{ flex: 1, minWidth: "280px" }}>
          <h3>🛒 Low Stock ({lowStockProducts.length})</h3>
          <ul style={{ listStyle: "none", paddingLeft: 0 }}>
            {lowStockProducts.map((product) => (
              <li
                key={product.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  marginBottom: "0.8rem",
                }}
              >
                <input
                  type="checkbox"
                  checked={checkedProducts[product.id] || false}
                  onChange={() => handleCheck(product.id)}
                />
                <button
                  onClick={() => navigate(`/product/details/${product.id}`)}
                  style={{
                    padding: "0.5rem 1rem",
                    backgroundColor: "#c49c68",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    flex: 1,
                    textAlign: "left",
                  }}
                >
                  {product.title}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Low Ratings Section */}
        <div style={{ flex: 1, minWidth: "280px" }}>
          <h3>⭐ Low Ratings ({lowRatingProducts.length})</h3>
          <ul style={{ listStyle: "none", paddingLeft: 0 }}>
            {lowRatingProducts.map((product) => (
              <li
                key={product.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  marginBottom: "0.8rem",
                }}
              >
                <input
                  type="checkbox"
                  checked={checkedProducts[product.id] || false}
                  onChange={() => handleCheck(product.id)}
                />
                <button
                  onClick={() => navigate(`/product/details/${product.id}`)}
                  style={{
                    padding: "0.5rem 1rem",
                    backgroundColor: "#c49c68",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    flex: 1,
                    textAlign: "left",
                  }}
                >
                  {product.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
