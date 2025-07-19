import React from "react";
import bannerImg from "../../assets/photo-C8q0KQHG.webp";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ title, main, demoLink, githubLink, technologies = ["React", "Tailwind CSS"] }) => {
  return (
    <motion.div 
      className="flex flex-col w-full md:w-96 bg-gradient-to-b from-slate-800/80 to-slate-900/90 rounded-xl overflow-hidden border border-white/5 shadow-xl"
      whileHover={{ 
        y: -10,
        boxShadow: "0 25px 50px -12px rgba(79, 70, 229, 0.25)"
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {/* Project Image with overlay */}
      <div className="relative overflow-hidden group">
        <div className="absolute inset-0 bg-indigo-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} 
            whileHover={{ opacity: 1, scale: 1 }}
            className="flex gap-4"
          >
            <a 
              href={demoLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-indigo-700 p-3 rounded-full hover:bg-indigo-100 transition-colors"
              aria-label="View live demo"
            >
              <FaExternalLinkAlt size={18} />
            </a>
            <a 
              href={githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-indigo-700 p-3 rounded-full hover:bg-indigo-100 transition-colors"
              aria-label="View source code on GitHub"
            >
              <FaGithub size={18} />
            </a>
          </motion.div>
        </div>
        <img 
          className="w-full h-48 object-cover object-center transition-transform duration-500 group-hover:scale-110" 
          src={bannerImg} 
          alt={`${title} preview`} 
        />
      </div>
      
      {/* Project Content */}
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-white mb-2">
          {title}
        </h3>
        
        {/* Tech stack tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {technologies.map((tech, index) => (
            <span 
              key={index} 
              className="px-2 py-1 text-xs font-medium text-indigo-300 bg-indigo-900/30 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <p className="text-gray-300 text-sm mb-5 flex-grow">
          {main}
        </p>
        
        {/* Project links */}
        <div className="flex gap-3 mt-auto">
          <a 
            href={demoLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 py-2 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-300 shadow-md hover:shadow-lg text-sm"
          >
            Live Demo <FaExternalLinkAlt size={12} />
          </a>
          <a 
            href={githubLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 py-2 px-4 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg transition-colors duration-300 text-sm"
          >
            Code <FaGithub size={14} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
