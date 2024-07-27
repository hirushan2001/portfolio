import React,{ useState,useRef,useEffect  } from 'react';
import { motion,AnimatePresence,useInView   } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import './Projects.css';
import image1 from '../assets/FeildMaster.png';
import image2 from '../assets/thissite.png';
import image3 from '../assets/geminiclone.png';
import image4 from '../assets/pcb.png';

const projects = [
  {
    image: image1,
    tags: ['React JS', 'MongoDB', 'Node JS', 'Express JS', 'React Native'],
    title: 'Fieldmaster',
    // dates: 'Jan 2024 - Dec 2023',
    description: 'FieldMaster is a comprehensive land measuring and management application available on both mobile and web platforms. ',
    githubLink: 'https://github.com/kanishkazoysa/FieldMaster.git',
    websiteLink: 'https://field-master-frontend.vercel.app/'
  },
  {
    image: image2,
    tags: ['React JS', 'Node JS','Framer Motion' ],
    title: 'Portfolio Website',
    // dates: 'Jan 2024 - Dec 2023',
    description: 'This website is built with React.js and Framer Motion.This website is built with React.js and Framer Motion Framer Motion',
    websiteLink: 'https://field-master-frontend.vercel.app/'
  },
  {
    image: image3,
    tags: ['React JS',  'Node JS',],
    title: 'Gemini Clone',
    // dates: 'Apr 2023 - May 2023',
    description: 'Developed a generative AI application using the Google Gemini API..Developed a generative AI application using the ',
    githubLink: 'https://github.com/hirushan2001/Gemini-Clone.git',
    websiteLink: 'https://gemini-clone-nine-pied.vercel.app/'
  },
  {
    image: image4,
    tags: ['Arduino', 'C++'],
    title: 'Security System for Bicycle',
    // dates: 'Jun 2023 - Jul 2023',
    description: 'The Aim of this initiative is to enhance the safety of bicycle riders and safeguard their bicycles, while making bicycle ',
    githubLink: 'https://github.com/hirushan2001/Arduino_security_system.git',
  },

 
  // Add more projects as needed
];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const [key, setKey] = useState(0);
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  const displayedProjects = showAll ? projects : projects.slice(0, 3);

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

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Particle system
    const particles = [];
    const particleCount = 100;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
        this.color = `rgba(0, 255, 157, ${Math.random() * 0.5 + 0.5})`;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const createParticles = () => {
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }
      animationFrameId = requestAnimationFrame(animateParticles);
    };

    createParticles();
    animateParticles();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);


  return (
    <motion.div
      ref={containerRef}
      className="projects-container"
      id="projects"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
          <canvas ref={canvasRef} className="background-canvas"></canvas>

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
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
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