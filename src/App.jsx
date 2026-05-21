import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";

export default function App() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
       <Home/>
    </div>
  );
}