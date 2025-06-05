import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Article.module.css';
import { projectsData } from '../../projects';

const Article = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects = Object.entries(projectsData).map(([key, value]) => ({
    id: key,
    title: value.title,
    description: value.description,
    image: value.images[0].url,
    design: value.design,
    liveUrl: value.liveUrl,
    githubUrl: value.githubUrl,
    technologies: value.technologies,
    category: value.category,
    dateCompleted: value.dateCompleted,
    duration: value.duration,
    goal: value.goal
  }));

  // Get current project index and adjacent projects
  const currentProjectIndex = projects.findIndex(p => p.id === id);
  const previousProject = currentProjectIndex > 0 ? projects[currentProjectIndex - 1] : null;
  const nextProject = currentProjectIndex < projects.length - 1 ? projects[currentProjectIndex + 1] : null;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    if (projectsData[id]) {
      setProject(projectsData[id]);
      document.title = `${projectsData[id].title} - Portfolio`;
    } 
    else {
      navigate('/');
    }
    setLoading(false);
  }, [id, navigate]);

  // Removed the automatic slideshow useEffect - slideshow now only changes on user interaction

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } 
    catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

  const handlePreviousImage = () => {
    if (project && project.images) {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
      );
    }
  };

  const handleNextImage = () => {
    if (project && project.images) {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const handleDotClick = (index) => {
    setCurrentImageIndex(index);
  };

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.loader}></div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className={styles.errorContainer}>
        <h2>Project not found</h2>
        <Link to="/" className={styles.backButton}>Return Home</Link>
      </div>
    );
  }

  const currentImage = project.images ? project.images[currentImageIndex] : null;

  return (
    <motion.article
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={styles.articleContainer}
    >
      <nav className={styles.navigation}>
        <Link to="/" className={styles.backLink}>
          ← Back to Portfolio
        </Link>
        <button 
          onClick={handleCopyLink}
          className={styles.shareButton}
          title="Copy link to share"
        >
          {copied ? 'Copied!' : 'Share'}
        </button>
      </nav>

      <header className={styles.articleHeader}>
        <div className={styles.headerContent}>
          <span className={styles.category}>{project.category}</span>
          <h1 className={styles.title}>{project.title}</h1>
          
          <div className={styles.projectMeta}>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Completed:</span>
              <span className={styles.metaValue}>{project.dateCompleted}</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Duration:</span>
              <span className={styles.metaValue}>{project.duration}</span>
            </div>
          </div>

          <div className={styles.projectLinks}>
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.projectLink}
            >
              View Live Site
            </a>
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`${styles.projectLink} ${styles.secondaryLink}`}
            >
              GitHub Repository
            </a>
          </div>
        </div>
      </header>

      <section className={styles.imageSection}>
        <div className={styles.imageContainer}>
          {project.images && project.images.length > 0 && (
            <div className={styles.slideshow}>
              <div className={styles.slideshowWrapper}>
                {project.images.length > 1 && (
                  <button
                    className={`${styles.navButton} ${styles.navButtonPrev}`}
                    onClick={handlePreviousImage}
                    aria-label="Previous image"
                  >
                    &#8249;
                  </button>
                )}

                <div className={styles.imageWrapper}>
                  <img 
                    src={currentImage.url} 
                    alt={project.title}
                    className={styles.mainImage}
                  />
                </div>

                {project.images.length > 1 && (
                  <button
                    className={`${styles.navButton} ${styles.navButtonNext}`}
                    onClick={handleNextImage}
                    aria-label="Next image"
                  >
                    &#8250;
                  </button>
                )}
              </div>

              {project.images.length > 1 && (
                <div className={styles.progressContainer}>
                  {project.images.map((_, index) => (
                    <button
                      key={index}
                      className={`${styles.progressDot} ${
                        index === currentImageIndex ? styles.progressDotActive : ''
                      }`}
                      onClick={() => handleDotClick(index)}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              )}

              <p className={styles.imageCaption}>
                {currentImage.caption}
              </p>

              {project.images.length > 1 && (
                <div className={styles.imageCounter}>
                  {currentImageIndex + 1} / {project.images.length}
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      <main className={styles.mainContent}>
        <div className={styles.contentWrapper}>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Project Overview</h2>
            <div className={styles.description}>
              {project.detailedDescription.split('\n\n').map((paragraph, index) => (
                <p key={index} className={styles.paragraph}>
                  {paragraph}
                </p>
              ))}
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Technologies Used</h2>
            <div className={styles.techGrid}>
              {project.technologies.map((tech, index) => (
                <span key={index} className={styles.techTag}>
                  {tech}
                </span>
              ))}
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Design</h2>
            <div className={styles.description}>
              {project.design.split('\n\n').map((paragraph, index) => (
                <p key={index} className={styles.paragraph}>
                  {paragraph}
                </p>
              ))}
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Fonts</h2>
            <ul className={styles.list}>
              {project.fonts.map((fonts, index) => (
                <li key={index} className={styles.listItem}>
                  {fonts}
                </li>
              ))}
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Color Scheme</h2>
            <div className={styles.colorGrid}>
              {project.colorScheme.map((color, index) => (
                <div key={index} className={styles.colorBox}>
                  <div 
                    className={styles.colorCircle}
                    style={{ 
                      background: color.startsWith('linear-gradient') ? color : color,
                      backgroundColor: color.startsWith('linear-gradient') ? 'transparent' : color
                    }}
                  ></div>
                  <span className={styles.colorLabel}>{color}</span>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Challenges & Solutions</h2>
            <ul className={styles.list}>
              {project.challenges.map((challenge, index) => (
                <li key={index} className={styles.listItem}>
                  {challenge}
                </li>
              ))}
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Key Learnings</h2>
            <ul className={styles.list}>
              {project.learnings.map((learning, index) => (
                <li key={index} className={styles.listItem}>
                  {learning}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>

      <footer className={styles.articleFooter}>
        <div className={styles.footerContent}>
          <Link to="/" className={styles.footerButton}>
            ← View All Projects
          </Link>
          
          <div className={styles.projectNavigation}>
            {previousProject && (
              <Link 
                to={`/article/${previousProject.id}`}
                className={styles.projectNavCard}
              >
                <span className={styles.navLabel}></span>
                <span className={styles.navTitle}>{previousProject.title}</span>
              </Link>
            )}
            
            {nextProject && (
              <Link 
                to={`/article/${nextProject.id}`}
                className={styles.projectNavCard}
              >
                <span className={styles.navLabel}></span>
                <span className={styles.navTitle}>{nextProject.title}</span>
              </Link>
            )}
          </div>
        </div>
      </footer>
    </motion.article>
  );
};

export default Article;