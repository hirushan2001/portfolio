import React,{ useState,useRef,useEffect  } from 'react';
import { motion,AnimatePresence,useInView   } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import ProjectPopup from '../components/ProjectPopup';
import './Projects.css';
import image1 from '../assets/FeildMaster.png';
import image2 from '../assets/thissite.png';
import image3 from '../assets/geminiclone.png';
import image4 from '../assets/pcb.png';
import portfolo1 from '../assets/portfolio1.png';
import portfolo2 from '../assets/portfolio2.png';
import portfolo3 from '../assets/portfolio3.png';
import portfolo4 from '../assets/portfolio4.png';
import portfolo5 from '../assets/portfolio5.png';

import ParticleBackground from '../components/ParticleBackground';


const projects = [
 {
  image: image1,
  additionalImages: [portfolo1, portfolo2, portfolo3, portfolo4, portfolo5],
  tags: ['React JS', 'MongoDB', 'Node JS', 'Express JS', 'React Native'],
  title: 'Fieldmaster',
  description: 'FieldMaster is a comprehensive land measuring and management application available on both mobile and web platforms.',
  websiteLink: 'https://field-master-frontend.vercel.app/',
  longDescription: `🚀 Fieldmaster: Revolutionizing Land Management

**Project Overview** 
Fieldmaster is an innovative land measuring application that marks the successful completion of our second-year industry-based software project. Available on both mobile and web platforms, Fieldmaster is designed to streamline land management processes for individuals and organizations alike by integrating essential functions into one comprehensive tool.

**Collaboration and Teamwork** 
As a dedicated team member, I contributed to the development of this cutting-edge application alongside a talented group of individuals. Together, we aimed to create a solution that simplifies land management by providing accurate measurements and essential tools for effective planning and resource allocation.

**Key Features** 
Fieldmaster boasts a wide array of features tailored to meet the needs of landowners, farmers, and land management professionals:
- Accurate Land Measurement: Utilizing Google Maps integration, users can precisely measure land areas and perimeters.
- Plant and Fertilizer Estimation: The app calculates the estimated number of plants and fertilizer requirements based on the land area.
- Fencing Material Design and Calculation: Users can design fencing layouts and calculate the necessary materials.
- Effort Assessment for Land Clearing: Fieldmaster estimates the labor and resources needed for land clearing.
- User Management: Comprehensive user management features with dynamic geolocation services.
- Customizable Land Management Plans: Users can create and use templates for various land management tasks.

**Tech Stack** 
To deliver a robust and responsive application, we employed the following technologies:
- Frontend: React for the web interface and React Native for the mobile version.
- Backend: Node.js and Express.js to handle server-side operations.
- Database: MongoDB for data storage and management.

**Project Highlights**
- Advanced Algorithms: We developed precise algorithms for accurate area and perimeter calculations.
- Cross-Platform User Experience: Ensured a user-friendly experience across both mobile and web devices.
- Administrator Control: Provided comprehensive control features for administrators to manage users and tasks effectively.
- Streamlined Land Management: Combined multiple land management tools into a single, powerful application.

**Challenges and Achievements** 
One of the most significant challenges we faced was ensuring the accuracy of land measurements. By integrating advanced mapping technology and developing robust algorithms, we overcame this hurdle, delivering a tool that optimizes land management processes.

**Acknowledgments** 
This project was a collaborative effort, and I am proud to have worked alongside my fellow team members: Dhananjana Hirushan, Chathura Abeygunawardhana, Damisha Wickramaarachchi, and Shenali Gamage. Special thanks to our project supervisor, Dr. Supunmali Ahangama, and our company mentor, Mr. Thilina Bopege, for their invaluable guidance. We are also grateful to TurboGen for providing us with this opportunity.

**Conclusion** 
Fieldmaster is more than just a project; it's a powerful tool that has the potential to revolutionize land management. I invite you to explore the features and see firsthand how it can make land management more efficient and effective.`,
  features: [
    'Accurate Land Measurement',
    'Plant and Fertilizer Estimation',
    'Fencing Material Design and Calculation',
    'Effort Assessment for Land Clearing',
    'User Management',
    'Customizable Land Management Plans'
  ],
  challenges: 'One of the most significant challenges we faced was ensuring the accuracy of land measurements. By integrating advanced mapping technology and developing robust algorithms, we overcame this hurdle, delivering a tool that optimizes land management processes.',
  githubLink: 'https://github.com/kanishkazoysa/FieldMaster.git',

},
  {
    image: portfolo1,
    additionalImages: [portfolo1, portfolo2, portfolo3,portfolo4,portfolo5], // Add these new images
    tags: ['React JS', 'Node JS','Framer Motion' ],
    title: 'Portfolio Website',
    // dates: 'Jan 2024 - Dec 2023',
    description: 'Powered by React.js and infused with Framer Motion, this portfolio site is a dynamic showcase of my creativity and technical skills',
    longDescription: 'Crafted with a blend of modern web technologies, this site showcases my skills and projects in a dynamic and engaging way. Built using React.js for a seamless user interface, and powered by Node.js on the backend for robust performance, the site delivers a fast and responsive experience. To add a touch of creativity and interactivity, I\'ve integrated Framer Motion, bringing elements to life with smooth animations and transitions. Explore my work and see how I bring ideas to reality through code.',
    websiteLink: 'https://field-master-frontend.vercel.app/'
  },
  {
    image: image3,
    tags: ['React JS',  'Node JS',],
    title: 'Gemini Clone',
    // dates: 'Apr 2023 - May 2023',
    description: 'Developed a generative AI application using the Google Gemini API, transforming raw data into intelligent, creative outputs. ',
    githubLink: 'https://github.com/hirushan2001/Gemini-Clone.git',
    //websiteLink: 'https://gemini-clone-nine-pied.vercel.app/'
  },
  {
    image: image4,
    tags: ['Arduino', 'C++'],
    title: 'Security System for Bicycle',
    // dates: 'Jun 2023 - Jul 2023',
    description: 'The project aims to improve bicycle rider safety= and boost confidence in cycling as a reliable modeof transportation.',
    githubLink: 'https://github.com/hirushan2001/Arduino_security_system.git',
  },

 
  // Add more projects as needed
];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [key, setKey] = useState(0);
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  const handleViewMore = (project) => {
    setSelectedProject(project);
  };

  const closePopup = () => {
    setSelectedProject(null);
  };
  const toggleProjects = () => {
    const projectsSection = document.getElementById('projects');
    const scrollPosition = window.pageYOffset;
    const sectionTop = projectsSection.offsetTop;
  
    setKey(prevKey => prevKey + 1);
    setShowAll(prevShowAll => !prevShowAll);
  
    // Use setTimeout to allow the DOM to update before scrolling
    setTimeout(() => {
      window.scrollTo(0, sectionTop);
    }, 0);
  };

  return (
    <motion.div
      ref={containerRef}
      className="projects-container"
      id="projects"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ParticleBackground />

      <motion.h1
        className="projects-header"
        initial={{ y: -50, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Projects
      </motion.h1>
      <motion.p
        className="projects-description"
        initial={{ y: -30, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: -30, opacity: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.
      </motion.p>
      <AnimatePresence mode="wait">
        <motion.div
          key={key}
          className="projects-list"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: 0.1 * index, duration: 0.3 }}
            >
              <ProjectCard project={project} onViewMore={handleViewMore} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
      <AnimatePresence>
        {selectedProject && (
          <ProjectPopup project={selectedProject} onClose={closePopup} />
        )}
      </AnimatePresence>
      <motion.div
        className="toggle-projects-container"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <motion.button
          className="toggle-projects-button"
          onClick={toggleProjects}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {showAll ? 'Show Less' : 'View All Projects'}
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Projects;