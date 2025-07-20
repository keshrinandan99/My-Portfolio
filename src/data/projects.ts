import { Project } from '@/types/project'

export const projects: Project[] = [
  {
    id: 'imaginary',
    title: "Imaginfy AI",
    description: `
  Imaginary is an AI-powered web application that provides a suite of intelligent tools for advanced image manipulation. It empowers users to effortlessly perform complex editing tasks such as:\n
   * Image Restoration: Repairing and enhancing old or damaged photos.\n   * Generative Fill: Expanding images or adding new elements with AI.\n   * Object Removal: Seamlessly deleting unwanted objects or imperfections.\n   * Object Recolor: Changing the color of specific items within an image.\n   * Background Removal: Isolating subjects by removing the background.\n`,
  liveLink: "https://imaginary-woad.vercel.app/",
    githubLink: "https://github.com/keshrinandan99/Imaginary",
    // video:'/videos/mind-mentor.mp4',
    image: '/images/imaginary.png',
   
    tags: [
      "Next.js",
      "Clerk",
      "Cloudinary AI",
      "Tailwind CSS",
      "TypeScript",
      "shadcn/ui",
    ],
  },
  {
    id: 'cine-match',
    title: "CineMatch-Recommendation System",
    description: `


Built a movie recommendation app that suggests films based on what you like using machine learning and data from 5,000+ movies. Used Python to clean and process all the movie data, then applied NLP techniques to understand movie similarities. Created a simple web app with Streamlit where users can get instant movie recommendations in under half a second. The whole project covers everything from data handling to building a working app that actually helps people find their next favorite movie. Great example of turning raw data into something useful and user-friendly.
`,
  
    githubLink: "https://github.com/keshrinandan99/Movie-Recommender-System",
     video:'/videos/movierecommender.mp4',
    image: '/images/imaginary.png',
   
    tags: [
      "Python",
      "NLP",
      "StreamLit",
      "Sci-kit",
    
    ],
  },
 
  {
    id: 'Nike-Landing',
    title: "Nike-Landing Page",
    description: "A Nike UI clone made with Tailwind CSS is a visually modern web project that replicates the core design and layout of the Nike website. It employs Tailwind's utility-first CSS classes for fast and consistent styling, resulting in a clean interface and responsive design.",
    liveLink: "https://landing-page-roan-eta.vercel.app/",
    githubLink: "https://github.com/keshrinandan99/Landing-page",
    video: "/videos/nike-landing.mp4",
    image: '/images/satyacheck.png',
   
    tags: [
      "React",
      "Tailwind CSS",
      "JS",
      "Vercel",
    ],
  },
  {
    id: 'tracksync',
    title: "TrackSync - Location Tracker",
    description: "A real-time device tracking system leveraging WebSocket technology for instant location updates and live monitoring capabilities. Built with Node.js, Express.js, and Socket.IO to enable bidirectional communication between clients and server for seamless real-time data transmission. Features an interactive map interface powered by Leaflet.js and OpenStreetMap that displays live device locations with continuous updates. Implements client-side geolocation capabilities using the Geolocation API to capture and transmit precise latitude and longitude coordinates via WebSockets. The system provides instant location synchronization, enabling real-time tracking and monitoring of multiple devices simultaneously with minimal latency.",
    // liveLink: "https://learnx-frontend.onrender.com/",
    githubLink: "https://github.com/keshrinandan99/TrackSync-Location-Tracker",
    // image: '/images/learnx.png',
    video:'/videos/tracksync.mp4',
 
    tags: [ 

      "Node.js",
      "Express.js",
      "Socket.IO",
      "Geolocation API",
  
    ],
  },
  
  {
    id: 'playpulse',
    title: "PlayPulse - Media Streaming Platform",
    description: "A scalable backend solution for video streaming platforms built with Node.js, Express.js, and MongoDB following RESTful API principles. Features secure JWT-based authentication with Bcrypt encryption and optimized MongoDB schemas for efficient data handling. Integrated Multer for seamless file uploads and Cloudinary for reliable cloud-based video and thumbnail storage. The system provides robust user authentication, access control, and media management capabilities. Designed with modern web technologies to ensure scalability, security, and efficient handling of video content and user interactions.",
    // liveLink: "https://learnx-frontend.onrender.com/",
    githubLink: "https://github.com/keshrinandan99/-PlayPulse---Media-Streaming-Platform-Backend-",
    // image: '/images/learnx.png',
 
    tags: [
      "Node.js",
      "Express.js",
      "JWT",
      "Bcrypt",
      "Multer",
      "Cloudinary",
      " RESTful APIs"
    ],
  },
  
  {
    id: 'taskmanager',
    title: "TaskManager",
    description: "A comprehensive team task management system featuring separate admin and user dashboards for efficient task coordination within teams. The platform provides administrators with powerful oversight tools for task assignment, delegation, and team management, while users have access to an intuitive interface for task completion and progress tracking. Includes integrated todo functionality and complete CRUD operations for comprehensive task lifecycle management. The dual-dashboard architecture ensures role-based access and optimized workflows for different user types. Designed to streamline team collaboration, enhance productivity, and provide centralized visibility into project progress and task distribution across team members.",

    // liveLink: "https://task-management-dashboard-zeta.vercel.app/",
    githubLink: "https://github.com/keshrinandan99/Task-Management/tree/main",
    image:'/images/taskManager.png',
    // tweetUrl: "https://x.com/code_kartik/status/1887125453359788069",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "SchadCN"],
  },
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id)
}
