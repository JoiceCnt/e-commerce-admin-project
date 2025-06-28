import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SideBar from "./pages/SideBar";
import data from "./assets/data.json"; // product list imported
import ProductList from "./components/ProductList";

function App() {
  const [products] = useState(data); // product list
  const [filteredProducts, setFilteredProducts] = useState(data); //

  const categories = [...new Set(products.map((product) => product.category))]; // get the categories of products

  // filter products by category
  const handleCategoriesClick = (category) => {
    //handleCategoriesClick takes one argument (category) and runs when the button is clicked
    const filtered = products.filter((p) => p.category === category); // keeps only the products whose category matches the selected category
    setFilteredProducts(filtered);
  };
  // show products
  const handleReset = () => {
    setFilteredProducts(products);
  };
  return (
    <>
      <Navbar />
      <div className="container" />

      <main>
        <ProductList
          products={filteredProducts} // passes the array of products objects to the productList, tells which product to show on the screen
          onDelete={
            (id) =>
              setFilteredProducts(filteredProducts.filter((p) => p.id !== id)) //this onDelete function receive an id of the product to delete,
            //remove that product from filteredProducts array and update the state os setFilteredProducts
          }
        />
      </main>

      <SideBar
        categories={categories} // passing a prop to the sideBar component, the value is the category array defined in const categories
        onCategoryClick={handleCategoriesClick} //when a button is clicked this call the function
        onReset={handleReset} // removes the filter and set all the products back
      />
      <Footer />
    </>
  );
}

export default App;
