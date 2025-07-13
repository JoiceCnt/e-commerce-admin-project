import ProductList from "../components/ProductList";

export default function Products({ products, onDelete }) {
  return (
    <div className="products-page">
      <h2>All Products</h2>
      <ProductList products={products} onDelete={onDelete} />
    </div>
  );
}
