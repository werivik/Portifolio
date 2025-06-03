import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from './Home.module.css';
import { motion } from 'framer-motion';
import { projectsData } from '../../projects';
import mewithflag from '../../../public/media/hero/mewithflag.jpg';
import chilli from '../../../public/media/hero/chilli.jpg';
import kitty from '../../../public/media/hero/kitty.jpg';

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

  const projects = Object.entries(projectsData).map(([key, value]) => ({
    id: key,
    title: value.title,
    description: value.description,
    image: value.images[0].url,
    technologies: value.technologies,
    category: value.category
  }));

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
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
        <div className={styles.hero}>
          <div className={styles.heroImages}>
            <div className={styles.heroTop}>            
              <img src={mewithflag}></img>
              <img src={kitty} className={styles.kitty}></img>
            </div>
            <img src={chilli} className={styles.heroBottom}></img>
          </div>
          <h1 className={styles.heroTitle}>
            Welcome to My <span className={styles.highlight}>Portfolio</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Showcasing my journey in FED2
          </p>
        </div>
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
              <Link to={`/article/${project.id}`} className={styles.cardLink}>
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
    </motion.div>
  );
};

export default Home;