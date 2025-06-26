function ProductCard({ product, onDelete }) {
  return (
    <div className="product-card">
      <h3>{product.title}</h3>
      <p>{product.category}</p>
      <p>Price: ${product.price}</p>
      <p>Stock: {product.stock > 0 ? product.stock : "Out of stock"}</p>
      <p>Rating: {product.rating > 4 ? "✔️" : "❌"}</p>
      <button onClick={() => onDelete(product.id)}>Delete</button>
    </div>
  );
}

export default ProductCard;
