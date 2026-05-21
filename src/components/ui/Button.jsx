export default function Button({ children }) {
  return (
    <button className="bg-red-500 hover:bg-red-600 transition duration-300 px-6 py-3 rounded-full text-white uppercase text-xs tracking-[0.2em]">
      {children}
    </button>
  );
}