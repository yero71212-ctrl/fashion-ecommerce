import { motion } from "framer-motion"
import { navLinks } from "../../data/navLinks";

export default function MobileMenu({isOpen}) {
  if (!isOpen) return null;
  return (
    <div className="md:hidden">
     
     
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 md:hidden"
    >

      <div className="flex flex-col p-6 gap-6">

        {navLinks.map((link) => (
          <a
            key={link.id}
            href={link.path}
            className="text-white uppercase tracking-[0.2em] text-sm hover:text-red-500 transition duration-300"
          >
            {link.title}
          </a>
        ))}

      </div>

    </motion.div>
  

    </div>
  );
}