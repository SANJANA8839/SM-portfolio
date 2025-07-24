import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion"; 
// import avatarImg from "../../assets/7358602-removebg-preview.png";
import avatarImg from "../../assets/photo.jpg";
import TextChange from "../TextChange";
import TerminalSimulator from "../TerminalSimulator/TerminalSimulator";
import { FaDownload, FaGithub, FaLinkedin, FaTwitter, FaTerminal } from "react-icons/fa";
import resumePDF from "/public/Resume.pdf" 

const Home = () => {
  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.6, 0.05, 0.01, 0.9] },
    },
  };
  
  // Terminal state
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  return (
    <div id="Home" className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
      {/* Animated background elements - optimized for mobile */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-32 sm:w-64 h-32 sm:h-64 bg-orange-600/10 sm:bg-orange-600/20 rounded-full blur-2xl sm:blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/3 w-36 sm:w-72 h-36 sm:h-72 bg-red-600/5 sm:bg-red-600/10 rounded-full blur-2xl sm:blur-3xl animate-pulse-slow animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-24 sm:w-48 h-24 sm:h-48 bg-amber-600/5 sm:bg-amber-600/10 rounded-full blur-xl sm:blur-3xl animate-pulse-slow animation-delay-1000"></div>
        <div className="absolute top-20 right-60 w-12 sm:w-24 h-12 sm:h-24 bg-rose-600/10 sm:bg-rose-600/20 rounded-full blur-lg sm:blur-xl animate-float"></div>
      </div>
      
      {/* Animated gradient orbs - reduced for mobile */}
      <motion.div 
        className="fixed top-1/3 left-1/5 w-36 sm:w-72 h-36 sm:h-72 bg-orange-600/5 sm:bg-orange-600/10 rounded-full blur-2xl sm:blur-3xl -z-10 hidden sm:block"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      <motion.div 
        className="fixed bottom-1/4 right-1/4 w-40 sm:w-80 h-40 sm:h-80 bg-red-600/5 sm:bg-red-600/10 rounded-full blur-2xl sm:blur-3xl -z-10 hidden sm:block"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
        
      {/* Main content area */}
      <div className="relative text-white flex flex-col md:flex-row w-full justify-between items-center px-6 py-24 md:p-20 md:pt-36 max-w-7xl mx-auto z-10">
        {/* Left content section */}
        <motion.div 
          className="md:w-3/5 md:pr-8 mb-12 md:mb-0"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-4">
            <h1 className="text-3xl md:text-6xl font-bold leading-tight tracking-tight mb-3">
              <TextChange />
            </h1>
          </motion.div>

          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-2xl text-gray-300 tracking-tight py-6 max-w-xl leading-relaxed"
          >
            I create <span className="text-orange-400 font-medium">digital experiences</span> that blend design, performance, and purpose.
            Driven by <span className="text-red-400 font-medium">curiosity</span>, I turn ideas into smooth, scroll-worthy realities.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap gap-4 items-center mt-2"
          >
            <motion.a
              href={resumePDF}
              download="Resume.pdf"
              className="flex items-center gap-2 px-6 py-3 text-white bg-gradient-to-r from-orange-600 to-red-700 hover:from-orange-700 hover:to-red-800 rounded-full font-semibold shadow-lg shadow-orange-600/30 transition-all duration-300"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(249, 115, 22, 0.5)" }}
              whileTap={{ scale: 0.98 }}
            >
              Download Resume <FaDownload className="ml-1" />
            </motion.a>

            {/* Terminal Button - Unique Feature */}
            <motion.button
              onClick={() => setIsTerminalOpen(true)}
              className="flex items-center gap-2 px-6 py-3 text-white bg-gradient-to-r from-amber-600 to-orange-700 hover:from-amber-700 hover:to-orange-800 rounded-full font-semibold shadow-lg shadow-amber-600/30 transition-all duration-300 group"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(245, 158, 11, 0.5)" }}
              whileTap={{ scale: 0.98 }}
            >
              <FaTerminal className="group-hover:animate-pulse" />
              Explore Terminal
            </motion.button>
            
            <div className="flex items-center gap-5 ml-2">
              {[
                { icon: <FaGithub size={22} />, url: "https://github.com/SANJANA8839", label: "GitHub" },
                { icon: <FaLinkedin size={22} />, url: "https://www.linkedin.com/in/sanjana-meena-13843628b/", label: "LinkedIn" },
                { icon: <FaTwitter size={22} />, url: "https://twitter.com/yourusername", label: "Twitter" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex flex-col items-center text-gray-400 hover:text-white p-2 rounded-xl hover:bg-white/10 transition-all group"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <div className="relative">
                    {social.icon}
                    <motion.span 
                      className="absolute inset-0 rounded-full bg-white/20 blur-sm -z-10"
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1.8 }}
                    />
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          {/* Call to action */}
          <motion.div 
            variants={itemVariants}
            className="mt-8 hidden md:block"
          >
            <div className="flex items-center">
              <div className="h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent w-24 mr-3"></div>
              <p className="text-orange-300 font-medium">Scroll down to explore</p>
            </div>
          </motion.div>

          {/* Terminal hint */}
          <motion.div 
            variants={itemVariants}
            className="mt-4 md:hidden"
          >
            <div className="flex items-center text-amber-400 text-sm">
              <FaTerminal className="mr-2 animate-pulse" />
              <p>Try the terminal above for an interactive experience!</p>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Right image section with enhanced styling */}
        <motion.div 
          className="md:w-2/5 relative z-10 flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative w-80 h-80 sm:w-96 sm:h-96">
            {/* Rotating border rings */}
            <motion.div 
              className="absolute inset-0 rounded-full border-2 border-orange-500/30"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div 
              className="absolute inset-4 rounded-full border border-red-400/40"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Main image container */}
            <motion.div 
              className="absolute inset-8 rounded-full overflow-hidden bg-gradient-to-br from-orange-500/20 via-red-500/20 to-amber-500/20 backdrop-blur-sm border border-white/20 shadow-2xl"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Inner glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-orange-600/30 via-transparent to-red-600/20"></div>
              
              <motion.img 
                className="w-full h-full object-cover object-center rounded-full"
                src={avatarImg} 
                alt="Developer avatar" 
                style={{ objectPosition: 'center center' }}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 200 }}
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </motion.div>
            
            {/* Particle dots */}
            <div className="absolute top-16 left-12 w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
            <div className="absolute top-24 right-16 w-1.5 h-1.5 bg-red-400 rounded-full animate-pulse animation-delay-1000"></div>
            <div className="absolute bottom-20 left-20 w-1 h-1 bg-amber-400 rounded-full animate-pulse animation-delay-2000"></div>
            <div className="absolute bottom-32 right-12 w-2 h-2 bg-rose-400 rounded-full animate-pulse animation-delay-500"></div>
            
            {/* Glow effect behind image */}
            <div className="absolute inset-12 rounded-full bg-gradient-to-r from-orange-500/30 via-red-500/30 to-amber-500/30 blur-2xl -z-10 animate-pulse"></div>
          </div>
        </motion.div>
      </div>

      {/* Terminal Simulator */}
      <TerminalSimulator 
        isOpen={isTerminalOpen} 
        onClose={() => setIsTerminalOpen(false)} 
      />
    </div>
  );
};

export default Home;
