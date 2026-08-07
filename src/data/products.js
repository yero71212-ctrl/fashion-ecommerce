import fashionBag from "../assets/c4.png";
import fashionShoe from "../assets/c3.png";
import fashionJacket1 from "../assets/c1.png";
import FashionJacket2 from "../assets/FW25.jpg";
import FashionJacket3 from "../assets/p2.png";
import fashionHodye from "../assets/c2.png";

const products = [
  {
    id: 1,
    name: "Shadow Oversized Jacket",
    category: "JACKET",
    price: "248",
    oldPrice: "310",

    image: fashionJacket1,
    images: [
      fashionJacket1,
      FashionJacket2,
      FashionJacket3,
    ],

    description:
      "Premium oversized jacket inspired by modern luxury fashion. Designed with a relaxed silhouette and high-quality craftsmanship.",

    material:
      "100% Premium Cotton. Machine wash cold. Do not bleach. Iron on low heat.",

    shipping:
      "Free shipping on orders over $150. Delivery within 3–7 business days.",

    returns:
      "Free returns within 30 days. Item must be unworn and in original packaging.",

    sizes: ["XS", "S", "M", "L", "XL"],

    colors: ["Black", "White"],

    inStock: true,

    badge: "BESTSELLER",
  },

  {
    id: 2,
    name: "Void Tactical Hoodie",
    category: "HOODIE",
    price:" 165",
    oldPrice: "210",

    image: fashionHodye,
    images: [
      fashionHodye,
      fashionHodye,
      fashionHodye,
    ],

    description:
      "Luxury tactical hoodie crafted from heavyweight premium cotton.",

    material:
      "95% Cotton, 5% Polyester. Machine wash cold.",

    shipping:
      "Delivery within 3–7 business days.",

    returns:
      "30-day free returns.",

    sizes: ["XS", "S", "M", "L", "XL"],

    colors: ["Black"],

    inStock: true,

    badge: "NEW",
  },

  {
    id: 3,
    name: "Ember Low Sneaker",
    category: "SHOES",
    price: "289",
    oldPrice: "340",

    image: fashionShoe,
    images: [
      fashionShoe,
      fashionShoe,
      fashionShoe,
    ],

    description:
      "Minimal luxury sneaker finished with premium leather.",

    material:
      "Genuine Leather Upper. Rubber Sole.",

    shipping:
      "Worldwide shipping available.",

    returns:
      "30-day return policy.",

    sizes: ["39", "40", "41", "42", "43"],

    colors: ["Black", "White"],

    inStock: true,

    badge: "LIMITED",
  },

  {
    id: 4,
    name: "Leather Crossbody Bag",
    category: "BAG",
    price: "198",
    oldPrice: "240",

    image: fashionBag,
    images: [
      fashionBag,
      fashionBag,
      fashionBag,
    ],

    description:
      "Luxury leather crossbody bag with minimalist design.",

    material:
      "100% Genuine Leather.",

    shipping:
      "Ships within 24 hours.",

    returns:
      "Free returns within 30 days.",

    sizes: [],

    colors: ["Black"],

    inStock: true,

    badge: "EXCLUSIVE",
  },
];

export default products;