import "./App.css";
import { Navbar } from "./components/Navbar";
import Footer from "./components/Footer";
import SideBar from "./pages/SideBar";

function App() {
  return (
    <>
      <Navbar />
      <div className="container"/>
      <main>
        <h1>text</h1>
      </main>
      <SideBar />
      <Footer />
    </>
  );
}

export default App;
