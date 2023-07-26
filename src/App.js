import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Maincontent from "./components/ProductList";
import "./App.css";

function App() {
  return (
    <div className="main">
      <Header />
      <Maincontent />
      <Footer />
    </div>
  );
}
export default App;
