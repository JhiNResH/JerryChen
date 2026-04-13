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
  { id: "about",   title: "About"   },
  { id: "work",    title: "Work"    },
  { id: "contact", title: "Contact" },
];

const services = [
  { title: "Full-Stack Developer",  icon: web     },
  { title: "Blockchain Developer",  icon: creator },
  { title: "Smart Contract / DeFi", icon: backend },
  { title: "VC / Research",         icon: mobile  },
];

const technologies = [
  { name: "TypeScript",   icon: typescript },
  { name: "Rust",         icon: rust       },
  { name: "Solidity",     icon: solidity   },
  { name: "React JS",     icon: reactjs    },
  { name: "Next.js",      icon: nextjs     },
  { name: "Node JS",      icon: nodejs     },
  { name: "Python",       icon: python     },
  { name: "Tailwind CSS", icon: tailwind   },
  { name: "MongoDB",      icon: mongodb    },
  { name: "Three JS",     icon: threejs    },
  { name: "Redux",        icon: redux      },
  { name: "JavaScript",   icon: javascript },
  { name: "HTML 5",       icon: html       },
  { name: "CSS 3",        icon: css        },
  { name: "git",          icon: git        },
];

const experiences = [
  {
    title: "R&D Intern",
    company_name: "Fortune Electric Co., Ltd.",
    icon: fortune,
    iconBg: "#383E56",
    date: "Feb 2020 – June 2020",
    points: [
      "Designed power plant components using AutoCAD and SolidWorks.",
      "Organized and processed customer data into the cloud using Python and Excel.",
      "Coordinated with international clients across multiple countries.",
    ],
  },
  {
    title: "Prepared Angel (Volunteer)",
    company_name: "Binance",
    icon: binance,
    iconBg: "#E6DEDD",
    date: "Oct 2022 – Nov 2023",
    points: [
      "Maintained Discord community and organized regular educational events.",
      "Developed Discord bots to automate information retrieval and improve community efficiency.",
    ],
  },
  {
    title: "Frontend Engineer",
    company_name: "Dissect (NFTFI)",
    icon: web,
    iconBg: "#1a1a2e",
    date: "Dec 2023 – Feb 2024",
    points: [
      "Built application webpages using React.js and TailwindCSS.",
      "Collaborated on frontend architecture and component design.",
    ],
  },
  {
    title: "Fellowship",
    company_name: "Wormhole",
    icon: creator,
    iconBg: "#0a0a1a",
    date: "March 2024 – Nov 2024",
    points: [
      "Authored technical research papers on Cross-Chain Interoperability Protocol (CCIP).",
      "Moderated community channels and guided users on cross-chain bridging between Solana and other chains.",
    ],
  },
  {
    title: "Growth Developer Intern",
    company_name: "Perena",
    icon: mobile,
    iconBg: "#1c3a2e",
    date: "July 2024 – Oct 2024",
    points: [
      "Developed responsive frontend interfaces for a stablecoin platform using React and TailwindCSS.",
      "Integrated RESTful APIs to display real-time market data, reducing page load time by 20%.",
    ],
  },
  {
    title: "Founder / CEO",
    company_name: "Sponge (DeFi Startup)",
    icon: backend,
    iconBg: "#0f2027",
    date: "Aug 2024 – June 2025",
    points: [
      "Founded a DeFi startup focused on stablecoin yield optimization; led a team of 4 engineers.",
      "Architected the full-stack application using Rust (backend) and React/Next.js (frontend).",
      "Designed and deployed smart contracts on Solana using the Anchor framework.",
      "Won 1st Place at Jito Grid Hackathon, 1st Place (Taiwan) at Solana Colosseum Breakout, and 2nd Place at Taipei Blockchain Week.",
    ],
  },
  {
    title: "Investment Analyst Intern",
    company_name: "True Phil Venture Capital",
    icon: web,
    iconBg: "#1a2a1a",
    date: "Dec 2025 – Present",
    points: [
      "Conduct market research and thematic analysis across Web3 and emerging frontier tech sectors.",
      "Source high-potential early-stage founders; draft investment memos and competitive landscape maps.",
      "Support due diligence by evaluating product traction, token models, and market size.",
      "Assist with portfolio monitoring and follow-up communication with founders.",
    ],
  },
];

const testimonials = [];

const projects = [
  {
    name: "Sponge",
    description:
      "DeFi stablecoin yield optimization protocol on Solana. 1st Place Jito Grid Hackathon · 1st Place Solana Colosseum Breakout (Taiwan) · 3rd Place (Solayer AVS) · 2nd Place Taipei Blockchain Week · Solana Foundation Grants · Solaris Accelerator Cohort 1.",
    tags: [
      { name: "rust",   color: "blue-text-gradient"  },
      { name: "anchor", color: "green-text-gradient" },
      { name: "solana", color: "pink-text-gradient"  },
    ],
    image: backend,
    source_code_link: "https://github.com/JhiNResH",
  },
  {
    name: "ZKode",
    description:
      "Anonymous GitHub built on zero-knowledge proofs using UniRep protocol. Lets developers contribute code without revealing their identity on-chain. Built at ETH Taipei hackathon.",
    tags: [
      { name: "typescript",    color: "blue-text-gradient"  },
      { name: "solidity",      color: "green-text-gradient" },
      { name: "zero-knowledge",color: "pink-text-gradient"  },
    ],
    image: zkode,
    source_code_link: "https://github.com/JhiNResH/zkode_ETHTaipei",
  },
  {
    name: "SmartReviewHub",
    description:
      "Decentralized review platform — a transparent alternative to Google Maps where users own their reviews as on-chain attestations. 3rd Place at XueDAO Connect Hackathon (Cathay Financial).",
    tags: [
      { name: "react",    color: "blue-text-gradient"  },
      { name: "solidity", color: "green-text-gradient" },
      { name: "web3",     color: "pink-text-gradient"  },
    ],
    image: smartreviewhub,
    source_code_link: "https://github.com/JhiNResH/SmartReviewHub",
  },
  {
    name: "TaskFlow",
    description:
      "Full-stack task management SPA with JWT auth, CRUD operations, priority filtering, and PWA offline support. React + Express + MongoDB + SASS.",
    tags: [
      { name: "react",   color: "blue-text-gradient"  },
      { name: "express", color: "green-text-gradient" },
      { name: "mongodb", color: "pink-text-gradient"  },
    ],
    image: deshop,
    source_code_link: "https://github.com/JhiNResH/web603",
  },
];

export { services, technologies, experiences, testimonials, projects };
