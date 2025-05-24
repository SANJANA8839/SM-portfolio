import React from "react";
import AboutImg from "../../assets/7358653-removebg-preview.png";
import { IoArrowForward } from "react-icons/io5";
import { FaGraduationCap, FaSchool } from "react-icons/fa";
import { motion } from "framer-motion"; // Install with: npm install framer-motion

const About = () => {
  const educationData = [
    {
      id: 1,
      institution: "Samrat Ashok Technological Institute Vidisha",
      year: "2022-2026",
      degree: "BTech in Computer Science",
      performance: "CGPA : 8.3",
      icon: <FaGraduationCap size={24} />
    },
    {
      id: 2,
      institution: "Saket Shishu Ranjan hr. sec. School",
      year: "2022",
      degree: "12th Standard",
      performance: "Percentage : 84%",
      icon: <FaSchool size={24} />
    },
    {
      id: 3,
      institution: "Saket Shishu Ranjan hr. sec. School",
      year: "2020",
      degree: "10th Standard",
      performance: "Percentage : 95%",
      icon: <FaSchool size={24} />
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

  return (
    <div
      id="About"
      className="text-white md:mx-20 py-16 px-6 md:px-12 rounded-lg bg-gradient-to-b from-black/40 to-black/70 backdrop-blur-md"
    >
      {/* About Section Title */}
      <motion.h2 
        className="text-3xl md:text-5xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        About <span className="text-indigo-400">Me</span>
      </motion.h2>

      <div className="md:grid md:grid-cols-12 gap-8 items-start">
        {/* Image Column */}
        <motion.div 
          className="md:col-span-5 flex justify-center mb-10 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative">
            <div className="absolute -inset-2 rounded-full bg-indigo-500/20 blur-lg -z-10"></div>
            <img 
              className="md:h-80 object-contain rounded-lg border-2 border-indigo-500/30 shadow-xl shadow-indigo-500/20" 
              src={AboutImg} 
              alt="About me" 
            />
          </div>
        </motion.div>

        {/* Content Column */}
        <div className="md:col-span-7">
          {/* About Me Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-white/5 p-6 rounded-lg backdrop-blur-sm mb-10 border border-white/10 shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-4 text-indigo-300 flex items-center gap-2">
              <IoArrowForward className="text-indigo-400" />
              About Me
            </h3>
            <p className="text-gray-300 leading-relaxed">
              I'm a passionate web developer with a strong interest in building user-friendly and responsive web applications. 
              Currently pursuing BTech in Computer Science, I enjoy turning ideas into reality through code.
              I specialize in front-end development using React, JavaScript, and modern web technologies. 
              I've also explored APIs, GitHub, and agile workflows through real-world projects and internships.
            </p>
          </motion.div>

          {/* Education Timeline */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <h3 className="text-2xl font-bold mb-6 text-indigo-300 flex items-center gap-2">
              <IoArrowForward className="text-indigo-400" />
              Education 
            </h3>
            
            <div className="relative pl-5 border-l-2 border-indigo-500/50">
              {educationData.map((item, index) => (
                <motion.div 
                  key={item.id}
                  variants={itemVariants}
                  className={`mb-12 relative ${index === educationData.length - 1 ? '' : ''}`}
                >
                  {/* Timeline Node */}
                  <div className="absolute -left-[20px] bg-indigo-600 p-1 rounded-full border-4 border-gray-900 shadow-lg">
                    {item.icon}
                  </div>
                  
                  {/* Content Card */}
                  <div className="bg-white/5 backdrop-blur-sm p-6 ml-6 rounded-lg border border-white/10 shadow-lg hover:bg-white/10 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <h4 className="text-xl font-bold text-white">{item.institution}</h4>
                      <span className="inline-block px-3 py-1 bg-indigo-500/30 text-indigo-200 text-sm font-medium rounded-full">
                        {item.year}
                      </span>
                    </div>
                    
                    <div className="space-y-2 mt-3">
                      <p className="text-indigo-300 font-medium">{item.degree}</p>
                      <p className="text-gray-400">{item.performance}</p>
                    </div>
                  </div>
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