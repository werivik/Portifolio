  export const projectsData = {
    "ecommerce": {
      id: "ecommerce-platform",
      title: "Nuvra",
      category: "E-commerce platform",
      description: "A comprehensive e-commerce solution that revolutionizes online shopping experience with modern design patterns and robust functionality.",
      detailedDescription: `Nuvra is a modern and responsive Ecommerce web application built for a school project to apply React.js concepts. The goal of this project was to design and develop a fully functional online shop using React, React Router and API intergration.
      The application interacts with the Noroff Online Shop API to fetch products, display product listings and manage shopping cart functionality. The app allows users to browse products, view individual product details, add items to their cart and proceed through a checckout flow..`,
      images: [
        {
          url: "/public/media/ecommerce/homepage.png",
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
      technologies: ["React", "HTML", "CSS", "JavaScript"],
      liveUrl: "https://nuvra.netlify.app/",
      githubUrl: "https://github.com/werivik/Nuvra",
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
      dateCompleted: "March 2025",
      duration: "2 Weeks"
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
          url: "/public/media/agency/homepage.png",
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
      technologies: ["Vue.js", "Firebase", "React", "CSS", "HTML", "JavaScript"],
      liveUrl: "https://thespot-agency.netlify.app/",
      githubUrl: "https://github.com/werivik/Agency2",
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
      dateCompleted: "April 2025",
      duration: "4 Weeks"
    },
    "venue": {
      id: "venue",
      title: "Holidaze",
      category: "Booking Website",
      description: "An interactive Booking website to view and Create Venues.",
      detailedDescription: `Holidaze is a modern accommodation booking website that allows users to search for venues, make bookings and manage their bookings through their profile page. Users can become Venue Managers to create, edit and delete their venues. The platform is built with a focus on a clean, responsive layout with a smooth user experience.
      This project was developed as part of the Noroff FED2 exam project to demonstrate planning, design, development, and deployment skills.`,
      images: [
        {
          url: "/public/media/venue/homepage.png",
          caption: "Interactive dashboard showing multiple data visualizations with filtering and export options"
        }
      ],
      technologies: ["React", "HTML", "JavaScript", "Framer Motion", "CSS", "Vite"],
      liveUrl: "https://werivik-holidaze.netlify.app/",
      githubUrl: "https://github.com/werivik/exam2025",
      Design: [
      ],
      challenges: [
      ],
      learnings: [
      ],
      dateCompleted: "May 2025",
      duration: "6 Weeks"
    }
  };