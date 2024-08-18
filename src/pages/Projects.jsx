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
import FeildMaster1 from '../assets/FeildMaster1.png';
import FeildMaster2 from '../assets/FeildMaster2.png';
import FeildMaster3 from '../assets/FeildMaster3.png';
import FeildMaster4 from '../assets/FeildMaster4.png';
import FeildMaster5 from '../assets/FeildMaster5.png';
import FeildMaster6 from '../assets/FeildMaster6.png';
import FeildMaster7 from '../assets/FeildMaster7.png';
import FeildMaster8 from '../assets/FeildMaster8.png';


import ParticleBackground from '../components/ParticleBackground';


const projects = [
 {
  image: image1,
  additionalImages: [image1,FeildMaster1, FeildMaster2, FeildMaster3, FeildMaster4, FeildMaster5, FeildMaster6, FeildMaster7, FeildMaster8],
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
  additionalImages: [portfolo1, portfolo2, portfolo3, portfolo4, portfolo5],
  tags: ['React JS', 'Node JS', 'Framer Motion'],
  title: 'Portfolio Website',
  description: 'Powered by React.js and infused with Framer Motion, this portfolio site is a dynamic showcase of my creativity and technical skills.',
  websiteLink: 'https://field-master-frontend.vercel.app/',
  longDescription: `🚀 Portfolio Website: A Dynamic Showcase of Creativity and Technical Skills

**Project Overview**  
Welcome to my portfolio site, where creativity meets technology. Powered by **React.js** and infused with **Framer Motion**, this website is designed to be a dynamic and engaging showcase of my work and technical expertise. Additionally, the site features a **Node.js** backend that supports email functionality, allowing for seamless communication and interaction.

**Core Functionality**  
- **React.js Integration:** Built with React.js, the site ensures a seamless and interactive user experience, allowing for smooth navigation and efficient performance.
- **Framer Motion Animations:** Infused with Framer Motion, the site features sophisticated animations and transitions that bring elements to life and enhance user engagement.
- **Email Functionality:** Leveraging Node.js, the site includes a robust email feature, enabling visitors to easily contact me or request information directly through the site.
- **Creative Design:** The site highlights my creativity and design skills, with a visually appealing layout and innovative presentation of projects.

**Technology Stack**  
- **Frontend Framework:** React.js for a responsive and modular frontend.
- **Animation Library:** Framer Motion for advanced animations and smooth transitions.
- **Backend:** Node.js for handling email functionality and ensuring reliable communication.

**Impact and Goals**  
This portfolio site serves as a platform to not only display my projects but also demonstrate my ability to combine creativity with cutting-edge technology. The dynamic nature of the site, along with its integrated email feature, reflects my commitment to creating engaging and functional web experiences.

**Conclusion**  
Explore my portfolio to see how React.js, Framer Motion, and Node.js come together to create a vibrant and interactive showcase of my work. This site is a testament to my skills and passion for crafting exceptional web experiences and facilitating seamless communication.`,
  features: [
    'React.js Integration',
    'Framer Motion Animations',
    'Email Functionality',
    'Creative Design'
  ],
  challenges: 'The main challenge was creating a seamless user experience while showcasing complex projects and incorporating advanced animations. This was overcome by carefully designing the user interface and optimizing the performance of animations and transitions.',
  githubLink: 'https://github.com/hirushan2001/portfolio.git',
},

{
  image: image3,
  additionalImages: [image3, image4], // Assuming you have these additional images
  tags: ['React JS', 'Node JS'],
  title: 'Gemini Clone',
  description: 'Developed a generative AI application using the Google Gemini API, transforming raw data into intelligent, creative outputs.',
  longDescription: `🚀 Gemini Clone: Harnessing the Power of Google's Generative AI

**Project Overview**  
I am excited to showcase a groundbreaking generative AI application developed using the Google Gemini API. This innovative application harnesses the power of advanced AI technology to transform raw data into intelligent and creative outputs, pushing the boundaries of what's possible with AI-driven content generation.

**Core Functionality**  
Our application is designed to leverage the capabilities of the Google Gemini API to analyze and interpret raw data, producing high-quality, contextually relevant, and creatively generated content. Whether it's for generating text, creating visual content, or deriving insights from complex data sets, this AI application provides versatile and sophisticated solutions tailored to diverse needs.`,
  githubLink: 'https://github.com/hirushan2001/Gemini-Clone.git',
  // websiteLink: 'https://gemini-clone-nine-pied.vercel.app/'
},

  {
  image: image4,
  additionalImages: [image4], // Assuming you have these additional images
  tags: ['Arduino', 'C++'],
  title: 'Bicycle Safety Enhancement Project',
  description: 'A comprehensive system aimed at improving bicycle rider safety, challenging negative perceptions of cycling, and boosting confidence in cycling as a reliable mode of transportation.',
  githubLink: 'https://github.com/hirushan2001/Arduino_security_system.git',
  longDescription: `🚀 Bicycle Safety Enhancement Project: Revolutionizing Rider Safety and Confidence

**Project Overview**
Our project is dedicated to improving bicycle rider safety, challenging negative perceptions of cycling, and boosting confidence in cycling as a reliable and efficient mode of transportation. By integrating advanced technology and innovative features, we aim to enhance the overall cycling experience and provide riders with greater security and peace of mind.

**Key Features**
- **Accident Alert System:** Provides real-time notifications to emergency contacts in the event of a collision or accident, ensuring quick assistance and response.
- **Electric Lock:** Controlled via a mobile app, this feature allows riders to securely lock and unlock their bicycle, providing enhanced security against theft.
- **GPS-Based Location Tracking:** Enables precise tracking of the bicycle's location, helping users locate their bike easily and track their route.
- **Speedometer:** Monitors and displays the rider's speed, helping them stay aware of their pace and adhere to speed regulations.
- **Battery Level Indicator:** Displays the current battery level of the system, ensuring that the rider is aware of the power status and can recharge as needed.

**Hardware Components**
The project utilizes a range of hardware components to deliver its advanced features:
- **Arduino Mega 2560:** The central microcontroller unit for processing data and controlling various system functions.
- **Bluetooth and GPS Modules:** For wireless communication and accurate location tracking.
- **GSM Module:** Enables communication for sending alerts and notifications.
- **Accelerometer:** Detects changes in motion and orientation, crucial for accident detection.
- **Voltage and Hall Sensors:** Monitor battery levels and track wheel rotations, respectively.
- **Servo Motor:** Used for locking and unlocking mechanisms in the electric lock system.
- **Rechargeable Batteries:** Provide power to the various electronic components and ensure long-lasting operation.
- **Additional Electronic Components:** Various sensors and modules integrated to enhance functionality and reliability.

**Impact and Goals**
The project aims to transform how cyclists interact with their bicycles, making cycling a safer and more reliable option for everyday transportation. By addressing safety concerns and improving functionality, we seek to promote cycling as a practical and secure mode of travel.

**Conclusion**
This innovative project combines cutting-edge technology with practical solutions to elevate bicycle safety and user confidence. Explore the features and experience how this system enhances the cycling experience through advanced technology and thoughtful design.`,
  features: [
    'Accident Alert System',
    'Electric Lock',
    'GPS-Based Location Tracking',
    'Speedometer',
    'Battery Level Indicator'
  ],
  challenges: 'The main challenge was integrating multiple complex systems (GPS, GSM, accelerometer) into a cohesive, reliable, and power-efficient solution. This was overcome through careful system design, extensive testing, and optimization of power consumption.',
  websiteLink: '' // Add a website link if available
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