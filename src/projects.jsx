  export const projectsData = {
    "ecommerce": {
      id: "ecommerce-platform",
      title: "Nuvra",
      category: "E-commerce platform",
      description: "Project Nuvra is a responsive eCommerce website built with React. It features dynamic product listings, cart functionality, and form validation, with routing managed through React Router. The project integrates with a live product API and demonstrates modern frontend development practices.",
      detailedDescription: `Project Nuvra is a React-based eCommerce application designed to provide a seamless user shopping experience. The application interacts with a RESTful API to fetch product data, display individual product details, and handle cart operations. It includes five primary pages: Homepage, Product Page, Cart (Checkout) Page, Checkout Success Page, and a Contact Page. The Homepage lists all products and features a look-ahead (auto-complete) search bar that filters results in real-time. Each product has a dedicated Product Page displaying detailed information such as title, description, image, price (with discount calculations if applicable), and reviews.

A global cart state is maintained, which is updated when users click "Add to Cart" on a product. This cart is shown in the Cart Page, listing selected items and showing a total price. Users can then proceed to checkout, which leads to the Checkout Success Page, where the order is confirmed and the cart is cleared.

The Contact Page includes a fully validated form with fields for name, subject, email, and message body. On successful validation, the form data is logged to the console.

Reusable UI components include a shared Layout component wrapping the Header and Footer, with a Cart Icon in the Header showing the total cart count. The project emphasizes modular code, clean structure, and responsiveness, ensuring it works across devices.`,
      images: [
        {
          url: "/public/media/ecommerce/homepage.png",
          caption: "Homepage of the e-commerce platform showcasing the modern product grid and navigation"
        },
        {
          url: "/public/media/ecommerce/homepage2.png",
          caption: "Product detail page with image gallery and customer reviews"
        },
        {
          url: "/public/media/ecommerce/homepage3.png",
          caption: "Shopping cart with real-time updates and secure checkout process"
        },
        {
          url: "/public/media/ecommerce/products.png",
          caption: "Admin dashboard displaying analytics and inventory management"
        },
        {
          url: "/public/media/ecommerce/product.png",
          caption: "Mobile-responsive design showcasing seamless user experience"
        },
        {
          url: "/public/media/ecommerce/cart.png",
          caption: "Mobile-responsive design showcasing seamless user experience"
        },
        {
          url: "/public/media/ecommerce/orderconfirmation.png",
          caption: "Mobile-responsive design showcasing seamless user experience"
        },
        {
          url: "/public/media/ecommerce/success.png",
          caption: "Mobile-responsive design showcasing seamless user experience"
        },        
        {
          url: "/public/media/ecommerce/contact.png",
          caption: "Mobile-responsive design showcasing seamless user experience"
        }
      ],
      technologies: ["React", "React Router DOM", "CSS Modules", "JavaScript", "Netlify", "HTML", "Noroff API"],
      liveUrl: "https://nuvra.netlify.app/",
      githubUrl: "https://github.com/werivik/Nuvra",
      challenges: [
        "Implementing secure payment processing with Stripe",
        "Managing complex state across multiple components",
        "Optimizing database queries for product searches",
        "Creating a responsive design that works on all devices"
      ],
      learnings: [
        "React Fundamentals: Deepened understanding of components, props, state, and hooks",
        "React Router: Gained hands-on experience with dynamic routing and URL parameters",
        "API Integration: Learned how to fetch and display external data from a REST API",
        "Global State Handling: Used useContext or useState for managing cart state across components",
        "Form Validation: Implemented custom validation logic for form inputs using standard JavaScript",
        "Responsive Design: Practiced creating mobile-friendly layouts using either CSS Modules or Styled Components",
        "Code Organization: Improved folder structure and component reusability",
        "Deployment: Learned how to build and deploy a React application using Netlify"
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