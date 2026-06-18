import { useState } from "react";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Collecton from "../components/collection/collections";

export default function collection() {
  
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />        
              <Collecton/>
      <Footer />
    </div>
  );
}