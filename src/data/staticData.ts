import bpEstateImg from "@/assets/bp-estate.png";
import dinoMindImg from "@/assets/dinomind.png";
import coffeeClubImg from "@/assets/coffeeclub.png";
import mockvenImg from "@/assets/mockven.png";
import bpinterviewImg from "@/assets/bpinterview.png";
import picklepediaImg from "@/assets/picklepedia.png";

import { WorkCard } from "@/types/workType";

export const heroWords = [
  "precision",
  "creativity",
  "adaptability",
  "aesthetics",
];

export const staticLinks = {
  github: "https://github.com/Bhdrpkcn?tab=repositories",
  linkedIn: "https://www.linkedin.com/in/bhdrpkcn/",
};

export const workProjects: WorkCard[] = [
  {
    id: "coffeeclub",
    title: "Coffee Club",
    src: coffeeClubImg,
    highlighted: true,
    tags: [
      "swift UI",
      "MVVM Architecture",
      "NestJS",
      "MikroORM",
      "typescript",
      "tailwind css",
      "radix-ui",
    ],
    body: "For some time, I had been exploring which technologies to focus on in order to expand my skill set and become productive within the Apple ecosystem. Since I was already familiar with type safety and declarative programming, I decided that developing applications with SwiftUI would be the most natural and fastest way to learn. However, technologies evolve so rapidly nowadays that encountering a new version before fully understanding why the previous one changed forces us to completely rethink our learning approach. Because of that, I knew I first needed to build a solid foundation — a well-structured backend and a simple yet functional frontend.",
    body_tr:
      "Bir süredir beceri yelpazemi genişletmek ve Apple ekosisteminde de üretken olabilmek için hangi teknolojilere odaklanmam gerektiğini araştırıyordum. Tip güvenliği ve deklaratif yapıya hâlihazırda aşina olduğum için, SwiftUI ile uygulama geliştirmenin hem doğal hem de hızlı bir öğrenme süreci sunacağına karar verdim. Ancak günümüz teknolojileri öylesine hızlı evriliyor ki, bir yapının neden değiştiğini tam kavrayamadan yeni sürümüyle karşılaşmak, öğrenme yöntemimizi baştan şekillendiriyor. Bu nedenle, sağlam bir temele oturmuş backend ile işlevsel ama yalın bir frontend yapısı kurmam gerektiğini biliyordum.",
    details: [
      {
        image: coffeeClubImg,
        text: "On the backend side, I built a modular architecture based on NestJS and MikroORM. Each domain — order, product, payment, loyalty, and notification — is isolated with its own controller–service–module structure. The authentication process operates securely through JWT and Google OAuth2 integration.",
        text_tr:
          "Backend tarafında, NestJS ve MikroORM tabanlı modüler bir mimari oluşturdum. Her domain — sipariş, ürün, ödeme, sadakat ve bildirim — kendi controller–service–module yapısına sahip olacak şekilde izole edildi. Kimlik doğrulama süreci ise JWT ve Google OAuth2 entegrasyonuyla güvenli biçimde çalışıyor.",
      },
      {
        image: coffeeClubImg,
        text: "For the frontend, I developed a user panel built on Vite + React + TypeScript, supported by TailwindCSS, Radix UI, and React Query, following a component-driven and modular architecture. This approach allowed me to achieve both high readability and easy scalability on the UI side.",
        text_tr:
          "Frontend tarafında, Vite + React + TypeScript teknolojilerini temel alarak; TailwindCSS, Radix UI ve React Query destekli, component-driven ve modüler bir kullanıcı paneli geliştirdim. Bu yapı sayesinde UI tarafında hem yüksek okunabilirlik hem de kolay genişletilebilirlik elde ettim.",
      },
      {
        image: coffeeClubImg,
        text: "Later, as I transitioned to SwiftUI, my confidence grew quickly with early experiments—until I discovered the MVVM architecture and realized how scattered my initial codebase actually was. I had already sensed a need for a more modular structure, but I didn’t yet have the architectural experience to build it properly. With that awareness, I began a comprehensive refactor process focused on state management, SwiftUI lifecycle, binding–publisher data flow, and dependency injection principles.",
        text_tr:
          "Ardından SwiftUI tarafına geçtiğimde, ilk denemelerde hızla ilerlesem de zamanla MVVM mimarisi ile tanıştığımda kodlarımın aslında ne kadar dağınık olduğunu fark ettim. İçten içe modüler bir yapıya ihtiyaç duyduğumu hissediyordum, ancak bunu doğru kuracak altyapı tecrübem henüz oluşmamıştı. Bu farkındalıkla birlikte, state yönetimi, SwiftUI lifecycle, binding–publisher veri akışı ve dependency injection prensiplerini temel alan kapsamlı bir refactor sürecine başladım.",
      },
    ],
    links: [
      {
        type: "githubProjectButton",
        url: "https://github.com/orgs/coffee-hopper/repositories",
      },
      {
        type: "youtubeProjectButton",
        url: "https://www.youtube.com/watch?v=bcCTZNDeJqg&ab_channel=Bahad%C4%B1rPekcan",
      },
      {
        type: "liveProjectButton",
        url: "https://www.youtube.com/watch?v=bcCTZNDeJqg&ab_channel=Bahad%C4%B1rPekcan",
      },
    ] as const,
  },
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
    links: [
      {
        type: "githubProjectButton",
        url: "https://github.com/Bhdrpkcn/extension_app",
      },
      {
        type: "youtubeProjectButton",
        url: "https://www.youtube.com/watch?v=bcCTZNDeJqg&ab_channel=Bahad%C4%B1rPekcan",
      },
      {
        type: "blogProjectButton",
        url: "https://dev.to/bhdrpkcn/chrome-built-in-ai-challenge-building-an-extension-with-gemini-nano-ai-that-changes-faster-than-me-462h",
      },
    ] as const,
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

    links: [
      {
        type: "githubProjectButton",
        url: "https://github.com/Bhdrpkcn/bp-estate",
      },
      {
        type: "liveProjectButton",
        url: "https://bp-estate.vercel.app/",
      },
    ] as const,
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

    links: [
      {
        type: "githubProjectButton",
        url: "https://github.com/Bhdrpkcn/mockven",
      },
      {
        type: "youtubeProjectButton",
        url: "https://www.youtube.com/watch?v=bcCTZNDeJqg&ab_channel=Bahad%C4%B1rPekcan",
      },
      {
        type: "liveProjectButton",
        url: "https://mockven.netlify.app/",
      },
    ] as const,
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

    links: [
      {
        type: "githubProjectButton",
        url: "https://github.com/Bhdrpkcn/bp-interview",
      },
      {
        type: "youtubeProjectButton",
        url: "https://www.youtube.com/watch?v=bcCTZNDeJqg&ab_channel=Bahad%C4%B1rPekcan",
      },
      {
        type: "liveProjectButton",
        url: "https://bp-interview.vercel.app/",
      },
    ] as const,
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

    links: [
      {
        type: "githubProjectButton",
        url: "https://github.com/Bhdrpkcn/picklepedia",
      },
      {
        type: "liveProjectButton",
        url: "https://bhdrpkcn.github.io/picklepedia/#/?page=1&name=&status=&species=&gender=",
      },
    ] as const,
  },
];
