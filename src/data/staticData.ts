import bpEstateImg from "@/assets/bp-estate.png";
import dinoMindImg from "@/assets/dinomind.png";
import mockvenImg from "@/assets/mockven.png";
import bpinterviewImg from "@/assets/bpinterview.png";
import picklepediaImg from "@/assets/picklepedia.png";

export const heroWords = [
  "precision",
  "creativity",
  "adaptability",
  "aesthetics",
];

export const workProjects = [
  {
    id: "dinomind",
    title: "dinomind - Gemini Nano powered Chrome Extension",
    src: dinoMindImg,
    highlighted: true,
    tags: [
      "typescript",
      "chrome extension",
      "gemini nano ai",
      "redux",
      "tailwind css",
      "radix-ui",
      "vite",
      "crxjs",
      "ai prompting",
    ],
    body: "Led the AI integration into the extension, implementing Gemini Nano AI for personalized recommendations. Designed and developed the UI/UX, creating an intuitive and visually appealing side panel interface with Tailwind CSS and Radix UI. Worked on state management using Redux, ensuring smooth interactions and efficient data handling. Collaborated with a mentor to refine the project structure, adopting best practices for reusable and scalable components. Focused on performance, accessibility, and user experience, ensuring seamless Chrome API integration and offline content functionality.",
    githubLink: "https://github.com/Bhdrpkcn/extension_app",
    liveLink: "",
    videoLink:
      "https://www.youtube.com/watch?v=bcCTZNDeJqg&ab_channel=Bahad%C4%B1rPekcan",
    blogLink:
      "https://dev.to/bhdrpkcn/chrome-built-in-ai-challenge-building-an-extension-with-gemini-nano-ai-that-changes-faster-than-me-462h",
  },
  {
    id: "bpEstate",
    title: "bp-Estate",
    src: bpEstateImg,
    highlighted: false,
    tags: [
      "typescript",
      "next js",
      "authentication",
      "redux",
      "tailwind css",
      "MongoDB",
    ],
    body: "bpEstate is a full-stack real estate platform built with Next.js for performance and scalability, featuring property search, listings, and user authentication via NextAuth with Google login. The UI, designed with Tailwind CSS, includes dynamic animations such as a mouse-following background effect on desktop and a subtle pulse on mobile. It uses Zustand/Redux for state management, Cloudinary for media storage, and MongoDB with Mongoose for backend data handling. Optimized with SSR, lazy loading, and API caching, the app is fully responsive. Hosted on Vercel with GitHub CI/CD, it demonstrates expertise in modern UI/UX and full-stack development.",
    githubLink: "https://github.com/Bhdrpkcn/bp-estate",
    liveLink: "https://bp-estate.vercel.app/",
    videoLink: "",
    blogLink: "",
  },
  {
    id: "mockven",
    title: "mockven",
    src: mockvenImg,
    highlighted: false,
    tags: [
      "typescript",
      "chrome extension",
      "gemini nano ai",
      "redux",
      "tailwind css",
      "radix-ui",
      "vite",
      "crxjs",
      "ai prompting",
    ],
    body: "Mockven is a clone of the software consulting and development company 'Mobven'. It is built to showcase my front-end web development skills. The project includes features such as responsive navigation, dynamic content rendering, and theme management. This project was initially started as part of my application for an internship at Mobven. Despite not securing the internship position, I am committed to completing what I started to further enhance my skills and demonstrate my capabilities",
    githubLink: "https://github.com/Bhdrpkcn/mockven",
    liveLink: "https://mockven.netlify.app/",
    videoLink: "",
    blogLink: "",
  },
  {
    id: "bp-interview",
    title: "bp-interview",
    src: bpinterviewImg,
    highlighted: false,
    tags: [
      "typescript",
      "redux",
      "tailwind css",
      "radix-ui",
      "interview",
      "export pdf",
      "mobile compabile",
    ],
    body: "I built a Frontend Interview Quiz App using Next.js, TypeScript, Redux, and Tailwind CSS to help developers prepare for technical interviews. The app dynamically analyzes quiz results and generates a PDF summary using jsPDF, allowing users to download and share their scores directly via WhatsApp. I focused on state management (Redux), performance optimization, and real-world data analysis. This project strengthened my skills in dynamic UI generation, file handling, and mobile-friendly design. Through this, I learned efficient data structuring, logic-driven UI updates, and debugging techniques—key skills for frontend development in production-ready applications. 🚀",
    githubLink: "https://github.com/Bhdrpkcn/bp-interview",
    liveLink: "https://bp-interview.vercel.app/",
    videoLink: "",
    blogLink: "",
  },
  {
    id: "picklepedia",
    title: "picklepedia",
    src: picklepediaImg,
    highlighted: false,
    tags: [
      "react",
      "git",
      "github pages",
      "css",
      "javascript",
      "react router",
      "api fetching",
      "filtering",
      "url params",
      "reusable components",
    ],
    body: "This portfolio project was one of my earlier steps into React and modern front-end development. At this stage, I was still solidifying my understanding of React components, state management, and UI logic. This project helped me gain hands-on experience with Git and GitHub Pages for deployment, teaching me the fundamentals of version control, committing, and pushing changes efficiently. Styling was done entirely with CSS, where I built a structured design system, focusing on component reusability, especially with the card component. It also introduced me to API calls (my very first!), URL parameters for response filtering, and implementing a structured filtering logic, enhancing my ability to work with dynamic data.",
    githubLink: "https://github.com/Bhdrpkcn/picklepedia",
    liveLink:
      "https://bhdrpkcn.github.io/picklepedia/#/?page=1&name=&status=&species=&gender=",
    videoLink: "",
    blogLink: "",
  },
];
