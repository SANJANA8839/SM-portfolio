import React from "react";
import { motion } from "framer-motion"; // Install with: npm install framer-motion
import avatarImg from "../../assets/7358602-removebg-preview.png";
import TextChange from "../TextChange";
import { FaDownload, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import resumePDF from "/public/Resume.pdf" 

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 overflow-hidden">
      <div className="relative text-white flex flex-col md:flex-row w-full justify-between items-center px-6 py-16 md:p-20 max-w-7xl mx-auto">
        {/* Decorative elements */}
        <div className="absolute top-40 left-20 w-64 h-64 bg-indigo-600/20 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-40 right-20 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl -z-10"></div>
        
        {/* Left content section */}
        <motion.div 
          className="md:w-3/5 md:pr-8 z-10 mb-12 md:mb-0"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl md:text-6xl font-bold flex flex-col leading-tight tracking-tight mb-4">
            <TextChange />
          </h1>

          <motion.p 
            className="text-lg md:text-2xl text-gray-300 tracking-tight py-6 max-w-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            I create digital experiences that blend design, performance, and purpose.
            Driven by curiosity, I turn ideas into smooth, scroll-worthy realities.
          </motion.p>

          <div className="flex flex-wrap gap-4 items-center mt-2">
            <motion.a
              href={resumePDF}
              download="Resume.pdf"
              className="flex items-center gap-2 px-6 py-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded-full font-semibold shadow-lg shadow-indigo-600/30 transition-all duration-300 hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Download Resume <FaDownload className="ml-1" />
            </motion.a>
            
            <div className="flex items-center gap-4 ml-4">
              {[
                { icon: <FaGithub size={20} />, url: "https://github.com/SANJANA8839" },
                { icon: <FaLinkedin size={20} />, url: "https://www.linkedin.com/in/sanjana-meena-13843628b/" },
                { icon: <FaTwitter size={20} />, url: "https://twitter.com/yourusername" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-white/10 transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
        
        {/* Right image section */}
        <motion.div 
          className="md:w-2/5 z-10"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            {/* Animated glow effect */}
            <div className="absolute inset-0 rounded-full bg-indigo-500/20 blur-2xl animate-pulse"></div>
            
            {/* Image container with styling */}
            <div className="relative bg-gradient-to-b from-indigo-500/10 to-purple-500/10 rounded-3xl p-2 backdrop-blur-sm border border-white/10">
              <img 
                className="w-full max-w-md mx-auto drop-shadow-2xl transform hover:scale-105 transition-transform duration-500" 
                src={avatarImg} 
                alt="Developer avatar" 
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
