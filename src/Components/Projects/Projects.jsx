import React from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import { FaCode, FaRocket } from "react-icons/fa";

const Projects = () => {
  const projectsData = [
    {
      title: "Mind's Cool",
      description: "A creative web application designed to promote mental wellness through interactive exercises, motivational content, and mood tracking. Built using modern front-end technologies with a focus on user-friendly design and responsive experience.",
      demoLink: "https://minor-front.onrender.com/",
      githubLink: "https://github.com/Kunwar-awadhiya/minor",
      technologies: ["React", "Tailwind CSS", "Node.js"]
    },
    {
      title: "Online Bakery Shop System",
      description: "A simple web app for browsing, ordering, and managing bakery products online with a clean UI and smooth user flow, and manage bakery products with ease.",
      demoLink: "https://6830791fd22b80c2aa8cb2da--bakeyshopsystem.netlify.app/",
      githubLink: "https://github.com/SANJANA8839/Bakery-Shop-System",
      technologies: ["HTML", "CSS", "JavaScript"]
    },
    {
      title: "Student Management System",
      description: "A simple Student Management System created using C++, designed to help manage student records efficiently through a console-based interface. Features: Add Student Record, View All Student Records, Search Student Record, Exit.",
      demoLink: "https://github.com/SANJANA8839/Student-Management-System_Cpp",
      githubLink: "https://github.com/SANJANA8839/Student-Management-System_Cpp",
      technologies: ["C++", "Console App"]
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

  return (
    <div id="Projects" className="py-24 px-6 md:px-16 bg-gradient-to-b from-gray-900/80 to-indigo-900/20 backdrop-blur-md">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            My <span className="text-indigo-400">Projects</span>
          </h1>
          <div className="h-1 w-20 bg-indigo-500 mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            Explore my latest projects that showcase my skills and passion for creating intuitive, functional applications.
          </p>
        </motion.div>
        {/* Featured projects section */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-indigo-900/30 text-indigo-300 items-center px-6 py-3 rounded-full">
            <FaRocket className="mr-2" />
            <span className="font-medium">Featured Projects</span>
          </div>
        </div>
        
        {/* Projects grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              main={project.description}
              demoLink={project.demoLink}
              githubLink={project.githubLink}
              technologies={project.technologies}
            />
          ))}
        </motion.div>
        
        {/* Call to action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <a 
            href="https://github.com/SANJANA8839" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 py-3 px-6 bg-white/10 hover:bg-white/20 text-white font-medium rounded-full transition-colors duration-300"
          >
            <FaCode /> View More Projects on GitHub
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
