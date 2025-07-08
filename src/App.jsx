import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import ProductList from "./components/ProductList";

import Home from "./pages/Home";
import About from "./pages/About";
import ItemDetailsPage from "./pages/ItemDetailsPage";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import data from "./assets/data.json";
import Products from "./pages/Products";

function App() {
  const [products] = useState(data);
  const [filteredProducts, setFilteredProducts] = useState(data);

  const categories = [...new Set(products.map((product) => product.category))];

  const handleCategoryClick = (category) => {
    const filtered = products.filter((p) => p.category === category);
    setFilteredProducts(filtered);
  };

  const handleReset = () => {
    setFilteredProducts(products);
  };

  const handleDelete = (id) => {
    setFilteredProducts(filteredProducts.filter((p) => p.id !== id));
  };

  const handleSearch = (query) => {
    if (!query) {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((p) =>
        p.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <>
      <Navbar onSearch={handleSearch} />
      <div className="container">
        <SideBar
          categories={categories}
          onCategoryClick={handleCategoryClick}
          onReset={handleReset}
        />

        <main>
          <Routes>
            <Route
              path="/"
              element={
                <Home products={filteredProducts} onDelete={handleDelete} />
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route
              path="/product/details/:productId"
              element={<ItemDetailsPage />}
            />
            <Route path="*" element={<NotFound />} />
            <Route
              path="/products"
              element={
                <Products products={filteredProducts} onDelete={handleDelete} />
              }
            />
          </Routes>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default App;
