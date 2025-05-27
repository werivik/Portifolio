import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Article.module.css';

const Article = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projectsData = {
    "ecommerce": {
      id: "ecommerce-platform",
      title: "E-Commerce Platform",
      category: "Full Stack Development",
      description: "A comprehensive e-commerce solution that revolutionizes online shopping experience with modern design patterns and robust functionality.",
      detailedDescription: `This full-stack e-commerce platform represents a complete online shopping solution built from the ground up. The project showcases advanced React patterns, secure backend architecture, and seamless third-party integrations.

The platform features a modern, responsive design that adapts beautifully across all devices. Users can browse products with advanced filtering options, manage their shopping cart with real-time updates, and complete purchases through a secure checkout process integrated with Stripe payment processing.

The admin dashboard provides comprehensive store management capabilities, including inventory tracking, order management, customer analytics, and sales reporting. The backend is built with Node.js and Express, featuring JWT authentication, data validation, and optimized database queries.`,
      images: [
        {
          url: "/api/placeholder/800/400",
          caption: "Homepage of the e-commerce platform showcasing the modern product grid and navigation"
        },
        {
          url: "/api/placeholder/800/400",
          caption: "Product detail page with image gallery and customer reviews"
        },
        {
          url: "/api/placeholder/800/400",
          caption: "Shopping cart with real-time updates and secure checkout process"
        },
        {
          url: "/api/placeholder/800/400",
          caption: "Admin dashboard displaying analytics and inventory management"
        },
        {
          url: "/api/placeholder/800/400",
          caption: "Mobile-responsive design showcasing seamless user experience"
        }
      ],
      technologies: ["React", "Node.js", "MongoDB", "Stripe API", "JWT", "Express.js", "Tailwind CSS"],
      liveUrl: "https://ecommerce-demo.netlify.app",
      githubUrl: "https://github.com/yourusername/ecommerce-platform",
      challenges: [
        "Implementing secure payment processing with Stripe",
        "Managing complex state across multiple components",
        "Optimizing database queries for product searches",
        "Creating a responsive design that works on all devices"
      ],
      learnings: [
        "Advanced React hooks and context management",
        "Backend security best practices",
        "Payment gateway integration",
        "Database optimization techniques"
      ],
      improvements: [
        "Add real-time chat support for customers",
        "Implement advanced analytics dashboard",
        "Add multi-language support",
        "Integrate with inventory management systems"
      ],
      dateCompleted: "December 2024",
      duration: "3 months"
    },
    "agency": {
      id: "task-management-app",
      title: "Task Management App",
      category: "Frontend Development",
      description: "A collaborative task management application designed to enhance team productivity with real-time synchronization and intuitive user experience.",
      detailedDescription: `This task management application addresses the growing need for efficient team collaboration in remote work environments. Built with Vue.js and Firebase, it provides real-time synchronization across all team members, ensuring everyone stays updated on project progress.

The application features an intuitive drag-and-drop interface for task management, allowing users to easily move tasks between different stages of completion. Team members can collaborate through comments, file attachments, and real-time notifications.

The Firebase integration provides seamless data synchronization, user authentication, and cloud storage for attachments. The responsive design ensures the application works perfectly on desktop, tablet, and mobile devices, enabling productivity from anywhere.`,
      images: [
        {
          url: "/api/placeholder/800/400",
          caption: "Task board interface showing drag-and-drop functionality and team collaboration features"
        },
        {
          url: "/api/placeholder/800/400",
          caption: "Calendar view displaying project deadlines and milestone tracking"
        },
        {
          url: "/api/placeholder/800/400",
          caption: "Team collaboration workspace with real-time comments and notifications"
        },
        {
          url: "/api/placeholder/800/400",
          caption: "Mobile app interface optimized for on-the-go task management"
        }
      ],
      technologies: ["Vue.js", "Firebase", "Vuetify", "WebSocket", "Cloud Functions", "Vue Router"],
      liveUrl: "https://taskflow-app.netlify.app",
      githubUrl: "https://github.com/yourusername/task-management-app",
      challenges: [
        "Implementing smooth drag-and-drop functionality",
        "Managing real-time data synchronization",
        "Creating responsive layouts for mobile devices",
        "Handling offline functionality gracefully"
      ],
      learnings: [
        "Vue.js ecosystem and component architecture",
        "Firebase real-time database optimization",
        "Progressive Web App development",
        "User experience design principles"
      ],
      improvements: [
        "Add time tracking functionality",
        "Implement advanced reporting and analytics",
        "Create custom workflow templates",
        "Add integration with popular development tools"
      ],
      dateCompleted: "November 2024",
      duration: "2.5 months"
    },
    "venue": {
      id: "data-dashboard",
      title: "Data Visualization Dashboard",
      category: "Data Visualization",
      description: "An interactive analytics dashboard that transforms complex data into actionable insights through beautiful and intuitive visualizations.",
      detailedDescription: `This data visualization dashboard represents a sophisticated approach to business intelligence, combining powerful data processing capabilities with stunning visual presentations. Built with React and D3.js, it handles large datasets while maintaining smooth performance.

The dashboard features multiple chart types including line graphs, bar charts, heat maps, and custom visualizations. Users can interact with the data through filtering, zooming, and cross-chart highlighting. The Python/Flask backend processes data efficiently and provides RESTful APIs for the frontend.

Real-time data updates ensure that stakeholders always have access to the latest information. The export functionality allows users to generate reports in various formats, making it easy to share insights with team members and clients.`,
      images: [
        {
          url: "/api/placeholder/800/400",
          caption: "Interactive dashboard showing multiple data visualizations with filtering and export options"
        },
        {
          url: "/api/placeholder/800/400",
          caption: "Real-time analytics charts displaying live data streams and trends"
        },
        {
          url: "/api/placeholder/800/400",
          caption: "Custom D3.js visualizations for complex data relationships"
        },
        {
          url: "/api/placeholder/800/400",
          caption: "Export and reporting interface with multiple format options"
        },
        {
          url: "/api/placeholder/800/400",
          caption: "Mobile-optimized dashboard for data access on any device"
        },
        {
          url: "/api/placeholder/800/400",
          caption: "Administrative panel for data source management and user permissions"
        }
      ],
      technologies: ["React", "D3.js", "Python", "Flask", "PostgreSQL", "Chart.js", "Material-UI"],
      liveUrl: "https://data-insights-dashboard.netlify.app",
      githubUrl: "https://github.com/yourusername/data-dashboard",
      challenges: [
        "Optimizing performance with large datasets",
        "Creating custom D3.js visualizations",
        "Implementing real-time data updates",
        "Designing intuitive user interactions"
      ],
      learnings: [
        "Advanced D3.js concepts and custom visualizations",
        "Data processing and optimization techniques",
        "Python Flask API development",
        "Performance optimization for data-heavy applications"
      ],
      improvements: [
        "Add machine learning predictions",
        "Implement advanced filtering options",
        "Create customizable dashboard layouts",
        "Add collaborative features for team insights"
      ],
      dateCompleted: "January 2025",
      duration: "4 months"
    }
  };

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

  useEffect(() => {
    if (project && project.images && project.images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => 
          prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
        );
      }, 10000);

      return () => clearInterval(interval);
    }
  }, [project]);

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
          <p className={styles.subtitle}>{project.description}</p>
          
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

              <div className={styles.imageWrapper}>
                <img 
                  src={currentImage.url} 
                  alt={project.title}
                  className={styles.mainImage}
                />
                
                {project.images.length > 1 && (
                  <>
                    <button
                      className={`${styles.navButton} ${styles.navButtonPrev}`}
                      onClick={handlePreviousImage}
                      aria-label="Previous image"
                    >
                      &#8249;
                    </button>
                    <button
                      className={`${styles.navButton} ${styles.navButtonNext}`}
                      onClick={handleNextImage}
                      aria-label="Next image"
                    >
                      &#8250;
                    </button>
                  </>
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

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Future Improvements</h2>
            <ul className={styles.list}>
              {project.improvements.map((improvement, index) => (
                <li key={index} className={styles.listItem}>
                  {improvement}
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
          <div className={styles.footerLinks}>
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.footerLink}
            >
              Live Demo
            </a>
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.footerLink}
            >
              Source Code
            </a>
          </div>
        </div>
      </footer>
    </motion.article>
  );
};

export default Article;