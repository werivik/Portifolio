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
          caption:"Homepage of the e-commerce platform showcasing the modern product grid and navigation"
        },
        {
          url: "/public/media/ecommerce/homepage3.png",
          caption: "Homepage of the e-commerce platform showcasing the modern product grid and navigation"
        },
        {
          url: "/public/media/ecommerce/products.png",
          caption: "The product page of the e-commerce platform showcasing all products in a grid"
        },
        {
          url: "/public/media/ecommerce/product.png",
          caption: "The product page showing the products image gallery and product information."
        },
        {
          url: "/public/media/ecommerce/cart.png",
          caption: "The shopping cart page displaying the product list on the left and the price on the right."
        },
        {
          url: "/public/media/ecommerce/orderconfirmation.png",
          caption: "The order confirmation page showcasing all the necessary inputs to successfully purchase the listed products."
        },
        {
          url: "/public/media/ecommerce/success.png",
          caption: "The order success page showcasing what the user has purchased."
        },        
        {
          url: "/public/media/ecommerce/contact.png",
          caption: "The contact page showcasing a contact form."
        }
      ],
      technologies: ["React", "CSS Modules", "JavaScript", "Netlify", "HTML", "Noroff API"],
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
      description: "A interactive auction platform that allows users to create listings and place real-time bids",
      detailedDescription: `Aucti is a feature-rich auction web application developed as part of a semester project. Designed to simulate a live bidding environment, Aucti enables users to register, log in, and participate in online auctions in real time. The platform emphasizes user interaction and bidding transparency, offering a seamless experience from listing creation to auction tracking.

Key user-facing features include browsing available auctions, placing competitive bids, and managing personal profiles—including avatar updates and tracking bid history. Registered users can also create, edit, and delete their own auction listings, providing both buyer and seller functionality within the same account system.

Built using HTML, JavaScript, and Tailwind CSS with PostCSS and Autoprefixer, Aucti demonstrates strong fundamentals in front-end development, user authentication, and responsive design. The site offers smooth interactions across various device sizes and includes practical features like bid status updates, listing management, and profile customization to support a complete auction experience.`,
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
      
      technologies: ["PostCSS", "Tailwind CSS", "HTML", "JavaScript", "Netlify", "Noroff API"],
      liveUrl: "https://aucti.netlify.app/",
      githubUrl: "https://github.com/werivik/semester24",
      design: `Aucti’s design blends old-school aesthetics with modern UI principles, aiming to create a unique visual identity that feels both nostalgic and fresh. The overall color palette is grounded in a beige background (#EBEEE9) that provides a warm, retro foundation. Most interactive components - such as cards and containers - are styled in a dark grey tone (#29272F), enhanced with a grainy textured overlay that evokes a vintage, analog feel.

Despite this nostalgic atmosphere, the layout and UI elements are firmly rooted in modern design. Rounded corners, clean sans-serif typography, and interactive button hover states bring a contemporary usability layer to the interface. Action buttons are styled in green (#81AB76) and orange (#D6650F), with hover effects that swap the background and text colors to draw attention and create visual feedback without being disruptive.

The listing cards are intentionally unique, breaking away from standard rectangular formats. Each card is taller than it is wide and features a creative visual twist: the bottom corner appears to be “cut away”, housing a green arrow button that invites users to view the item in more detail. This small but impactful design choice gives Aucti a signature style, making it memorable and engaging.

The entire design is responsive, adapting fluidly across screen sizes, and aims to offer a consistent experience on mobile, tablet, and desktop devices. With its thoughtful mix of classic textures and clean UI elements, Aucti delivers an interface that feels distinctive, expressive, and user-focused.`
      ,
colorScheme: [
  "#EBEEE9", 
  "#29272F", 
  "#81AB76", 
  "#D6650F", 
],
      fonts: [
        "Libre Bodoni Serif"
      ],
      challenges: [
        "First Time using Tailwind CSS",
        "Creating responsive layouts for mobile devices"
      ],
      learnings: [
        "Practical use of Tailwind CSS and PostCSS for scalable styling",
        "Authentication flows with form validation and feedback",
        "Dobbel Check Issues before taking a break"
      ],
      improvements: [
        "Add reusable UI Components",
        "Improve the Styling",
        "Improve scalability and Responsivness"
      ],
      dateCompleted: "December 2024",
      duration: "5 Weeks"
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
          caption: "Homepage of the Booking platform showcasing a hero video and filters and a navbar on top."
        },
        {
          url: "/public/media/venue/homepage2.png",
          caption: "Hotel booking website homepage with search bar for destination, dates, and guests, featuring amenities like breakfast, parking, WiFi, and pet-friendly options."
        },
        {
          url: "/public/media/venue/homepage3.png",
          caption: "Hotel registration page with modern lobby image featuring green chairs and palm plants, promoting account creation for booking benefits and discounts."
        },
        {
          url: "/public/media/venue/homepage4.png",
          caption: "Travel destinations showcase featuring Paris, Santorini, Tokyo, and New York with inspirational travel quote and destination photos."
        },
        {
          url: "/public/media/venue/homepage5.png",
          caption: "Hotel listings section displaying 5-star rated accommodations with prices ranging from $1 to $3000 per night across various locations."
        },
        {
          url: "/public/media/venue/homepage6.png",
          caption: "Holidaze website footer with brand logo, tagline 'Elegance meets Comfort', and navigation links for venues, profile, and about sections"
        },
        {
          url: "/public/media/venue/venues.png",
          caption: "The all venues page showcasing the hotel listings displaying diverse accommodations from budget to luxury, including tropical resorts and modern hotels."
        },
        {
          url: "/public/media/venue/venues2.png",
          caption: "The all venues page showcasing the hotel listings displaying diverse accommodations from budget to luxury, including tropical resorts and modern hotels with pagination controls."
        },
        {
          url: "/public/media/venue/venue.png",
          caption: "Hotel booking website showing venue details page with title, address, description text, pricing at $2750 per night, amenities icons, and login prompt."
        },
        {
          url: "/public/media/venue/venue2.png",
          caption: "Hotel booking website displaying image gallery with main photo of modern multi-story building and thumbnail images, alongside venue title and booking information."
        },  
        {
          url: "/public/media/venue/venue3.png",
          caption: "Hotel booking website showing venue manager profile section with user avatar, creation and update dates, plus amenities list including Wi-Fi, parking, and breakfast options."
        },  
        {
          url: "/public/media/venue/venuecostumer.png",
          caption: "Hotel booking website showing venue manager profile page with beach banner image, profile avatar, rating display, sort dropdown, and grid of venue thumbnail cards."
        },
        {
          url: "/public/media/venue/venueowner.png",
          caption: "Hotel booking website displaying venue manager's portfolio with four property cards showing ratings, titles, locations, and pricing information in grid layout."
        },
        {
          url: "/public/media/venue/venueowner2.png",
          caption: "Hotel booking website registration modal with welcome message, customer signup form containing username, email and password fields, and login button."
        },
        {
          url: "/public/media/venue/register.png",
          caption: "Hotel booking website login modal with customer login form containing email and password fields, login button, and registration link options."
        },  
        {
          url: "/public/media/venue/login.png",
          caption: "User dashboard with sidebar profile section, main content area showing bookings header with sort dropdown, and three booking cards displaying destination images and dates."
        },  
        {
          url: "/public/media/venue/costumerprofile.png",
          caption: "User profile page showing sidebar navigation, two completed booking cards with hotel details and pricing, and edit profile form with avatar and banner URL fields."
        }, 
        {
          url: "/public/media/venue/costumerprofile2.png",
          caption: "Profile page showing user Jacob with his hotel bookings and an edit profile form with avatar and banner URL fields."
        },
        {
          url: "/public/media/venue/venuepopup.png",
          caption: "Booking details modal displaying coastal property image on left, venue information with description and amenities on right, and booking summary with guest count and pricing"
        }, 
        {
          url: "/public/media/venue/registeradmin.png",
          caption: "Admin verification screen with a 4-digit security code input field and verify button on a hotel lobby background."
        },
        {
          url: "/public/media/venue/loginadmin.png",
          caption: "Holidaze login page for venue managers with email and password fields on a hotel lobby background."
        },
        {
          url: "/public/media/venue/adminprofile.png",
          caption: "Venue manager dashboard showing user profile sidebar and grid of managed venues with ratings and a create venue button."
        },
        {
          url: "/public/media/venue/adminprofile2.png",
          caption: "Edit profile page for venue manager with avatar and banner URL input fields and a venue listing preview."
        },
        {
          url: "/public/media/venue/adminpopup.png",
          caption: "Venue details modal showing luxury hotel lobby with venue information, pricing, amenities, and edit/delete options."
        },
        {
          url: "/public/media/venue/edit.png",
          caption: "Edit venue form showing name, description, price, and max guests fields for The Editing Venue"
        },
        {
          url: "/public/media/venue/edit2.png",
          caption: "Media management section displaying venue image URLs with remove buttons, amenity checkboxes, and location fields."
        },
        {
          url: "/public/media/venue/create.png",
          caption: "Create new venue form with progress sidebar, input fields for venue details, amenities selection, and location information."
        },
        {
          url: "/public/media/venue/about.png",
          caption: "Holidaze about page hero section with elegant interior background and company tagline"
        },
        {
          url: "/public/media/venue/about2.png",
          caption: "Holidaze mission statement and core values section showing Trust, Diversity, Sustainability, and Excellence"
        },
        {
          url: "/public/media/venue/about3.png",
          caption: "Holidaze company story section with team photo and founder background information"
        },
        {
          url: "/public/media/venue/about4.png",
          caption: "Holidaze team profiles showing four key staff members with their roles and brief descriptions"
        },
        {
          url: "/public/media/venue/contact.png",
          caption: "Holidaze contact page with location details, contact form, and social media links"
        },
        {
          url: "/public/media/venue/contact2.png",
          caption:  "Holidaze location map showing Baker Street address in London and FAQ section below"
        },                
      ],
      technologies: ["React", "HTML", "JavaScript", "Framer Motion", "CSS Module", "Vite", "Noroff API", "Netlify"],
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