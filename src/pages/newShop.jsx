import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import NewsGrid from "../components/veilNew/newsGrid";

     

export default function News() {
  return (
    <main className="bg-black min-h-screen">
       <Navbar />
      <NewsGrid />

      
      <Footer />
    </main>
  );
}