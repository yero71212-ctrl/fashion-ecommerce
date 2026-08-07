import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Shopr from "./pages/Shopr";
import Collecton from "./pages/collectionsPages";
import NewShop from "./pages/newShop";
import About from "./pages/about";
import SearchPage from "./pages/searchPage";
import ProductDetails from "./pages/ProductDetails";
import Checkout from "./pages/Checkout";
import CartDrawer from "./components/CartDrawer";
import Shipping from "./pages/shipping";
import Payment from "./pages/Payment";
import ThankYou from "./pages/ThankYou";

export default function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/shop" element={<Shopr />} />

        <Route path="/collections" element={<Collecton />} />

        <Route path="/new" element={<NewShop />} />

        <Route path="/about" element={<About />} />

        <Route path="/search" element={<SearchPage />} />

        <Route path="/product/:id" element={<ProductDetails />} />

        <Route path="/checkout" element={<Checkout />} />

        <Route path="/cart" element={<CartDrawer />} />

        <Route path="/shipping" element={<Shipping />} />

        <Route path="/payment" element={<Payment />} />

        <Route path="/thank-you" element={<ThankYou />} />

      </Routes>

    </BrowserRouter>
  );
}