import { motion } from "framer-motion";

export default function NavLink({ title, path }) {
  return (
    <motion.a
      href={path}
      whileHover={{ y: -2 }}
      className="text-white text-xs uppercase tracking-[0.2em] hover:text-red-500 transition duration-300"
    >
      {title}
    </motion.a>
  );
}