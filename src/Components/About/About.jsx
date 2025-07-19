import React from "react";
import AboutImg from "../../assets/7358653-removebg-preview.png";
import { IoArrowForward, IoCodeSlash } from "react-icons/io5";
import { FaGraduationCap, FaSchool, FaUserAlt, FaBook, FaFigma } from "react-icons/fa";
import { motion } from "framer-motion"; // Install with: npm install framer-motion

const About = () => {
  const educationData = [
    {
      id: 1,
      institution: "Samrat Ashok Technological Institute Vidisha",
      year: "2022-2026",
      degree: "BTech in Computer Science",
      performance: "CGPA : 8.3",
      icon: <FaGraduationCap size={24} className="text-indigo-300" />
    },
    {
      id: 2,
      institution: "Saket Shishu Ranjan hr. sec. School",
      year: "2022",
      degree: "12th Standard",
      performance: "Percentage : 84%",
      icon: <FaSchool size={24} className="text-indigo-300" />
    },
    {
      id: 3,
      institution: "Saket Shishu Ranjan hr. sec. School",
      year: "2020",
      degree: "10th Standard",
      performance: "Percentage : 95%",
      icon: <FaSchool size={24} className="text-indigo-300" />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.3
      } 
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  // Personal interests to showcase personality
  const interests = [
    { label: "Web Development", icon: <IoCodeSlash className="text-purple-400" /> },
    { label: "UI/UX Design", icon: <FaFigma className="text-pink-400" /> },
    { label: "Learning", icon: <FaBook className="text-indigo-400" /> }
  ];

  return (
    <div
      id="About"
      className="text-white md:mx-20 py-16 pt-24 md:pt-28 px-6 md:px-12 rounded-lg bg-gradient-to-b from-gray-900/80 to-indigo-900/20 backdrop-blur-md"
    >
      {/* About Section Title */}
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold text-center inline-block">
          About <span className="text-indigo-400">Me</span>
        </h2>
        <div className="h-1 w-20 bg-indigo-500 mx-auto mt-4 rounded-full"></div>
      </motion.div>

      <div className="md:grid md:grid-cols-12 gap-12 items-start">
        {/* Image Column */}
        <motion.div 
          className="md:col-span-5 flex justify-center mb-10 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative">
            {/* Background decorative elements */}
            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur-2xl -z-10 animate-pulse-slow"></div>
            <div className="absolute -right-10 -top-10 w-20 h-20 border border-indigo-500/30 rounded-full"></div>
            <div className="absolute -left-8 -bottom-8 w-16 h-16 border border-purple-500/20 rounded-full"></div>
            
            {/* Image with frame */}
            <motion.div
              whileHover={{ scale: 1.03, rotate: -1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative overflow-hidden rounded-xl border-2 border-white/10 shadow-2xl shadow-indigo-500/20"
            >
              <img 
                className="md:h-96 object-cover rounded-lg"
                src={AboutImg} 
                alt="About me" 
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/60 to-transparent"></div>
            </motion.div>
          </div>
        </motion.div>

        {/* Content Column */}
        <div className="md:col-span-7">
          {/* About Me Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-white/5 p-8 rounded-xl backdrop-blur-sm mb-10 border border-white/10 shadow-lg hover:shadow-xl hover:bg-white/10 transition-all duration-300"
          >
            <h3 className="text-2xl font-bold mb-5 text-white flex items-center gap-3">
              <span className="p-2 bg-indigo-500/20 rounded-lg">
                <FaUserAlt className="text-indigo-400" />
              </span>
              Who I Am
            </h3>
            <p className="text-gray-300 leading-relaxed mb-5">
              I'm a <span className="text-indigo-300 font-medium">passionate web developer</span> with a strong interest in building user-friendly and responsive web applications. 
              Currently pursuing BTech in Computer Science, I enjoy turning ideas into reality through code.
            </p>
            <p className="text-gray-300 leading-relaxed mb-5">
              I specialize in <span className="text-purple-300 font-medium">front-end development</span> using React, JavaScript, and modern web technologies. 
              I've also explored APIs, GitHub, and agile workflows through real-world projects and internships.
            </p>
            
            {/* Interests section */}
            <div className="mt-6">
              <h4 className="text-lg font-medium text-indigo-300 mb-3">My Interests</h4>
              <div className="flex flex-wrap gap-3">
                {interests.map((interest, index) => (
                  <motion.div 
                    key={index}
                    whileHover={{ y: -5 }}
                    className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10"
                  >
                    {interest.icon}
                    <span className="text-sm text-gray-300">{interest.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Education Timeline */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <h3 className="text-2xl font-bold mb-8 text-white flex items-center gap-3">
              <span className="p-2 bg-indigo-500/20 rounded-lg">
                <FaGraduationCap className="text-indigo-400" />
              </span>
              Education Journey
            </h3>
            
            <div className="relative pl-8 border-l-2 border-indigo-500/50 before:absolute before:w-4 before:h-4 before:rounded-full before:bg-indigo-500 before:-left-[9px] before:-top-2">
              {educationData.map((item, index) => (
                <motion.div 
                  key={item.id}
                  variants={itemVariants}
                  className={`mb-12 relative ${index === educationData.length - 1 ? '' : ''}`}
                >
                  {/* Timeline Node */}
                  <div className="absolute -left-[25px] bg-indigo-600/80 p-2 rounded-full border-4 border-gray-900/80 shadow-lg shadow-indigo-500/30">
                    {item.icon}
                  </div>
                  
                  {/* Content Card */}
                  <motion.div 
                    whileHover={{ 
                      scale: 1.02, 
                      boxShadow: "0 20px 25px -5px rgba(79, 70, 229, 0.1), 0 10px 10px -5px rgba(79, 70, 229, 0.04)"
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="bg-gradient-to-b from-indigo-500/10 to-purple-500/5 backdrop-blur-sm p-6 ml-6 rounded-xl border border-white/10 shadow-lg"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <h4 className="text-xl font-bold text-white">{item.institution}</h4>
                      <span className="inline-block px-4 py-1.5 bg-indigo-500/30 text-indigo-200 text-sm font-medium rounded-full">
                        {item.year}
                      </span>
                    </div>
                    
                    <div className="space-y-2 mt-3">
                      <p className="text-indigo-300 font-medium">{item.degree}</p>
                      <p className="text-gray-400">{item.performance}</p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;