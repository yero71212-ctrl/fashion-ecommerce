import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Shopr from "./pages/Shopr";
import Collecton from "./pages/collectionsPages";
import NewShop from "./pages/newShop";
import About from "./pages/about";

export default function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/shop" element={<Shopr />} />

        <Route path="/collections" element={<Collecton />} /> 

        <Route path="/new" element={<NewShop />} />

        <Route path="/about" element={<About />} />
      </Routes>

    </BrowserRouter>
  );
}