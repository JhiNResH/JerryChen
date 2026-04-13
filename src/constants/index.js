import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  python,
  solidity,
  rust,
  nextjs,
  fortune,
  binance,
  zkode,
  smartreviewhub,
  deshop,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Blockchain Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next.js",
    icon: nextjs,
  },
  {
    name: "Redux",
    icon: redux,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Solidity",
    icon: solidity,
  },
  {
    name: "Rust",
    icon: rust,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
];

const experiences = [
  {
    title: "Research and Development Intern",
    company_name: "Fortune Electric",
    icon: fortune,
    iconBg: "#383E56",
    date: "Feb 2020 - June 2020",
    points: [
      "Used AutoCAD and SolidWorks to design components for power plant systems.",
      "Aggregated and organized customer data into cloud systems using Python and Excel.",
      "Coordinated with international clients across multiple time zones.",
    ],
  },
  {
    title: "Community Angel",
    company_name: "Binance",
    icon: binance,
    iconBg: "#E6DEDD",
    date: "Oct 2022 - Apr 2023",
    points: [
      "Maintained the official Binance Discord community and organized regular educational events.",
      "Developed a Discord bot to automate information retrieval and reduce manual moderation effort.",
    ],
  },
  {
    title: "Full-Stack Web Development",
    company_name: "BCIT — web603 Bootcamp",
    icon: web,
    iconBg: "#383E56",
    date: "2024 - Present",
    points: [
      "Built full-stack SPAs with React, Express, MongoDB, and JWT authentication.",
      "Developed PWA-compliant apps with service workers, responsive layouts, and Bootstrap 4/5.",
      "Applied Redux and Redux Toolkit for state management across multi-component React apps.",
      "Practised agile workflows: feature branches, pull requests, and code reviews on GitHub.",
    ],
  },
];

const testimonials = [];

const projects = [
  {
    name: "TaskFlow",
    description:
      "A full-stack task management SPA with JWT authentication, CRUD operations, priority filtering, and PWA offline support. Built with React, Express, MongoDB, and SASS.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: backend,
    source_code_link: "https://github.com/JhiNResH/web603",
  },
  {
    name: "ZKode",
    description:
      "Anonymous GitHub built on zero-knowledge proofs using UniRep protocol. Lets developers contribute code without revealing their identity on-chain.",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "solidity",
        color: "green-text-gradient",
      },
      {
        name: "zero-knowledge",
        color: "pink-text-gradient",
      },
    ],
    image: zkode,
    source_code_link: "https://github.com/JhiNResH/zkode_ETHTaipei",
  },
  {
    name: "SmartReviewHub",
    description:
      "A decentralized review platform on-chain — a more transparent alternative to Google Maps reviews. Users own their reviews as on-chain attestations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "solidity",
        color: "green-text-gradient",
      },
      {
        name: "web3",
        color: "pink-text-gradient",
      },
    ],
    image: smartreviewhub,
    source_code_link: "https://github.com/JhiNResH/SmartReviewHub",
  },
  {
    name: "Deshop",
    description:
      "A decentralized e-commerce platform enabling peer-to-peer purchases with crypto. Smart contracts handle escrow and settlement without a middleman.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "solidity",
        color: "green-text-gradient",
      },
      {
        name: "ethereum",
        color: "pink-text-gradient",
      },
    ],
    image: deshop,
    source_code_link: "https://github.com/JhiNResH/Deshop",
  },
];

export { services, technologies, experiences, testimonials, projects };
