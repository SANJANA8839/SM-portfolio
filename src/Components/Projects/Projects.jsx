import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="Mind's Cool"
          main="A creative web application designed to promote mental wellness through interactive exercises, motivational content, and mood tracking.
           Built using modern front-end technologies with a focus on user-friendly design and responsive experience."
        
           demoLink="https://minor-front.onrender.com/" 
           githubLink="https://github.com/Kunwar-awadhiya/minor" 

        />
        <ProjectCard
          title="Online Bakery shop System"
          main="A simple web app for browsing, ordering,
           and managing bakery products online with a clean UI and smooth user flow, and manage bakery products with ease."
       
           demoLink="https://6830791fd22b80c2aa8cb2da--bakeyshopsystem.netlify.app/" 
           githubLink="https://github.com/SANJANA8839/Bakery-Shop-System"
       
       />
        <ProjectCard
          title="Docxito App"
          main="A healthcare app to connect patients with doctors, view profiles, book appointments, and manage consultations easily.
           Features include real-time appointment status, doctor availability, user-friendly UI, and secure data handling."
       
           demoLink="https://your-demo-link.com" 
           githubLink="https://github.com/yourusername/weather-app"
       
       />
      </div>
    </div>
  );
};

export default Projects;
