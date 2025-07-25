import React from "react";
import { FaCss3, FaFigma, FaHtml5, FaJava, FaJs, FaReact } from "react-icons/fa";
import { SiCplusplus, SiRedis, SiTailwindcss } from "react-icons/si";
import { FaGoogle } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { RiNetflixFill } from "react-icons/ri";
import { FaAmazon, FaBriefcase, FaCalendarAlt, FaLaptopCode } from "react-icons/fa";
import { motion } from "framer-motion";

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const skills = [
    { icon: <FaHtml5 color="#E34F26" size={40} />, name: "HTML5", color: "from-orange-500/20 to-orange-600/10" },
    { icon: <FaCss3 color="#1572B6" size={40} />, name: "CSS3", color: "from-blue-500/20 to-blue-600/10" },
    { icon: <FaReact color="#61DAFB" size={40} />, name: "React", color: "from-cyan-500/20 to-cyan-600/10" },
    { icon: <FaJs color="#F7DF1E" size={40} />, name: "JavaScript", color: "from-yellow-500/20 to-yellow-600/10" },
    { icon: <SiTailwindcss color="#38B2AC" size={40} />, name: "Tailwind", color: "from-teal-500/20 to-teal-600/10" },
    { icon: <SiMongodb color="#47A248" size={40} />, name: "MongoDB", color: "from-green-500/20 to-green-600/10" },
    { icon: <FaJava color="#FF4438" size={40} />, name: "Java", color: "from-red-500/20 to-red-600/10" },
    { icon: <SiCplusplus color="#00599C" size={40} />, name: "C++", color: "from-blue-700/20 to-blue-800/10" },
  ];

  const experiences = [
    {
      title: "Intern, Docxito",
      period: "February 2025 - April 2025",
      role: "Front-end Developer",
      details: [
        "Contributed to a real-time medical services app using React.js and React Native.",
        "Developed responsive UI components and implemented features based on Figma designs.",
        "Integrated REST APIs for fetching and displaying real-time data.",
        "Collaborated with backend and design teams in an agile environment using JIRA."
      ],
      color: "from-indigo-500/10 to-purple-600/5"
    },
    {
      title: "Intern, Samrat Ashok Technological Institute Vidisha",
      period: "May 2023",
      role: "College level internship",
      details: [
        "Gained hands-on exposure to emerging technologies including AI/ML, Data Science, and Cloud Computing.",
        "Worked under faculty mentorship to explore real-world applications of modern IT trends.",
        "Strengthened foundational knowledge and technical skills through practical sessions and workshops."
      ],
      color: "from-purple-500/10 to-indigo-600/5"
    }
  ];

  return (
    <div id="Experience" className="py-20 pt-28 px-6 md:px-16 bg-gradient-to-b from-gray-900/50 to-black/50 backdrop-blur-sm">
      {/* Section Title */}
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <h1 className="text-3xl md:text-5xl text-white font-bold">My <span className="text-indigo-400">Experience</span></h1>
          <div className="w-24 h-1 bg-indigo-500 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Skills Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2 
              className="text-2xl font-bold text-white mb-8 flex items-center"
              variants={itemVariants}
            >
              <span className="mr-3 p-2 bg-indigo-500/20 rounded-lg">
                <FaLaptopCode className="text-indigo-400" />
              </span>
              Technical Skills
            </motion.h2>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className={`p-4 bg-gradient-to-b ${skill.color} backdrop-blur-md border border-white/5 rounded-xl flex flex-col items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300`}
                >
                  {skill.icon}
                  <span className="text-xs font-medium text-white mt-1">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Work Experience Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2 
              className="text-2xl font-bold text-white mb-8 flex items-center"
              variants={itemVariants}
            >
              <span className="mr-3 p-2 bg-indigo-500/20 rounded-lg">
                <FaBriefcase className="text-indigo-400" />
              </span>
              Work Experience
            </motion.h2>
            
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className={`p-6 bg-gradient-to-b ${exp.color} backdrop-blur-md border border-white/5 rounded-xl shadow-lg relative overflow-hidden group`}
                >
                  {/* Decorative elements */}
                  <div className="absolute -right-4 -top-4 w-20 h-20 bg-indigo-500/10 rounded-full blur-xl group-hover:bg-indigo-500/20 transition-all duration-500"></div>
                  
                  <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                  <div className="flex items-center text-indigo-300 text-sm mb-3">
                    <FaCalendarAlt className="mr-2" size={14} />
                    {exp.period}
                  </div>
                  
                  <div className="bg-white/5 px-4 py-2 rounded-lg inline-block mb-3">
                    <p className="text-sm font-medium text-indigo-200">{exp.role}</p>
                  </div>
                  
                  <ul className="space-y-2 text-gray-300">
                    {exp.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-indigo-400 mr-2 mt-1">•</span>
                        <span className="text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
