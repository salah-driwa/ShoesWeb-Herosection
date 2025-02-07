import { motion } from "framer-motion";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="w-11/12 py-6 mx-auto  flex items-center justify-between">
      {/* Logo */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-9xl font-satoshi font-extralight"
      >
        <a href="/">
          <img
            src="https://purepng.com/public/uploads/large/purepng.com-nike-logologobrand-logoiconslogos-251519940082eoxxs.png"
            className="h-10"
            alt="logo"
          />
        </a>
      </motion.div>

      {/* Navigation Links */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        className="hidden md:flex gap-10 space-x-6 items-center ml-auto"
      >
        <a href="/" className="text-gray-300 font-ranade hover:text-gray-400">
          Main
        </a>
        <a
          href="/"
          className="text-gray-300 font-ranade hover:text-gray-400"
        >
          Collections
        </a>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search"
          className="px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Shopping Cart Icon */}
        <a href="/" className="text-gray-300 hover:text-gray-400">
          <FaShoppingCart size={24} />
        </a>
      </motion.div>
    </nav>
  );
};

export default Navbar;
