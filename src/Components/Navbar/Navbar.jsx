import React, { useState, useEffect, useLayoutEffect } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
import { motion } from "framer-motion";
import './Navbar.css'; // Import the Navbar-specific CSS

const Navbar = () => {
  const [menu, openMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  
  // Use both useEffect and useLayoutEffect to ensure navbar positioning
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
  
  // Use useLayoutEffect to force positioning before render
  useLayoutEffect(() => {
    // Force the navbar to be fixed by applying styles directly to the DOM
    const applyFixedStyles = () => {
      const navElement = document.querySelector('nav');
      if (navElement) {
        navElement.style.position = 'fixed';
        navElement.style.top = '0';
        navElement.style.left = '0';
        navElement.style.right = '0';
        navElement.style.width = '100%';
        navElement.style.zIndex = '9999';
      }
    };
    
    applyFixedStyles();
    // Run this multiple times to ensure it takes effect
    setTimeout(applyFixedStyles, 100);
    setTimeout(applyFixedStyles, 500);
    setTimeout(applyFixedStyles, 1000);
  }, []);
  
  const handleNavClick = (href) => {
    // Close mobile menu
    openMenu(false);
    setShowMenu(true);
    
    // Navigate to section
    const element = document.getElementById(href.replace('#', ''));
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  };
  
  return (
    <nav 
      id="main-navbar"
      className="navbar-fixed flex justify-between items-center text-white px-10 py-4 md:px-20 fixed top-0 left-0 w-full z-[999] bg-gray-900/90 backdrop-blur-sm shadow-lg transition-all duration-300"
      style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        zIndex: 9999
      }}
    >
      {/* Animated and modern logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="group flex items-center cursor-pointer"
        onClick={() => handleNavClick('#Home')}
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
        } absolute top-full left-0 w-full py-4 font-semibold bg-gray-900/95 backdrop-blur-md text-center border-t border-gray-700 md:border-none md:bg-transparent md:static md:w-auto md:flex md:gap-6 md:py-0`}
        style={{ zIndex: 9998 }}
      >
        <li 
          className="text-md transition-all duration-300 p-1 md:p-0 hover:text-indigo-400 cursor-pointer"
          onClick={() => handleNavClick('#Home')}
        >
          Home
        </li>
        <li 
          className="text-md transition-all duration-300 p-1 md:p-0 hover:text-indigo-400 cursor-pointer"
          onClick={() => handleNavClick('#About')}
        >
          About
        </li>
        <li 
          className="text-md transition-all duration-300 p-1 md:p-0 hover:text-indigo-400 cursor-pointer"
          onClick={() => handleNavClick('#Experience')}
        >
          Experience
        </li>
        <li 
          className="text-md transition-all duration-300 p-1 md:p-0 hover:text-indigo-400 cursor-pointer"
          onClick={() => handleNavClick('#Projects')}
        >
          Projects
        </li>
        <li 
          className="text-md transition-all duration-300 p-1 md:p-0 hover:text-indigo-400 cursor-pointer"
          onClick={() => handleNavClick('#Footer')}
        >
          Contact
        </li>
      </ul>
      
      {showMenu ? (
        <RiMenu2Line
          size={30}
          className="md:hidden cursor-pointer transition-all duration-300"
          style={{ position: 'relative', zIndex: 9999 }}
          onClick={() => {
            openMenu(!menu);
            setShowMenu(!showMenu);
          }}
        />
      ) : (
        <RiCloseLine
          size={30}
          className="md:hidden cursor-pointer transition-all duration-300"
          style={{ position: 'relative', zIndex: 9999 }}
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
