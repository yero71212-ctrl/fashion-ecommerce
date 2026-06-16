import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import AboutHero from "../components/veilAbout/aboutHero";
import Philosophy from "../components/veilAbout/philosophy";
import Values from "../components/veilAbout/values";
import History from "../components/veilAbout/History";

export default function News() {
  return (
    <main className="bg-black min-h-screen">
       <Navbar />
      <AboutHero/>
        < Philosophy/>
          <Values />
          <History/>
      <Footer />
    </main>
  );  
}     