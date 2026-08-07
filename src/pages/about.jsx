import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import AboutHero from "../components/veilAbout/aboutHero";
import Philosophy from "../components/veilAbout/philosophy";
import Values from "../components/veilAbout/values";
import History from "../components/veilAbout/History";
import CallTOaction from "../components/veilAbout/callTOaction";
import Timeline from "../components/veilAbout/timeline";

export default function News() {
  return (
    <main className="bg-black min-h-screen">
       <Navbar />
      <AboutHero/>
        < Philosophy/>
          <Values />
          <History/>
          <Timeline/> 
          <CallTOaction/>
      <Footer />
    </main>
  );  
}     