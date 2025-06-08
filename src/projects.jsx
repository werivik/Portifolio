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

    /*
    "agency": {
      id: "agency",
      title: "The Spot",
      category: "Event Planner",
      description: "A collaborative Event Planner to view and create local Events.",
      detailedDescription: `This event management application was developed as part of the Noroff FED2 Agency project to address the need for streamlined event discovery and organization. Built with Vue.js and Firebase, the platform offers real-time functionality, including user authentication, dynamic content updates, and cloud-based data storage.

The application includes a user-friendly homepage featuring a curated list of upcoming events sorted by date, with a convenient filtering option based on event categories such as cocktails, nature, and more. A dedicated "All Events" page allows users to browse a comprehensive list of upcoming events.

Users can register, log in, and access their profile pages, where they have the ability to create new events or edit existing ones. The Firebase integration ensures smooth synchronization of data across the application and provides secure user authentication.

Designed with a fully responsive layout, the application delivers an optimal user experience across desktop, tablet, and mobile devices—enabling users to discover, manage, and share events from anywhere.`,
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
      design: `This design was developed as part of a collaborative team exercise. We utilized multiple GitHub and Visual Studio Code branches to manage our workflow effectively, ensuring smooth integration of each team member's contributions. The visual style features a bold, rounded aesthetic, with large images displayed prominently to immediately capture the user's attention. A thoughtfully selected color palette of blue and salmon pink enhances visual engagement and user interest.

To create a cohesive and modern interface, all elements feature smoothly rounded corners, contributing to an overall polished appearance. Typography and layout were carefully considered to ensure content is both readable and accessible to a wide range of users. Additionally, we integrated a real-time database using Firebase, enabling dynamic content updates and seamless data synchronization across the application.`
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
    */

    "semester": {
      id: "semester",
      title: "Aucti",
      category: "Bidding Website",
      description: "A interactive Auction website",
      detailedDescription: ``,
      images: [
        {
          url: "/public/media/semester/homepage.png",
          caption: ""
        },
        {
          url: "/public/media/semester/homepage2.png",
          caption: ""
        },
        {
          url: "/public/media/semester/homepage3.png",
          caption: ""
        },
        {
          url: "/public/media/semester/register.png",
          caption: ""
        },
        {
          url: "/public/media/semester/login.png",
          caption: ""
        },
        {
          url: "/public/media/semester/listings.png",
          caption: ""
        },
        {
          url: "/public/media/semester/listings2.png",
          caption: ""
        },
        {
          url: "/public/media/semester/listing.png",
          caption: ""
        },
        {
          url: "/public/media/semester/profile.png",
          caption: ""
        },
        {
          url: "/public/media/semester/create.png",
          caption: ""
        },
        {
          url: "/public/media/semester/update.png",
          caption: ""
        },
      ],
      technologies: ["PostCSS", "Tailwind CSS", "HTML", "JavaScript", "Autoprefixer"],
      liveUrl: "https://aucti.netlify.app/",
      githubUrl: "https://github.com/werivik/semester24",
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
      detailedDescription: `Holidaze is a modern accommodation booking platform developed as part of the Noroff FED2 exam project, designed to showcase end-to-end skills in planning, design, development, and deployment. Built using React, React Router (react-router-dom), JavaScript, HTML, and CSS Modules, the application integrates with the official Noroff API to manage data and bookings.

The platform allows unregistered users to browse the homepage, view all available venues, apply filters, and explore detailed venue information. However, only registered users can access booking-related features. Logged-in users have access to a personalized profile page where they can update their avatar and banner, view upcoming, current, and past bookings, as well as edit or cancel upcoming reservations. Additionally, users can rate venues they’ve stayed at, contributing to the platform’s community feedback system.

Admin users, referred to as Venue Managers, have the ability to create, edit, and delete their own venues but cannot book venues themselves, maintaining the separation between venue managers and customers. All users, regardless of login status, can access general information through the "About" and "Contact Us" pages.

Holidaze is built with a focus on clean, responsive design and delivers a seamless user experience across desktop and mobile devices. The application demonstrates strong front-end development principles, thoughtful user experience design, and effective use of a third-party API.`,
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
      design: `The Holidaze platform features a modern, calm, and welcoming design aimed at creating a comfortable and engaging experience for users. The overall aesthetic is clean and refined, with a soft beige background that sets a neutral, relaxing tone. Accent colors—gold, green, and a deep, nearly black shade of dark beige—are used strategically for buttons and interactive elements to draw attention without overwhelming the user.
      The layout is based on a geometric structure, combining clarity with elegance. Key sections are divided into left and right alignments: the left side typically contains functional titles (e.g., "Our Most Beloved Destinations"), while the right side features inspirational quotes (e.g., "The world is a book, and those who do not travel read only one page") to emotionally connect with users and encourage exploration.
      The design is fully responsive and optimized for accessibility, ensuring a seamless experience across all devices. Whether browsing from a desktop or mobile device, users enjoy a thoughtfully crafted interface that balances visual appeal with usability.`
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
        'During the development of Holidaze, one of the main challenges was aligning the intended design and feature set with the limitations of the provided Noroff API. While the original vision included several dynamic and engaging features, certain technical constraints required creative problem-solving and flexibility in decision-making.',
        `1. Rating System Limitation
A key feature I wanted to implement was a user-based rating system for venues. However, the API only permits venue owners to modify the rating of their own listings, which made a universal rating system unfeasible. Rather than removing the concept entirely, I opted to implement a local rating system—allowing logged-in users to rate venues for their own reference. These ratings are stored locally and visible only to the user, preserving the experience of interaction and evaluation without violating API constraints.`,
`2. Username Editing
Another limitation was the inability to update usernames via the API. To maintain a consistent and bug-free user experience, I decided to remove the username editing feature altogether. This avoided unnecessary confusion and ensured the profile editing functionality remained smooth and reliable.`,
`3. Admin Bio Section
Initially, I planned to include a bio section for Admin (Venue Manager) profiles to provide more personality and context for each venue owner. However, since most users in the provided API dataset did not include bios, the section would often appear empty. To maintain a clean and meaningful design, I chose to eliminate the bio concept entirely.`,
`4. Hero Section Video on Homepage
To add a “wow” factor on the homepage, I designed a Hero section featuring a background video to create an immersive first impression. Unfortunately, due to transition effects and performance limitations, the video playback became laggy. As this issue emerged late in the development process, there was not enough time for a full optimization or redesign. Ultimately, I chose to keep the video despite the performance issue, accepting the trade-off to preserve the visual intent of the homepage.`,
      ],
      learnings: [
        "Adapting Design to API Constraints", "Creative Problem-Solving", "Practical Use of React and React Router", "Design-Development Consistency"
      ],
      dateCompleted: "May 2025",
      duration: "6 Weeks"
    }
  };