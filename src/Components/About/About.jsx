import React from "react";
import { IoArrowForward, IoCodeSlash } from "react-icons/io5";
import { FaGraduationCap, FaSchool, FaUserAlt, FaBook, FaFigma,  } from "react-icons/fa";
import { motion } from "framer-motion";
import avtarImage from "../../assets/7358653-removebg-preview.png";
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
    { label: "DSA", icon: <FaBook className="text-indigo-400" /> },
    { label: "Exploring", icon: <IoArrowForward className="text-blue-400" /> },
    // { label: "Problem Solving", icon: <IoArrowForward className="text-blue-400" /> },
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

      <div className="max-w-7xl mx-auto">
        {/* Main About Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            {/* Main About Card - Takes 2 columns */}
            <div className="xl:col-span-2 bg-gradient-to-br from-white/10 to-white/5 p-8 md:p-10 rounded-2xl backdrop-blur-sm border border-white/10 shadow-2xl">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-indigo-500/20 rounded-xl overflow-hidden w-20 h-20">
                  <img 
                    src={avtarImage} 
                    alt="Sanjana Meena"
                    className="w-full h-full object-cover object-center scale-110"
                  />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">About Me</h3>
                  <div className="h-1 w-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
                </div>
              </div>
              
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p className="text-lg">
                  Hello! I'm <span className="text-white font-semibold">Sanjana Meena</span>, a passionate web developer currently pursuing my BTech in Computer Science. I love creating digital experiences that are both beautiful and functional.
                </p>
                
                <p>
                  My journey in tech started with curiosity and has evolved into a deep passion for <span className="text-indigo-300 font-medium">front-end development</span>. I enjoy working with modern technologies like React, JavaScript, and exploring the endless possibilities of web development.
                </p>
                
                <p>
                  When I'm not coding, you'll find me learning new technologies, working on personal projects, or exploring the latest trends in UI/UX design. I believe in continuous learning and always strive to improve my skills.
                </p>
                
                <div className="pt-4">
                  <p className="text-indigo-300 font-medium mb-3">What drives me:</p>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                      Creating user-friendly and responsive web applications
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      Turning creative ideas into functional digital solutions
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                      Continuous learning and staying updated with tech trends
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Side Info Cards */}
            <div className="space-y-6">
              {/* Skills Card */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-gradient-to-br from-purple-500/10 to-pink-500/5 p-6 rounded-xl backdrop-blur-sm border border-white/10"
              >
                <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <IoCodeSlash className="text-purple-400" />
                  Tech Stack
                </h4>
                <div className="space-y-3">
                  {['React.js', 'JavaScript', 'HTML5 & CSS3', 'Tailwind CSS','C++', 'DSA', 'Java', 'Git & GitHub', 'React Native'].map((skill, index) => (
                    <motion.div 
                      key={index}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
                    >
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                      <span className="text-sm">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Interests Card */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-gradient-to-br from-indigo-500/10 to-blue-500/5 p-6 rounded-xl backdrop-blur-sm border border-white/10"
              >
                <h4 className="text-xl font-bold text-white mb-4">Interests</h4>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest, index) => (
                    <motion.div 
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-2 px-3 py-2 bg-white/5 rounded-full border border-white/10 text-sm"
                    >
                      {interest.icon}
                      <span className="text-gray-300">{interest.label}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative"
        >
          <div className="flex items-center gap-4 mb-12">
            <div className="p-4 bg-indigo-500/20 rounded-xl">
              <FaGraduationCap className="text-indigo-400 text-2xl" />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white">Education Journey</h3>
              <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mt-2"></div>
            </div>
          </div>
          
          {/* Education Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {educationData.map((item, index) => (
              <motion.div 
                key={item.id}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group relative bg-gradient-to-br from-white/10 to-white/5 p-6 rounded-xl backdrop-blur-sm border border-white/10 hover:border-indigo-500/30 transition-all duration-300"
              >
                {/* Card Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-indigo-500/20 rounded-lg group-hover:bg-indigo-500/30 transition-colors">
                    {item.icon}
                  </div>
                  <span className="text-sm font-medium text-indigo-300 bg-indigo-500/20 px-3 py-1 rounded-full">
                    {item.year}
                  </span>
                </div>
                
                {/* Institution Name */}
                <h4 className="text-lg font-bold text-white mb-3 leading-tight group-hover:text-indigo-100 transition-colors">
                  {item.institution}
                </h4>
                
                {/* Degree and Performance */}
                <div className="space-y-2">
                  <p className="text-indigo-300 font-medium">{item.degree}</p>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <p className="text-green-300 text-sm font-medium">{item.performance}</p>
                  </div>
                </div>
                
                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;