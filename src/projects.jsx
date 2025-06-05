  export const projectsData = {
    "ecommerce": {
      id: "ecommerce-platform",
      title: "Nuvra",
      category: "E-commerce platform",
      description: "A Interactive E-Commerce website",
      detailedDescription: `Project Nuvra is a React-based eCommerce application designed to provide a seamless user shopping experience. The application interacts with a RESTful API to fetch product data, display individual product details, and handle cart operations. It includes five primary pages: Homepage, Product Page, Cart (Checkout) Page, Checkout Success Page, and a Contact Page. The Homepage lists all products and features a look-ahead (auto-complete) search bar that filters results in real-time. Each product has a dedicated Product Page displaying detailed information such as title, description, image, price (with discount calculations if applicable), and reviews.

A global cart state is maintained, which is updated when users click "Add to Cart" on a product. This cart is shown in the Cart Page, listing selected items and showing a total price. Users can then proceed to checkout, which leads to the Checkout Success Page, where the order is confirmed and the cart is cleared.

The Contact Page includes a fully validated form with fields for name, subject, email, and message body. On successful validation, the form data is logged to the console
This project was developed as part of the Noroff FED2 JavaScript2 project.`,
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
      design: `
        The design features a contemporary, geometric aesthetic complemented by natural elements to evoke a sense of tranquility and harmony. The background is a soft, calming beige, subtly overlaid with the shadow of a tree to reinforce the organic theme and provide visual interest without distraction.
The color palette is intentionally soothing, consisting of muted tones such as beige, soft green, warm yellow, and clean white. These colors are carefully selected to create a serene browsing experience, encouraging visitors to stay engaged with the website content. Overall, the design balances modern minimalism with a touch of nature, fostering a welcoming and relaxed digital environment.`
      ,
colorScheme: [
  "#282c34", 
  "#f4ae2c", 
  "#FFFFFF", 
  "#bfd0a8",
  "linear-gradient(0deg, rgba(225,220,210,1) 0%, rgba(246,242,233,1) 48%, rgba(244,244,244,1) 100%)"
],
      fonts: [
        "Playfair Display", "Abril Fatface"
      ],
      challenges: [
        "Optimizing database queries for product searches",
        "Creating a responsive design that works on all devices"
      ],
      learnings: [
        "React Fundamentals: Deepened understanding of components, props, state, and hooks",
        "React Router: Gained hands-on experience with dynamic routing and URL parameters",
        "API Integration: Learned how to fetch and display external data from a REST API",
        "Form Validation: Implemented custom validation logic for form inputs using standard JavaScript",
        "Responsive Design: Practiced creating mobile-friendly layouts",
        "Code Organization: Improved folder structure and component reusability",
        "Deployment: Learned how to build and deploy a React application using Netlify"
      ],
      improvements: [
        "Implement reusable Components"
      ],
      dateCompleted: "March 2025",
      duration: "2 Weeks"
    },

    "agency": {
      id: "agency",
      title: "The Spot",
      category: "Event Planner",
      description: "A collaborative Event Planner to view and create local Events.",
      detailedDescription: `This design was developed as part of a collaborative team exercise. We utilized multiple GitHub and Visual Studio Code branches to manage our workflow effectively, ensuring smooth integration of each team member's contributions. The visual style features a bold, rounded aesthetic, with large images displayed prominently to immediately capture the user's attention. A thoughtfully selected color palette of blue and salmon pink enhances visual engagement and user interest.

To create a cohesive and modern interface, all elements feature smoothly rounded corners, contributing to an overall polished appearance. Typography and layout were carefully considered to ensure content is both readable and accessible to a wide range of users. Additionally, we integrated a real-time database using Firebase, enabling dynamic content updates and seamless data synchronization across the application.
This project was developed as part of the Noroff FED2 Agency project.`,
      images: [
        {
          url: "/public/media/agency/homepage.png",
          caption: "Task board interface showing drag-and-drop functionality and team collaboration features"
        },
        {
          url: "/public/media/agency/homepage2.png",
          caption: "Interactive dashboard showing multiple data visualizations with filtering and export options"
        },
        {
          url: "/public/media/agency/homepage3.png",
          caption: "Interactive dashboard showing multiple data visualizations with filtering and export options"
        },
        {
          url: "/public/media/agency/homepage4.png",
          caption: "Interactive dashboard showing multiple data visualizations with filtering and export options"
        },
        {
          url: "/public/media/agency/homepage5.png",
          caption: "Interactive dashboard showing multiple data visualizations with filtering and export options"
        },
        {
          url: "/public/media/agency/events.png",
          caption: "Interactive dashboard showing multiple data visualizations with filtering and export options"
        },
        {
          url: "/public/media/agency/events2.png",
          caption: "Interactive dashboard showing multiple data visualizations with filtering and export options"
        },
        {
          url: "/public/media/agency/event.png",
          caption: "Interactive dashboard showing multiple data visualizations with filtering and export options"
        },
        {
          url: "/public/media/agency/loginoptions.png",
          caption: "Interactive dashboard showing multiple data visualizations with filtering and export options"
        },
        {
          url: "/public/media/agency/register.png",
          caption: "Interactive dashboard showing multiple data visualizations with filtering and export options"
        },
        {
          url: "/public/media/agency/login.png",
          caption: "Interactive dashboard showing multiple data visualizations with filtering and export options"
        },
        {
          url: "/public/media/agency/profile.png",
          caption: "Interactive dashboard showing multiple data visualizations with filtering and export options"
        },
        {
          url: "/public/media/agency/create.png",
          caption: "Interactive dashboard showing multiple data visualizations with filtering and export options"
        },
        {
          url: "/public/media/agency/create2.png",
          caption: "Interactive dashboard showing multiple data visualizations with filtering and export options"
        },
        {
          url: "/public/media/agency/about.png",
          caption: "Interactive dashboard showing multiple data visualizations with filtering and export options"
        },
        {
          url: "/public/media/agency/contact.png",
          caption: "Interactive dashboard showing multiple data visualizations with filtering and export options"
        },
      ],
      technologies: ["Vue.js", "Firebase", "React", "CSS", "HTML", "JavaScript"],
      liveUrl: "https://thespot-agency.netlify.app/",
      githubUrl: "https://github.com/werivik/Agency2",
            design: ``
      ,
colorScheme: [
  "#2B266F", 
  "#FCFBF6", 
  "#E07A5F", 
],
      fonts: [
        "Segoe UI"
      ],
      challenges: [
        "Managing real-time data synchronization",
        "Creating responsive layouts for mobile devices"
      ],
      learnings: [
        "Firebase real-time database optimization",
        "Teamwork with multiple Branches"
      ],
      improvements: [
        "Add reusable UI Components"
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
        },
        {
          url: "/public/media/venue/homepage2.png",
          caption: "Interactive dashboard showing multiple data visualizations with filtering and export options"
        },
        {
          url: "/public/media/venue/homepage3.png",
          caption: "Interactive dashboard showing multiple data visualizations with filtering and export options"
        },
        {
          url: "/public/media/venue/homepage4.png",
          caption: "Interactive dashboard showing multiple data visualizations with filtering and export options"
        },
        {
          url: "/public/media/venue/homepage5.png",
          caption: "Interactive dashboard showing multiple data visualizations with filtering and export options"
        },
        {
          url: "/public/media/venue/homepage6.png",
          caption: "Interactive dashboard showing multiple data visualizations with filtering and export options"
        },
        {
          url: "/public/media/venue/venues.png",
          caption: "Interactive dashboard showing multiple data visualizations with filtering and export options"
        },
        {
          url: "/public/media/venue/venues2.png",
          caption: "Interactive dashboard showing multiple data visualizations with filtering and export options"
        },
        {
          url: "/public/media/venue/venue.png",
          caption: "Interactive dashboard showing multiple data visualizations with filtering and export options"
        },
        {
          url: "/public/media/venue/venue2.png",
          caption: "Interactive dashboard showing multiple data visualizations with filtering and export options"
        },  
        {
          url: "/public/media/venue/venue3.png",
          caption: "Interactive dashboard showing multiple data visualizations with filtering and export options"
        },  
        {
          url: "/public/media/venue/venuecostumer.png",
          caption: "Interactive dashboard showing multiple data visualizations with filtering and export options"
        },
        {
          url: "/public/media/venue/venueowner.png",
          caption: "Interactive dashboard showing multiple data visualizations with filtering and export options"
        },
        {
          url: "/public/media/venue/venueowner2.png",
          caption: "Interactive dashboard showing multiple data visualizations with filtering and export options"
        },
        {
          url: "/public/media/venue/register.png",
          caption: "Interactive dashboard showing multiple data visualizations with filtering and export options"
        },  
        {
          url: "/public/media/venue/login.png",
          caption: "Interactive dashboard showing multiple data visualizations with filtering and export options"
        },  
        {
          url: "/public/media/venue/costumerprofile.png",
          caption: "Interactive dashboard showing multiple data visualizations with filtering and export options"
        }, 
        {
          url: "/public/media/venue/costumerprofile2.png",
          caption: "Interactive dashboard showing multiple data visualizations with filtering and export options"
        },
        {
          url: "/public/media/venue/venuepopup.png",
          caption: "Interactive dashboard showing multiple data visualizations with filtering and export options"
        }, 
        {
          url: "/public/media/venue/registeradmin.png",
          caption: "Interactive dashboard showing multiple data visualizations with filtering and export options"
        },
        {
          url: "/public/media/venue/loginadmin.png",
          caption: "Interactive dashboard showing multiple data visualizations with filtering and export options"
        },
        {
          url: "/public/media/venue/adminprofile.png",
          caption: "Interactive dashboard showing multiple data visualizations with filtering and export options"
        },
        {
          url: "/public/media/venue/adminprofile2.png",
          caption: "Interactive dashboard showing multiple data visualizations with filtering and export options"
        },
        {
          url: "/public/media/venue/adminpopup.png",
          caption: "Interactive dashboard showing multiple data visualizations with filtering and export options"
        },
        {
          url: "/public/media/venue/edit.png",
          caption: "Interactive dashboard showing multiple data visualizations with filtering and export options"
        },
        {
          url: "/public/media/venue/edit2.png",
          caption: "Interactive dashboard showing multiple data visualizations with filtering and export options"
        },
        {
          url: "/public/media/venue/create.png",
          caption: "Interactive dashboard showing multiple data visualizations with filtering and export options"
        },
        {
          url: "/public/media/venue/about.png",
          caption: "Interactive dashboard showing multiple data visualizations with filtering and export options"
        },
        {
          url: "/public/media/venue/about2.png",
          caption: "Interactive dashboard showing multiple data visualizations with filtering and export options"
        },
        {
          url: "/public/media/venue/about3.png",
          caption: "Interactive dashboard showing multiple data visualizations with filtering and export options"
        },
        {
          url: "/public/media/venue/about4.png",
          caption: "Interactive dashboard showing multiple data visualizations with filtering and export options"
        },
        {
          url: "/public/media/venue/contact.png",
          caption: "Interactive dashboard showing multiple data visualizations with filtering and export options"
        },
        {
          url: "/public/media/venue/contact2.png",
          caption: "Interactive dashboard showing multiple data visualizations with filtering and export options"
        },                
      ],
      technologies: ["React", "HTML", "JavaScript", "Framer Motion", "CSS", "Vite"],
      liveUrl: "https://werivik-holidaze.netlify.app/",
      githubUrl: "https://github.com/werivik/exam2025",
      design: `
        The design features a contemporary, geometric aesthetic complemented by natural elements to evoke a sense of tranquility and harmony. The background is a soft, calming beige, subtly overlaid with the shadow of a tree to reinforce the organic theme and provide visual interest without distraction.
The color palette is intentionally soothing, consisting of muted tones such as beige, soft green, warm yellow, and clean white. These colors are carefully selected to create a serene browsing experience, encouraging visitors to stay engaged with the website content. Overall, the design balances modern minimalism with a touch of nature, fostering a welcoming and relaxed digital environment.`
      ,
colorScheme: [
  "1F1B17", 
  "#F3F0EB", 
  "#B88A44", 
  "#6B7A3A"
],
      fonts: [
        "Playfair Display", "Judson", "Source Serif 4"
      ],
      challenges: [
      ],
      learnings: [
      ],
      dateCompleted: "May 2025",
      duration: "6 Weeks"
    }
  };