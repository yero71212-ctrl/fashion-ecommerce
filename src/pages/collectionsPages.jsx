import { useState } from "react";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Collecton from "../components/collection/collections";
//import CollectonCard from "../components/collection/collectionCard";
//import HeroCollecton from "../components/collection/herocollection";

export default function collection() {
  
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
              {/* //<HeroCollecton/> */}
              {/* <CollectonCard/> */}
              <Collecton/>



      <Footer />
    </div>
  );
}