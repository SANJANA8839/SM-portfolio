import React, { useState } from "react";
import { MdOutlineEmail, MdSend, MdDone } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
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
      className="bg-gradient-to-b from-gray-900 to-indigo-900 text-white py-16 px-6 md:px-16"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Get In Touch</h1>
          <div className="w-24 h-1 bg-indigo-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-300 max-w-xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-white/10 shadow-xl"
          >
            <h2 className="text-2xl font-bold mb-6 text-indigo-300">Send a Message</h2>
            
            {formStatus.isSubmitted ? (
              <div className="bg-indigo-500/20 p-4 rounded-lg flex items-center justify-center gap-2 text-indigo-200">
                <MdDone size={20} />
                <span>Thank you! Your message has been sent.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {formStatus.error && (
                  <div className="bg-red-500/20 p-4 rounded-lg text-red-300 text-sm">
                    {formStatus.error}
                  </div>
                )}
                
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-white/5 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-white/5 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-4 py-2 bg-white/5 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
                    placeholder="How can I help you?"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={formStatus.isSubmitting}
                  className="w-full flex justify-center items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-800 disabled:cursor-not-allowed rounded-lg font-semibold transition-colors duration-300"
                >
                  {formStatus.isSubmitting ? (
                    <>Sending...</>
                  ) : (
                    <>
                      Send Message <MdSend className="ml-1" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 shadow-xl">
              <h2 className="text-2xl font-bold mb-6 text-indigo-300">Contact Info</h2>
              
              <ul className="space-y-4">
                <li className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors">
                  <div className="bg-indigo-500/20 p-3 rounded-full">
                    <MdOutlineEmail size={24} className="text-indigo-300" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <a href="mailto:sanjanameena8839@gmail.com" className="text-white hover:text-indigo-300 transition-colors">
                      sanjanameena8839@gmail.com
                    </a>
                  </div>
                </li>
                
                <li className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors">
                  <div className="bg-indigo-500/20 p-3 rounded-full">
                    <CiLinkedin size={24} className="text-indigo-300" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">LinkedIn</p>
                    <a 
                      href="https://www.linkedin.com/in/sanjana-meena-13843628b/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white hover:text-indigo-300 transition-colors"
                    >
                      Connect with me
                    </a>
                  </div>
                </li>
                
                <li className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors">
                  <div className="bg-indigo-500/20 p-3 rounded-full">
                    <FaGithub size={24} className="text-indigo-300" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">GitHub</p>
                    <a 
                      href="https://github.com/SANJANA8839" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white hover:text-indigo-300 transition-colors"
                    >
                      View my projects
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 shadow-xl">
              <h3 className="text-xl font-bold mb-4 text-indigo-300">Let's Build Something Amazing</h3>
              <p className="text-gray-300">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
              </p>
            </div>
          </motion.div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/10 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Sanjana Meena. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;