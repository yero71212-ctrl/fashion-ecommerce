import Container from "./Container";
import Logo from "../ui/Logo";
import NavLink from "../ui/NavLink";
import { Search, ShoppingBag, Menu } from "lucide-react";
import { FiSearch, FiShoppingBag, FiMenu } from "react-icons/fi";
import { useState } from "react"
import MobileMenu from "./MobileMenu";
import {Link} from "react-router-dom"
import { navLinks } from "../../data/navLinks";

import { useCart } from "../../context/CartContext";
import CartDrawer from "../CartDrawer";


export default function Navbar() {
   const [menuOpen, setMenuOpen] = useState(false)
   
   const {
  cartItems,
  cartOpen,
  setCartOpen,
   } = useCart()

    const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
    );
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
         
     {/* TOP CYBER LINE */}
<div className="w-full h-6 border-b  text-red-500/30 overflow-hidden relative bg-red-500/20">

  <div className="absolute whitespace-nowrap animate-marquee text-[10px] tracking-[0.3em]  text-white uppercase">

   🔴 🔴   DFJVDGJJ CFYJITDCNKPPIREWZVJONBFHB —
   🔴    EXCLUSIVE DROPS EVERY FRIDAY —
    🔴    FREE SHIPPING OVER $200 —
   🔴    SS26 COLLECTION LIVE —
    🔴     DFJVDGJJ CFYJITDCNKPPIREWZVJONBFHB —
   🔴   EXCLUSIVE DROPS EVERY FRIDAY —
    
  </div>

</div>
      <Container>
        <nav className="h-20 flex items-center justify-between">
          {/* LEFT LINKS */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.id}
                title={link.title}
                path={link.path}
              />
            ))}
          </div>

          {/* LOGO */}

          <Logo />
          

          <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between mr-px">

        {/* LEFT */}
        <div className="flex items-center gap-4">

          {/* SEARCH */}
          <Link to="/search">
          <button
            className="
              flex items-center justify-center
               md:w-11 md:h-11
              w-8 h-8   rounded-full
              border border-white/10
              bg-white/5
              backdrop-blur-md
              transition duration-300
              hover:bg-red-600
              hover:border-red-600
            "
          >
            <Search size={18} className="text-white" />
          </button>
            </Link>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-4">

          {/* SHOPPING BAG */}
          <button
            onClick={() => setCartOpen(true)}
            className="
              relative
              flex items-center justify-center
              md:w-11 md:h-11
              w-8 h-8
              rounded-full
              border border-white/10
              bg-white/5
              backdrop-blur-md
              transition duration-300
              hover:bg-red-600
              hover:border-red-600
            "
          >
            <ShoppingBag size={18} className="text-white" />

            {/* COUNT */}
            <span
              className="
                absolute -top-1 -right-1
                w-4 h-4
                rounded-full
                bg-red-600
                text-[10px]
                font-bold
                flex items-center justify-center
                text-white
              "
            >
              {totalItems}
            {/* {cartItems.length} */}
            </span>
          </button>

          {/* MENU */}
         <button
  onClick={() => setMenuOpen(!menuOpen)}
  className=" text-white text-xl"
>
  <FiMenu />
</button>
        </div>
      </div>
        </nav>
      </Container>
<MobileMenu isOpen={menuOpen} />
<CartDrawer
open={cartOpen}
setOpen={setCartOpen}
/>
    </header>
  );
}