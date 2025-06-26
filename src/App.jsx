import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SideBar from "./pages/SideBar";
import data from "./assets/data.json";
import ProductList from "./components/ProductList";

function App() {
  const [products, setProducts] = useState(data);
  return (
    <>
      <Navbar />
      <div className="container" />

      <main>
        <ProductList
          products={products}
          onDelete={(id) => setProducts(products.filter((p) => p.id !== id))}
        />
      </main>
      <SideBar />
      <Footer />
    </>
  );
}

export default App;
