// // pages/Shop.jsx
import { useState } from "react";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ShopHero from "../components/shop/ShopHero";
import ShopButton from "../components/shop/shopButton";

export default function Shop() {
  
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <ShopHero />
        <ShopButton />
      <Footer />
    </div>
  );
}