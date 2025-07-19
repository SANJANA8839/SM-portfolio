import React, { useState, useEffect } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [menu, openMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <nav 
      className={`
        flex flex-wrap justify-between md:items-center text-white
        px-10 py-4 md:px-20 fixed top-0 left-0 right-0 z-50
        ${scrolled ? 'bg-gray-900/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'}
        transition-all duration-300
      `}
    >
      {/* Animated and modern logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="group flex items-center"
      >
        <motion.div 
          className="w-12 h-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center"
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xl font-bold text-white">SM</span>
        </motion.div>
      </motion.div>

      <ul
        className={`${
          menu ? "block" : "hidden"
        } mx-24 p-y2 mt-4 mb-4 font-semibold md:mt-5 bg-black px-2 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6`}
      >
        <a href="#About">
          <li className="text-md transition-all duration-300 p-1 md:p-0 hover:text-indigo-400">
            About
          </li>
        </a>
        <a href="#Experience">
          <li className="text-md transition-all duration-300 p-1 md:p-0 hover:text-indigo-400">
            Experience
          </li>
        </a>
        <a href="#Projects">
          <li className="text-md transition-all duration-300 p-1 md:p-0 hover:text-indigo-400">
            Projects
          </li>
        </a>
        <a href="#Footer">
          <li className="text-md transition-all duration-300 p-1 md:p-0 hover:text-indigo-400">
            Contact
          </li>
        </a>
      </ul>
      
      {showMenu ? (
        <RiMenu2Line
          size={30}
          className="md:hidden absolute right-10 top-4 transition-all duration-300"
          onClick={() => {
            openMenu(!menu);
            setShowMenu(!showMenu);
          }}
        />
      ) : (
        <RiCloseLine
          size={30}
          className="md:hidden absolute right-10 top-4 transition-all duration-300"
          onClick={() => {
            openMenu(!menu);
            setShowMenu(!showMenu);
          }}
        />
      )}
    </nav>
  );
};

export default Navbar;
