import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import DealsSection from "./components/DealsSection";
import ProductGrid from "./components/ProductGrid";
import Footer from "./components/Footer";

function App() {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar cartCount={cartCount} />
      <Hero />
      <DealsSection />
      <Categories />
      <ProductGrid onAddToCart={handleAddToCart} />

      <Footer />
    </div>
  );
}

export default App;
