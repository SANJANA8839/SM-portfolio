import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion"; 
import avatarImg from "../../assets/7358602-removebg-preview.png";
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
  
  // Particle effect for decoration - similar to footer
  const particles = Array.from({ length: 25 }, (_, i) => i);
  
  // Terminal state
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  
  // Floating animation for particles
  useEffect(() => {
    // This is only for the particles effect initialization
    // No actual DOM manipulation needed here as we're using framer-motion
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-600/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/3 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl animate-pulse-slow animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-blue-600/10 rounded-full blur-3xl animate-pulse-slow animation-delay-1000"></div>
        <div className="absolute top-20 right-60 w-24 h-24 bg-teal-600/20 rounded-full blur-xl animate-float"></div>
      </div>
      
      {/* Decorative particles - similar to footer */}
      <AnimatePresence>
        {particles.map((_, index) => (
          <motion.div
            key={index}
            className="fixed w-1 h-1 rounded-full bg-indigo-500/30 z-0"
            animate={{
              x: [Math.random() * 100, Math.random() * window.innerWidth],
              y: [Math.random() * 100, Math.random() * window.innerHeight],
              opacity: [0.2, 0.8, 0.2],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </AnimatePresence>
      
      {/* Animated gradient orbs */}
      <motion.div 
        className="fixed top-1/3 left-1/5 w-72 h-72 bg-indigo-600/10 rounded-full blur-3xl -z-10"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      <motion.div 
        className="fixed bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl -z-10"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{
          duration: 10,
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
            I create <span className="text-indigo-400 font-medium">digital experiences</span> that blend design, performance, and purpose.
            Driven by <span className="text-purple-400 font-medium">curiosity</span>, I turn ideas into smooth, scroll-worthy realities.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap gap-4 items-center mt-2"
          >
            <motion.a
              href={resumePDF}
              download="Resume.pdf"
              className="flex items-center gap-2 px-6 py-3 text-white bg-gradient-to-r from-indigo-600 to-purple-700 hover:from-indigo-700 hover:to-purple-800 rounded-full font-semibold shadow-lg shadow-indigo-600/30 transition-all duration-300"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(99, 102, 241, 0.5)" }}
              whileTap={{ scale: 0.98 }}
            >
              Download Resume <FaDownload className="ml-1" />
            </motion.a>

            {/* Terminal Button - Unique Feature */}
            <motion.button
              onClick={() => setIsTerminalOpen(true)}
              className="flex items-center gap-2 px-6 py-3 text-white bg-gradient-to-r from-green-600 to-teal-700 hover:from-green-700 hover:to-teal-800 rounded-full font-semibold shadow-lg shadow-green-600/30 transition-all duration-300 group"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(16, 185, 129, 0.5)" }}
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
              <div className="h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent w-24 mr-3"></div>
              <p className="text-indigo-300 font-medium">Scroll down to explore</p>
            </div>
          </motion.div>

          {/* Terminal hint */}
          <motion.div 
            variants={itemVariants}
            className="mt-4 md:hidden"
          >
            <div className="flex items-center text-green-400 text-sm">
              <FaTerminal className="mr-2 animate-pulse" />
              <p>Try the terminal above for an interactive experience!</p>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Right image section with enhanced styling */}
        <motion.div 
          className="md:w-2/5 relative z-10"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Decorative elements */}
          <div className="absolute -top-10 -left-10 w-20 h-20 border border-indigo-500/30 rounded-full"></div>
          <div className="absolute -bottom-5 -right-5 w-32 h-32 border border-purple-500/20 rounded-full"></div>
          
          <div className="relative">
            {/* Enhanced glow effect */}
            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur-2xl animate-pulse"></div>
            
            {/* Image container with enhanced styling */}
            <motion.div 
              className="relative bg-gradient-to-b from-indigo-500/10 to-purple-500/10 rounded-3xl p-3 backdrop-blur-sm border border-white/10 overflow-hidden"
              whileHover={{ boxShadow: "0 25px 50px -12px rgba(79, 70, 229, 0.4)" }}
            >
              {/* Particle dots decoration */}
              <div className="absolute top-8 left-8 w-2 h-2 bg-indigo-400 rounded-full"></div>
              <div className="absolute top-24 right-12 w-3 h-3 bg-purple-400 rounded-full"></div>
              <div className="absolute bottom-12 left-12 w-2 h-2 bg-pink-400 rounded-full"></div>
              
              <motion.img 
                className="w-full max-w-md mx-auto drop-shadow-2xl"
                src={avatarImg} 
                alt="Developer avatar" 
                whileHover={{ scale: 1.03, rotate: -1 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              
              {/* Technical particle decorations */}
              <div className="absolute top-1/3 right-10 text-xs text-indigo-300 opacity-70 font-mono">{ <>HTML</> }</div>
              <div className="absolute bottom-1/3 left-8 text-xs text-purple-300 opacity-70 font-mono">{ <>CSS</> }</div>
              <div className="absolute bottom-1/4 right-12 text-xs text-pink-300 opacity-70 font-mono">{ <>React</> }</div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Floating Terminal Button */}
      <motion.button
        onClick={() => setIsTerminalOpen(true)}
        className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-green-600 to-teal-700 hover:from-green-700 hover:to-teal-800 rounded-full shadow-lg shadow-green-600/30 flex items-center justify-center z-40 group"
        whileHover={{ 
          scale: 1.1, 
          boxShadow: "0 15px 35px -5px rgba(16, 185, 129, 0.6)" 
        }}
        whileTap={{ scale: 0.95 }}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2, duration: 0.6, type: "spring" }}
      >
        <FaTerminal className="text-white text-lg group-hover:animate-pulse" />
        
        {/* Tooltip */}
        <motion.div
          className="absolute right-16 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
          initial={{ x: 10, opacity: 0 }}
          whileHover={{ x: 0, opacity: 1 }}
        >
          Open Interactive Terminal
          <div className="absolute top-1/2 -right-1 transform -translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
        </motion.div>
        
        {/* Pulse animation */}
        <motion.div
          className="absolute inset-0 rounded-full bg-green-400/20"
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.button>

      {/* Terminal Simulator */}
      <TerminalSimulator 
        isOpen={isTerminalOpen} 
        onClose={() => setIsTerminalOpen(false)} 
      />
    </div>
  );
};

export default Home;
