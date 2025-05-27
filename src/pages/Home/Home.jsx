import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from './Home.module.css';
import { motion } from 'framer-motion';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsVisible(true);
  }, []);

  useEffect(() => {
    document.title = 'Portfolio - Home';
    
    return () => {
      document.title = 'Portfolio';
    };
  }, []);

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  const cardVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    hover: { 
      y: -8,
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3 }
    }
  };

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React and Node.js, featuring user authentication, payment integration, and admin dashboard.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
      category: "Full Stack Development",
      link: "/project/ecommerce-platform"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "/api/placeholder/400/250",
      technologies: ["Vue.js", "Firebase", "Vuetify", "WebSocket"],
      category: "Frontend Development",
      link: "/project/task-management-app"
    },
    {
      id: 3,
      title: "Data Visualization Dashboard",
      description: "An interactive dashboard for data visualization and analytics, featuring dynamic charts, filters, and export capabilities.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "D3.js", "Python", "Flask"],
      category: "Data Visualization",
      link: "/project/data-dashboard"
    }
  ];

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={styles.homeContainer}
    >
      <section className={styles.heroSection}>
        <motion.div 
          className={styles.heroContent}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className={styles.heroTitle}>
            Welcome to My <span className={styles.highlight}>Portfolio</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Showcasing my journey in web development through innovative projects and continuous learning
          </p>
          <motion.div 
            className={styles.heroStats}
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className={styles.stat}>
              <span className={styles.statNumber}>3</span>
              <span className={styles.statLabel}>Projects</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>12+</span>
              <span className={styles.statLabel}>Technologies</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>100%</span>
              <span className={styles.statLabel}>Passion</span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section className={styles.projectsSection}>
        <motion.div 
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className={styles.sectionTitle}>Featured Projects</h2>
          <p className={styles.sectionSubtitle}>
            Explore my latest work and discover the technologies and methodologies I've mastered
          </p>
        </motion.div>

        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              initial="initial"
              animate={isVisible ? "animate" : "initial"}
              whileHover="hover"
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={styles.projectCard}
            >
              <Link to={project.link} className={styles.cardLink}>
                <div className={styles.cardImage}>
                  <img 
                    src={project.image} 
                    alt={`${project.title} preview`}
                    className={styles.projectImage}
                  />
                  <div className={styles.imageOverlay}>
                    <span className={styles.viewProject}>View Project</span>
                  </div>
                </div>
                
                <div className={styles.cardContent}>
                  <div className={styles.cardCategory}>{project.category}</div>
                  <h3 className={styles.cardTitle}>{project.title}</h3>
                  <p className={styles.cardDescription}>{project.description}</p>
                  
                  <div className={styles.techStack}>
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className={styles.techTag}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <motion.section 
        className={styles.ctaSection}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Ready to Collaborate?</h2>
          <p className={styles.ctaText}>
            I'm always open to discussing new opportunities and exciting projects
          </p>
          <div className={styles.ctaButtons}>
            <a href="mailto:your.email@example.com" className={styles.ctaButton}>
              Get In Touch
            </a>
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`${styles.ctaButton} ${styles.ctaButtonSecondary}`}
            >
              View GitHub
            </a>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Home;