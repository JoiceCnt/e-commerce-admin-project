import { Link, useNavigate } from "react-router-dom";

function ProductCard({ product, onDelete }) {
  const navigate = useNavigate();

  const handleUpdate = () => {
    navigate(`/dashboard/manage?id=${product.id}`);
  };

  return (
    <div className="product-card">
      <Link
        to={`/product/details/${product.id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <img
          src={product.thumbnail}
          alt={product.title}
          style={{
            width: "100%",
            maxWidth: "200px",
            height: "200px",
            objectFit: "cover",
            borderRadius: "8px",
            marginBottom: "10px",
          }}
        />
        <h3>{product.title}</h3>
        <p className="category">{product.category}</p>
        <p>Price: ${product.price}</p>
        <p>
          Stock:{" "}
          {product.stock > 0 ? (
            product.stock
          ) : (
            <span className="out">Out of stock</span>
          )}
        </p>
        <p>Rating: {product.rating > 4 ? "✔️" : "❌"}</p>
      </Link>

      <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
        <button className="action-button" onClick={() => onDelete(product.id)}>
          🗑️ Delete
        </button>
        <button className="action-button" onClick={handleUpdate}>
          ✏️ Update
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
