import Holidaze from "../assets/img/projects/Holidaze.png";
import Snazzy from "../assets/img/projects/Snazzy.png";
import Nexora from "../assets/img/projects/Nexora.png";
import Dealery from "../assets/img/projects/Dealery.png";

export const ProjectData = [
  {
    id: 1,
    title: "Snazzy - CSS Frameworks",
    Media: {
      url: Snazzy,
      alt: "Desktop and mobile screenshot of the Snazzy Web Application",
      caption: "Desktop and mobile screenshot of the Snazzy Web Application",
    },
    teaserDescription:
      "Responsive social media platform built with Tailwind CSS.",
    description:
      "Snazzy is a social media application interface developed as a part of the CSS Frameworks Course Assignment. This project was built using the CSS Framework Tailwind CSS to create a responsive and visually appealing design across various devices. This application includes an authentication page, a feed page and a profile page. While the pages and data are all static, the project demonstrates the use of Tailwind CSS for styling.",
    techStack: ["HTML", "Tailwind CSS", "JavaScript", "GitHub Pages"],
    liveLink:
      "https://henrikleutscher.github.io/FED2-CSSFrameworksCA-HenrikLeutscher/",
    repoLink:
      "https://github.com/HenrikLeutscher/FED2-CSSFrameworksCA-HenrikLeutscher",
  },
  {
    id: 2,
    title: "Nexora - JavaScript Frameworks",
    Media: {
      url: Nexora,
      alt: "Desktop and mobile screenshot of the Nexora Web Application",
      caption: "Desktop and mobile screenshot of the Nexora Web Application",
    },
    teaserDescription:
      "React-Based online store with API integration and state management.",
    description:
      "Nexora is an online shop developed as a part of the JavaScript Frameworks Course Assignment. The project was built using React and TypeScript, focusing on creating a more dynamic and interactive user experience through component-based architecture, client side routing, state management, API integration and a responsive design across various devices. Users can browse products fetched from an API, view the details for each product, search for desired products and manage their shopping cart. ",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "Netlify",
    ],
    liveLink: "https://fed2-jsframeworks-ca.netlify.app/",
    repoLink: "https://github.com/HenrikLeutscher/online-shop-jsframeworks-ca",
  },
  {
    id: 3,
    title: "Holidaze - Project Exam 2",
    Media: {
      url: Holidaze,
      alt: "Desktop and mobile screenshot of the Holidaze Web Application",
      caption: "Desktop and mobile screenshot of the Holidaze Web Application",
    },
    teaserDescription:
      "Modern venue booking platform with customer and manager features.",
    description:
      "Holidaze is a booking platform developed as a part of the Project Exam 2 using Vite, React and TypeScript. The application allows users to register, login, browse available venues, view venue detail page. Users may also register as a venue manager, which allows them to create, update, delete venues and see upcoming bookings for their venues. This project demonstrates API integration, pagination, CRUD operations, responsive design and a user focused interface developed with Tailwind CSS following modern frontend development practices.",
    techStack: [
      "React",
      "typescript",
      "Tailwind CSS",
      "React Router",
      "V2 Noroff API",
      "vite",
    ],
    liveLink: "https://pe2-henrikleutscher-holidaze.netlify.app/",
    repoLink: "https://github.com/HenrikLeutscher/PE2-Holidaze-HenrikLeutscher",
  },
  {
    id: 4,
    title: "Dealery - Semester Project 2",
    Media: {
      url: Dealery,
      alt: "Desktop and mobile screenshot of the Dealery auction platform",
      caption: "Desktop and mobile screenshot of the Dealery auction platform",
    },
    teaserDescription:
      "Auction platform featuring bidding, listings and user profiles.",
    description:
      "Dealery is an auction platform developed as part of Semester Project 2 using HTML, JavaScript and Tailwind CSS. Visitors can browse and search auction listings, while registered users can create, edit and delete their own listings, place bids using credits and manage their profiles. New users receive an initial credit balance of 1,000 credits. The application integrates with the Noroff API (V2) and demonstrates authentication, API integration, CRUD operations, search functionality and responsive frontend development using Vanilla JavaScript.",
    techStack: ["HTML", "CSS", "Tailwind CSS", "JavaScript"],
    liveLink: "https://dealerysp2.netlify.app/",
    repoLink: "https://github.com/HenrikLeutscher/FED2-SemesterProject2",
  },
];
