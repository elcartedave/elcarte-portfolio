export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
}

export const projects: Project[] = [
  {
    id: "ics-arms",
    title: "ICS Alumni Relations and Management System (ICS-ARMS)",
    description:
      "A system created for the ICS Alumni of the University of the Philippines Los Baños to manage its alumni, events, and donations.",
    image: "/assets/alumni.png",
    imageAlt: "ICS Alumni Relations and Management System",
    technologies: [
      "Firebase",
      "Next.js",
      "Tailwind",
      "TypeScript",
      "OpenAI API",
      "Google Maps API",
    ],
    githubUrl: "https://github.com/knpabico/CMSC128-A24L-Backend.git",
    demoUrl: "https://ics-arms.vercel.app",
  },

  {
    id: "franchising-dashboard",
    title: "Franchising Company Dashboard",
    description:
      "An AI-powered centralized system used by a franchising company to maintain its franchisees, locate its branches, and provide real time data insights of the company's performance.",
    image: "/assets/franchise.png",
    imageAlt: "Franchising Company Dashboard",
    technologies: [
      "Firebase",
      "Pinecone",
      "OpenAI API",
      "Next.js",
      "Tailwind",
      "Google Maps API",
    ],
    githubUrl: "https://github.com/elcartedave/twfi-dashboard.git",
    demoUrl: "https://twfi-dashboard.vercel.app",
  },
  {
    id: "landas",
    title: "Landas - Iulat, Tugunan, Aksyunan",
    description:
      "A responsive website which gets crowdsourced data of the condition of several roads, streets, and sidewalks. The data gathered are then analyzed using OpenAI API in determining which roads need immediate action from the authorities.",
    image: "/assets/landas.png",
    imageAlt: "Landas Project",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "MongoDB",
      "OpenAI API",
    ],
    githubUrl: "https://github.com/Dreei/sidewalk-frontend",
  },
  {
    id: "labubu-love-guru",
    title: "Labubu Love Guru",
    description:
      "A user authenticated AI chatbot that specializes in giving relationship, self-care advices, and quotes thru a stored database and prompt engineering principles.",
    image: "/assets/labubu.png",
    imageAlt: "Labubu Love Guru",
    technologies: [
      "React",
      "MongoDB",
      "Express",
      "Node.js",
      "Pinecone",
      "OpenAI API",
    ],
    githubUrl: "https://github.com/elcartedave/labubu-ai-chatbot.git",
    demoUrl: "https://labubu-ai-guru.vercel.app",
  },
  {
    id: "sandiwapp",
    title: "Sandiwapp",
    description:
      "This is a mobile application for a student organization which aims to provide a centralized member, applicant, events, and announcements' management system.",
    image: "/assets/sandiwapp.png",
    imageAlt: "Sandiwapp Mobile App",
    technologies: ["Flutter", "Firebase"],
    githubUrl: "https://github.com/elcartedave/sandiwapp.git",
  },
  {
    id: "lolcode-interpreter",
    title: "LOLCode Interpreter",
    description:
      "This is a GUI-based interpreter for the LOLCode programming language. It is able to execute statements written in .lol file. It aims to simulate how interpreters are created",
    image: "/assets/lolcode.jfif",
    imageAlt: "LOLCode Interpreter",
    technologies: ["Python", "LOLCode"],
    githubUrl: "https://github.com/Samoy-ed/LOL_Code_Interpreter",
  },
  {
    id: "givecommit",
    title: "GiveCommit",
    description:
      "GiveCommit is a mobile application designed to facilitate charitable donations by connecting donors with organizations that accept various types of contributions.",
    image: "/assets/give.png",
    imageAlt: "GiveCommit Mobile App",
    technologies: ["Flutter", "Firebase"],
    githubUrl: "https://github.com/addomingo/CMSC-23-2024-GiveCommitr",
  },
  {
    id: "farmtotable",
    title: "FarmToTable",
    description:
      "This is a full stack e-commerce application built to handle selling, keeping sales history, generating sales reports, and management of agricultural products.",
    image: "/assets/farm.png",
    imageAlt: "FarmToTable E-commerce",
    technologies: ["MongoDB", "Express", "React", "Node.js"],
    githubUrl: "https://github.com/elcartedave/ProjectCMSC100",
  },
  {
    id: "putahe-puntahe",
    title: "Putahe Puntahe",
    description:
      "This application was developed to add and manage food establishments, foods, assign, edit, and delete reviews, showcases the mastery of Database Management Systems (DBMS) and Structured Query Language (SQL).",
    image: "/assets/putahe.png",
    imageAlt: "Putahe Puntahe Food App",
    technologies: ["MariaDB", "Express", "React", "Node.js"],
    githubUrl: "https://github.com/eljohnevnglsta/CMSC-127-Final-Project",
  },
  {
    id: "hoppy-froggy",
    title: "Hoppy Froggy",
    description:
      "This game is a platform game in which the sprite jumps on the never ending platforms and only ends when they fall/bumped into predators. It highlights the use of object-oriented programming and it's pillars",
    image: "/assets/hoppy.png",
    imageAlt: "Hoppy Froggy Game",
    technologies: ["Java", "JavaFX"],
    githubUrl: "https://github.com/elcartedave/hoppy-froggy.git",
  },
  {
    id: "diet-problem-solver",
    title: "Diet Problem Solver",
    description:
      "This project is used for computing the optimal servings needed by the customer in a minimum price while maintaining the number of servings needed.",
    image: "/assets/diet.png",
    imageAlt: "Diet Problem Solver",
    technologies: ["R", "Shiny"],
    githubUrl: "https://github.com/elcartedave/diet-problem-solver.git",
  },
];
