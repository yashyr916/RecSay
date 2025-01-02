import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

import naukri from "../assets/naukri.png";
import monster from "../assets/monster.png";
import linkedin from "../assets/linkedin.png";
import indeed from "../assets/indeed.png";
import shine from "../assets/shine.png";
import workday from "../assets/workday.png";
import Glassdoor from "../assets/Glassdoor.png";
import apna from "../assets/apna.png";
import adhaa from "../assets/adhaa.png";
import ichorr from "../assets/ichorr.png";
import HAID from "../assets/HAID.png";
import sha from "../assets/sha.png";

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "2",
    title: "About Us",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "Recruiters",
    url: "https://docs.google.com/forms/d/1jbJADiP0AUDZm6b3VwoEez4PgcGNkpr7ACtmKPR-G64/edit?usp=forms_home&ths=true",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Employers",
    url: "https://docs.google.com/forms/d/1ZUWiyTr5-VS9_sEJr5zm0Uk80orwagLnzavTgoDnAzQ/edit?usp=forms_home&ths=true",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [ichorr, HAID, adhaa, sha];

export const brainwaveServices = [
  "Less Cost Per Hire",
  "Minimum Time to Hire",
  "Recruitment Funnel Analytics",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Collaboration & Feedback",
    text: "Employers can provide feedback on candidates and request tailored updates. The platform tracks progress and enables recruiters to focus on refining matches based on employer preferences.",
    date: "Jan 2025",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Hiring Efficiency",
    text: "By centralizing and organizing the job matching process, RecSay ensures faster, more effective hiring while reducing wasted recruiter efforts and meeting employer expectations efficiently.",
    date: "Jan 2025",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Job Grouping",
    text: "RecSay consolidates job postings with similar roles, responsibilities, skills, CTC, and work experience requirements into unified categories. This avoids duplication and streamlines the process.",
    date: "Jan 2025",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Recruiter Matching",
    text: "Recruiters are assigned specific job categories based on their expertise. Each recruiter can focus on sourcing candidates for multiple companies hiring for similar roles, maximizing their efforts and reducing redundancies.",
    date: "Jan 2025",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "With smart automation and top-notch process, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Enhanced Collaboration",
    text: collabText,
  },
  {
    id: "1",
    title: "Increased Earnings",
  },
  {
    id: "2",
    title: "Quick Profile Sharing",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "naukri",
    icon: naukri,
    width: 38,
    height: 32,
  },
  {
    id: "1",
    title: "monster",
    icon: monster,
    width: 38,
    height: 32,
  },
  {
    id: "2",
    title: "linkedin",
    icon: linkedin,
    width: 38,
    height: 32,
  },
  {
    id: "3",
    title: "indeed",
    icon: indeed,
    width: 38,
    height: 32,
  },
  {
    id: "4",
    title: "workday",
    icon: workday,
    width: 38,
    height: 32,
  },
  {
    id: "5",
    title: "Glassdoor",
    icon: Glassdoor,
    width: 38,
    height: 32,
  },
  {
    id: "6",
    title: "Shine",
    icon: shine,
    width: 38,
    height: 32,
  },
  {
    id: "7",
    title: "apna",
    icon: apna,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "Small businesses or startups with occasional hiring needs.",
    price: null,
    features: [
      "Access to a limited number of recruiters",
      "Standard candidate matching",
      "Recruiter analytics, reporting and Email support",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Mid-sized businesses with frequent hiring requirements.",
    price: null,
    features: [
      "Access to an expanded pool of grouped recruiters",
      "Dedicated account manager for support, consultation for recruitment strategies.",
      "Enhanced recruiter analytics and reporting",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Large-scale enterprises with high-volume hiring needs.",
    price: null,
    features: [
      "Priority access to top recruiters and tailored candidate pipelines.",
      "Advanced data-driven insights and hiring trends",
      "24/7 premium support with an assigned team.",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Enhanced Efficiency",
    text: "The platform enables recruiters to create a pipeline of candidates for grouped job roles, streamlining the hiring process. This allows recruiters to manage multiple positions more effectively.s quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Advanced Filtering",
    text: "RecSay incorporates advanced filtering options that allow recruiters to quickly narrow down candidate profiles based on specific job requirements and qualifications, making the selection process more targeted.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Client Satisfaction",
    text: "RecSay is designed to help recruiters meet client demands efficiently. By grouping job listings and streamlining candidate pipelines, the platform aims to improve overall client satisfaction and retention",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Fast responding",
    text: "The app features a modern user interface with intuitive navigation, making it easy for both recruiters and job seekers to use. Enhanced elements like icons, emojis, and animations improve user experience.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Multiple Uploads",
    text: "The platform allows recruiters to upload multiple resumes and job descriptions, making it easier to manage various job openings simultaneously. This feature simplifies the recruitment process and saves time.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Growing Businesses",
    text: "RecSay is built to accommodate businesses of all sizes, from startups to large enterprises. As companies grow and their recruitment needs change, the platform can scale to support increased hiring demands without compromising performance.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "https://x.com/HiRecsay",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "https://www.instagram.com/_rec_say/",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "https://www.facebook.com/HiRecSay",
  },
];
