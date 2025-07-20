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
    id: 'location Tracker',
    title: "TrackSync - Location Tracker",
    description: `


A real-time device tracking app that shows where devices are on a map instantly. Built with Node.js and Express.js on the backend, using Socket.IO to keep everything connected and updating in real-time between the app and users.
`,
  
    githubLink: "https://github.com/keshrinandan99/Imaginary",
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
    id: 'location Tracker',
    title: "TrackSync - Location Tracker",
    description: `A live device tracking system utilizing WebSockets for instant location updates.
• Engineered a real-time location tracking system using Node.js, Express.js, and Socket.IO for bidirectional communication.
• Integrated Leaflet.js and OpenStreetMap to display live device locations on an interactive map interface.
• Developed client-side geolocation capabilities to send real-time latitude and longitude data to the server via WebSockets.`,
    liveLink: "https://donezo-theta.vercel.app/",
    githubLink: "https://github.com/UmangAgarwal257/Donezo",
    video: "/videos/donezo.mp4",
    image: '/images/donezo.png',
    tags: [
      "Next.js",
      "Tailwind CSS",
      "Express.js",
      "Node.js",
      "TypeScript",
      "Aceternity UI",
      "Resend",
      "Node Cron"
    ],
  },
  {
    id: 'NikeX Landing',
    title: "Nike UI Clone",
    description: "A Nike UI clone made with Tailwind CSS is a visually modern web project that replicates the core design and layout of the Nike website. It employs Tailwind's utility-first CSS classes for fast and consistent styling, resulting in a clean interface and responsive design.",
    liveLink: "https://satya-check.vercel.app/",
    githubLink: "https://github.com/21prnv/SatyaCheck",
    video: "/videos/satya-check.mp4",
    image: '/images/satyacheck.png',
    tweetUrl: "https://x.com/code_kartik/status/1901635520838639710",
    tags: [
      "React",
      "Tailwind CSS",
      "JS",
      "Vercel",
    ],
  },
  
  {
    id: 'learnx',
    title: "LearnX",
    description: "LearnX is a comprehensive course marketplace platform that seamlessly connects educators with learners. Built on the MERN stack with TypeScript, it features secure user authentication, streamlined course management, and integrated payment processing through Razorpay. The platform emphasizes user experience with intuitive navigation, responsive design, and robust content delivery, making online education accessible and engaging.",
    liveLink: "https://learnx-frontend.onrender.com/",
    githubLink: "https://github.com/KartikLabhshetwar/LearnX",
    image: '/images/learnx.png',
    tweetUrl: "https://x.com/code_kartik/status/1832882108316176563",
    tags: [
      "MERN",
      "Zod",
      "JWT",
      "TypeScript",
      "bcryptjs",
      "Tailwind CSS",
      "Razorpay API"
    ],
  },
  {
    id: 'taskmaster',
    title: "TaskMaster",
    description: "TaskMaster redefines task management with its dynamic Kanban board implementation and detailed list views. This full-stack application combines the flexibility of Next.js with the reliability of MongoDB to deliver a seamless task organization experience. Features include real-time updates, drag-and-drop functionality, and customizable workflows, all wrapped in an elegant, responsive interface that prioritizes productivity and user experience.",
    liveLink: "https://task-management-dashboard-zeta.vercel.app/",
    githubLink: "https://github.com/KartikLabhshetwar/task-management-dashboard",
    image:'/images/taskmaster.png',
    // tweetUrl: "https://x.com/code_kartik/status/1887125453359788069",
    tags: ["Next.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
  },
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id)
}
