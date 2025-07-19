import React, { useState, useRef, useEffect } from "react";
import { MdOutlineEmail, MdSend, MdDone, MdLocationOn, MdMessage } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub, FaRegPaperPlane, FaMapMarkerAlt, FaCode, FaStar, FaLinkedinIn, FaCheckCircle } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from '@emailjs/browser';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    error: null
  });

  const formRef = useRef(null);
  
  // Particle effect for decoration
  const particles = Array.from({ length: 20 }, (_, i) => i);
  
  // Floating animation for particles
  useEffect(() => {
    // This is only for the particles effect initialization
    // No actual DOM manipulation needed here as we're using framer-motion
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ isSubmitting: true, isSubmitted: false, error: null });
    
    // EmailJS configuration
    const serviceID = 'service_cvoo9l9';
    const templateID = 'template_n97g58l';
    const publicKey = 'f_6wUXV27BPk20TnH';
    
    // Template parameters that match your EmailJS template
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_name: 'Sanjana', // Your name
    };
    
    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully:', response);
        setFormStatus({ isSubmitting: false, isSubmitted: true, error: null });
        
        // Reset form after successful submission
        setFormData({ name: "", email: "", message: "" });
        
        // Reset success message after 3 seconds
        setTimeout(() => {
          setFormStatus(prev => ({ ...prev, isSubmitted: false }));
        }, 3000);
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
        setFormStatus({ 
          isSubmitting: false, 
          isSubmitted: false, 
          error: 'Failed to send message. Please try again.' 
        });
        
        // Reset error message after 5 seconds
        setTimeout(() => {
          setFormStatus(prev => ({ ...prev, error: null }));
        }, 5000);
      });
  };

  return (
    <div
      id="Footer"
      className="bg-gradient-to-b from-slate-900 via-indigo-950 to-slate-900 text-white py-12 pt-20 md:pt-28 px-4 md:px-16 relative overflow-hidden"
    >
      {/* Decorative particles */}
      <AnimatePresence>
        {particles.map((_, index) => (
          <motion.div
            key={index}
            className="absolute w-1 h-1 rounded-full bg-indigo-500/30"
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
      
      {/* Background gradient orbs */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl -z-10"
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
        className="absolute bottom-1/3 right-1/3 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl -z-10"
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
      <motion.div 
        className="absolute top-3/4 left-1/2 w-48 h-48 bg-blue-600/10 rounded-full blur-3xl -z-10"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.5, 0.6, 0.5],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-10 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block mb-3 md:mb-4"
          >
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-2 md:p-3 rounded-full">
              <FaRegPaperPlane size={24} className="text-white" />
            </div>
          </motion.div>
          
          <h1 className="text-2xl md:text-5xl font-bold mb-3 md:mb-4">Get In Touch</h1>
          <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="mt-3 md:mt-5 text-sm md:text-base text-gray-300 max-w-xl mx-auto px-2">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-b from-white/5 to-white/[0.02] backdrop-blur-sm p-4 md:p-8 rounded-xl border border-white/10 shadow-xl hover:shadow-indigo-500/10 transition-shadow duration-300"
          >
            <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Send a Message</h2>
            
            {formStatus.isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 p-4 md:p-6 rounded-lg flex flex-col items-center justify-center gap-3 md:gap-4 text-indigo-200"
              >
                <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-2 md:p-3 rounded-full">
                  <MdDone size={20} className="text-white" />
                </div>
                <span className="text-base md:text-lg font-medium">Thank you for your message!</span>
                <p className="text-center text-xs md:text-sm text-gray-400">I'll get back to you as soon as possible.</p>
              </motion.div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
                {formStatus.error && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-500/20 p-3 md:p-4 rounded-lg text-red-300 text-xs md:text-sm"
                  >
                    {formStatus.error}
                  </motion.div>
                )}
                
                <div className="group">
                  <label htmlFor="name" className="block text-xs md:text-sm font-medium text-gray-300 mb-1 group-focus-within:text-indigo-300 transition-colors">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 md:px-4 py-2 md:py-3 bg-white/5 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white transition-all duration-300 text-sm md:text-base"
                    placeholder="Your name"
                  />
                </div>
                
                <div className="group">
                  <label htmlFor="email" className="block text-xs md:text-sm font-medium text-gray-300 mb-1 group-focus-within:text-indigo-300 transition-colors">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 md:px-4 py-2 md:py-3 bg-white/5 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white transition-all duration-300 text-sm md:text-base"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div className="group">
                  <label htmlFor="message" className="block text-xs md:text-sm font-medium text-gray-300 mb-1 group-focus-within:text-indigo-300 transition-colors">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="3"
                    className="w-full px-3 md:px-4 py-2 md:py-3 bg-white/5 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white transition-all duration-300 text-sm md:text-base"
                    placeholder="How can I help you?"
                  ></textarea>
                </div>
                
                <motion.button
                  type="submit"
                  disabled={formStatus.isSubmitting}
                  className="w-full flex justify-center items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 disabled:from-gray-700 disabled:to-gray-800 disabled:cursor-not-allowed rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-indigo-500/25 text-sm md:text-base"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {formStatus.isSubmitting ? (
                    <div className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 md:h-5 md:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </div>
                  ) : (
                    <>
                      Send Message <MdSend className="ml-1" />
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6 md:space-y-8"
          >
            <div className="bg-white/5 backdrop-blur-sm p-4 md:p-6 rounded-xl border border-white/10 shadow-xl transition-all duration-300 hover:shadow-indigo-500/10 hover:border-indigo-500/30">
              <h2 className="text-lg md:text-2xl font-bold mb-4 md:mb-6 text-indigo-300 flex items-center gap-2">
                <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center">
                  <MdOutlineEmail size={14} className="text-white md:text-lg" />
                </div>
                Contact Info
              </h2>
              
              <ul className="space-y-3 md:space-y-4">
                <motion.li 
                  className="flex items-center gap-3 md:gap-4 p-2 md:p-3 rounded-lg hover:bg-white/5 transition-colors"
                  whileHover={{ x: 5, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                >
                  <div className="bg-indigo-500/20 p-2 md:p-3 rounded-full">
                    <MdOutlineEmail size={18} className="text-indigo-300 md:text-2xl" />
                  </div>
                  <div>
                    <p className="text-xs md:text-sm text-gray-400">Email</p>
                    <a href="mailto:sanjanameena8839@gmail.com" className="text-white hover:text-indigo-300 transition-colors text-sm md:text-base break-all">
                      sanjanameena8839@gmail.com
                    </a>
                  </div>
                </motion.li>
                
                <motion.li 
                  className="flex items-center gap-3 md:gap-4 p-2 md:p-3 rounded-lg hover:bg-white/5 transition-colors"
                  whileHover={{ x: 5, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                >
                  <div className="bg-indigo-500/20 p-2 md:p-3 rounded-full">
                    <CiLinkedin size={18} className="text-indigo-300 md:text-2xl" />
                  </div>
                  <div>
                    <p className="text-xs md:text-sm text-gray-400">LinkedIn</p>
                    <a 
                      href="https://www.linkedin.com/in/sanjana-meena-13843628b/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white hover:text-indigo-300 transition-colors text-sm md:text-base"
                    >
                      Connect with me
                    </a>
                  </div>
                </motion.li>
                
                <motion.li 
                  className="flex items-center gap-3 md:gap-4 p-2 md:p-3 rounded-lg hover:bg-white/5 transition-colors"
                  whileHover={{ x: 5, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                >
                  <div className="bg-indigo-500/20 p-2 md:p-3 rounded-full">
                    <FaGithub size={18} className="text-indigo-300 md:text-2xl" />
                  </div>
                  <div>
                    <p className="text-xs md:text-sm text-gray-400">GitHub</p>
                    <a 
                      href="https://github.com/SANJANA8839" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white hover:text-indigo-300 transition-colors text-sm md:text-base"
                    >
                      View my projects
                    </a>
                  </div>
                </motion.li>
              </ul>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-4 md:p-6 rounded-xl border border-white/10 shadow-xl transition-all duration-300 hover:shadow-indigo-500/10 hover:border-indigo-500/30">
              <h3 className="text-base md:text-xl font-bold mb-2 md:mb-4 text-indigo-300 flex items-center gap-2">
                <FaStar className="text-yellow-400 text-sm md:text-base" />
                <span>Let's Build Something Amazing</span>
              </h3>
              <p className="text-gray-300 text-sm md:text-base">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
              </p>
              
              <motion.div 
                className="mt-3 md:mt-4 p-2 md:p-3 rounded-lg bg-gradient-to-r from-indigo-900/30 to-purple-900/30 border border-indigo-500/20 relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
                <p className="text-indigo-200 text-xs md:text-sm italic">
                  "The best way to predict the future is to create it. The web is more a social creation than a technical one."
                </p>
                <p className="text-right text-xs text-gray-400 mt-1 md:mt-2">- Tim Berners-Lee</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        {/* Skills showcase */}
        <motion.div 
          className="mt-12 md:mt-20 pt-6 md:pt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-6 md:mb-10">
            <h2 className="text-xl md:text-3xl font-bold mb-2 md:mb-3 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Skills & Technologies</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base px-2">Here are some of the technologies I work with</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-2 md:gap-6">
            {[
              { name: "React", icon: <FaCode className="text-blue-400" />, color: "from-blue-500 to-blue-600" },
              { name: "JavaScript", icon: <FaCode className="text-yellow-400" />, color: "from-yellow-500 to-yellow-600" },
              { name: "Tailwind CSS", icon: <FaCode className="text-cyan-400" />, color: "from-cyan-500 to-cyan-600" },
              { name: "Node.js", icon: <FaCode className="text-green-400" />, color: "from-green-500 to-green-600" },
              { name: "HTML5", icon: <FaCode className="text-orange-400" />, color: "from-orange-500 to-orange-600" },
              { name: "CSS3", icon: <FaCode className="text-blue-400" />, color: "from-blue-400 to-blue-500" },
              { name: "Git", icon: <FaCode className="text-red-400" />, color: "from-red-500 to-red-600" },
              { name: "UI/UX", icon: <FaCode className="text-purple-400" />, color: "from-purple-500 to-purple-600" },
            ].map((skill, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm py-1 md:py-2 px-2 md:px-4 rounded-full border border-white/10 flex items-center gap-1 md:gap-2"
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  boxShadow: "0 0 15px rgba(79, 70, 229, 0.3)" 
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`w-5 h-5 md:w-8 md:h-8 rounded-full bg-gradient-to-r ${skill.color} flex items-center justify-center`}>
                  {skill.icon}
                </div>
                <span className="text-white text-xs md:text-base">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Animated divider */}
        <div className="relative h-8 md:h-12 my-8 md:my-12">
          <motion.div 
            className="absolute left-1/2 transform -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent"
            animate={{ 
              width: ["0%", "80%", "0%"],
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        </div>
        
        <div className="mt-4 md:mt-8 pt-4 md:pt-8 border-t border-white/10 text-center">
          <div className="flex justify-center gap-3 md:gap-4 mb-3 md:mb-4">
            <motion.a 
              href="https://github.com/SANJANA8839" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors"
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub className="text-gray-300 text-sm md:text-base" size={16} />
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/sanjana-meena-13843628b/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors"
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <CiLinkedin className="text-gray-300 text-sm md:text-base" size={16} />
            </motion.a>
            <motion.a 
              href="mailto:sanjanameena8839@gmail.com" 
              className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors"
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <MdOutlineEmail className="text-gray-300 text-sm md:text-base" size={16} />
            </motion.a>
          </div>
          <motion.p 
            className="text-xs md:text-sm text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            © {new Date().getFullYear()} Sanjana Meena. All rights reserved.
          </motion.p>
          <motion.p 
            className="text-[10px] md:text-xs text-gray-500 mt-1 md:mt-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            Designed & Built with <span className="text-red-400">♥</span> using React & Tailwind CSS
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Footer;