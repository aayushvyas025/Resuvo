import {
  Briefcase,
  BriefcaseBusiness,
  Download,
  FileText,
  FolderIcon,
  Globe2,
  GraduationCap,
  Laptop,
  LayoutPanelTop,
  Mail,
  MapPin,
  NotebookPen,
  Phone,
  RefreshCw,
  Rocket,
  Sparkles,
  Star,
  User,
} from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";
import dummy_profile from "../assets/dummy_profile.png";

export const images = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200",
    title: "user1",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
    title: "user2",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
    title: "user3",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200",
    title: "user4",
  },
  {
    id: 5,
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    title: "user5",
  },
];

export const features = [
  {
    id: 1,
    title: "AI-Powered Resume Creation",
    icon: <LayoutPanelTop className="size-6 text-indigo-300" />,
    description:
      "Generate professional, personalized resumes with AI-powered content suggestions that highlight your skills, experience, and achievements.",
  },
  {
    id: 2,
    title: "Customizable Professional Templates",
    icon: <NotebookPen className="size-6 text-indigo-300" />,
    description:
      "Choose from beautifully designed templates and customize every section of your resume with an intuitive editor and real-time preview.",
  },
  {
    id: 3,
    title: "Instant PDF Export & Sharing",
    icon: <Download className="size-6 text-indigo-300" />,
    description:
      "Ensures fast load speed, clean code, and high PageSpeed scores.",
  },
];

export const testimonials = [
  {
    id: 1,
    user: "Nayan Rajora",
    image:
      "https://instagram.fbho3-3.fna.fbcdn.net/v/t51.2885-19/474104131_472127082607582_8420408768093609965_n.jpg?_nc_cat=111&_nc_map=urlgen_bucketless&ig_cache_key=GENBQhzeMwynZa0BAO3fzU0pTdt0bkULAAAB0j-ccb7-5&ccb=7-5&_nc_sid=669407&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=cXKag7RbXR8Q7kNvwGTlLaG&_nc_oc=AdptygyQNUezgJrkzkuNv8mAvyn2wlPSoTkbdvt_w1JAss9UFiDU7_F4aIC2n02EBW8&_nc_zt=24&_nc_ht=instagram.fbho3-3.fna&_nc_ss=7b6a8&_nc_ct=RQosPBUCFQIAAAA&oh=00_AQTOcgr1UbzUjkcse4efjx2VbXBVjQcB2M5cyyagPHmG5g&oe=6AFD208A",
    date: "10 March 2026",
    icon: Array.from({ length: 5 }).fill(
      <Star className="size-4 text-indigo-700" />,
    ),
    review: `"Creating my first professional resume felt overwhelming, but Resuvo made the entire process simple. The AI suggestions helped me present my skills and projects much better."`,
  },
  {
    id: 2,
    user: "Saijal Vyas",
    image:
      "https://instagram.fbho3-3.fna.fbcdn.net/v/t51.82787-19/832527461_18354831505174471_7576051973200890616_n.jpg?_nc_cat=111&_nc_map=urlgen_bucketless&ig_cache_key=GGVcnzHHL8c7nzVBAPhKiUYhiyNpbmNDAQAB0j-ccb7-5&ccb=7-5&_nc_sid=669407&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=VvO-h1mZnIsQ7kNvwF8wZsp&_nc_oc=AdoATbUmcz6qsH87wDGtBIOkWAPQoCXT9JhhDK2yXVZG4fPgnfy0aPMCzwKXXPlFZsg&_nc_zt=24&_nc_ht=instagram.fbho3-3.fna&_nc_gid=2m9KJD4HwVbM9VPOIxcTqA&_nc_ss=7b6a8&_nc_ct=RQosPBUCFQIAAAA&oh=00_AQTxhOz0yxdOw6xxlzuy_q3iedx4B9dttJbMTVID-X_9kw&oe=6AFCF1FE",
    date: "25 Oct 2026",
    icon: Array.from({ length: 5 }).fill(
      <Star className="size-4 text-indigo-700" />,
    ),
    review: `"I really like how easy it is to customize my resume with Resuvo. The templates look clean and professional, and the live preview makes editing so much easier."`,
  },
  {
    id: 3,
    user: "Raj Kumar",
    image:
      "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    date: "10 Nov 2026",
    icon: Array.from({ length: 5 }).fill(
      <Star className="size-4 text-indigo-700" />,
    ),
    review: `"Resuvo saves me so much time when updating my resume. From AI-powered content suggestions to downloading a polished PDF, everything feels smooth and straightforward."`,
  },
];

export const carrierOptions = [
  {
    id: 1,
    title: "Students",
    icon: <GraduationCap className="text-indigo-600 size-6" />,
  },
  {
    id: 2,
    title: "Freshers",
    icon: <Rocket className="text-indigo-600 size-6" />,
  },
  {
    id: 3,
    title: "Professionals",
    icon: <BriefcaseBusiness className="text-indigo-600 size-6" />,
  },
  {
    id: 4,
    title: "Carrier Changers",
    icon: <RefreshCw className="text-indigo-600 size-6" />,
  },
  {
    id: 5,
    title: "Freelancers",
    icon: <Laptop className="text-indigo-600 size-6" />,
  },
];

export const dummyResumeData = [
  {
    // ----------------------------------------------------- Resume 1 ------------------------------------------------------
    personal_info: {
      full_name: "Alex Smith",
      email: "alex@example.com",
      phone: "0 123456789",
      location: "NY, USA",
      linkedin: "https://www.linkedin.com",
      website: "https://www.example.com",
      profession: "Full Stack Developer",
      image: dummy_profile,
    },
    _id: "68d2a31a1c4dd38875bb037e",
    userId: "68c180acdf1775dfd02c6d87",
    title: "Alex's Resume",
    public: true,
    professional_summary:
      "Highly analytical Data Analyst with 6 years of experience transforming complex datasets into actionable insights using SQL, Python, and advanced visualization tools. ",
    skills: [
      "JavaScript",
      "React JS",
      "Full Stack Development",
      "Git",
      "GitHub",
      "NextJS",
      "Express",
      "NodeJS",
      "TypeScript",
    ],
    experience: [
      {
        company: "Example Technologies.",
        position: "Senior Full Stack Developer",
        start_date: "2023-06",
        end_date: "Present",
        description:
          "Architected, developed, and deployed innovative full-stack applications at Example Technologies.\ncreating robust back-end systems and intuitive front- end interfaces to deliver meaningful digital experiences ",
        is_current: true,
        _id: "68d2a31a1c4dd38875bb037f",
      },
      {
        company: "Example Technologies.",
        position: "Full Stack Developer",
        start_date: "2019-08",
        end_date: "2023-05",
        description:
          "Engineered and deployed scalable full-stack web applications for Example Technologies, translating complex requirements into robust front-end interfaces and efficient back-end services.",
        is_current: false,
        _id: "68d4f7abc8f0d46dc8a8b114",
      },
    ],
    education: [
      {
        institution: "Example Institute of Technology",
        degree: "B.TECH",
        field: "CSE",
        graduation_date: "2023-05",
        gpa: "8.7",
        _id: "68d2a31a1c4dd38875bb0380",
      },
      {
        institution: "Example Public School",
        degree: "HIGHER SECONDARY",
        field: "PCM",
        graduation_date: "2019-03",
        gpa: "",
        _id: "68d2a31a1c4dd38875bb0381",
      },
      {
        institution: "Example Academy",
        degree: "SECONDARY SCHOOL",
        field: "",
        graduation_date: "2017-03",
        gpa: "",
        _id: "68d2a31a1c4dd38875bb0382",
      },
    ],
    template: "minimal-image",
    accent_color: "#14B8A6",
    project: [
      {
        name: "Team Task Management System",
        type: "Web Application (Productivity Tool)",
        description:
          "TaskTrackr is a collaborative task management system designed for teams to create, assign, track, and manage tasks in real time. ",
        _id: "68d4f882c8f0d46dc8a8b139",
      },
      {
        name: "EduHub - Online Learning Platform",
        type: "Web Application (EdTech Platform)",
        description:
          "EduHub is an online learning platform where instructors can create courses with video lessons, quizzes, and downloadable resources.",
        _id: "68d4f89dc8f0d46dc8a8b147",
      },
    ],
    updatedAt: "2025-09-23T13:39:38.395Z",
    createdAt: "2025-09-23T13:39:38.395Z",
  },
  {
    // ----------------------------------------------------- Resume 2 ------------------------------------------------------
    personal_info: {
      full_name: "Jordan Lee",
      email: "jordan.lee@example.com",
      phone: "0 987654321",
      location: "San Francisco, CA, USA",
      linkedin: "https://www.linkedin.com/in/jordanlee",
      website: "https://www.jordanlee.dev",
      profession: "Frontend Engineer",
      image: dummy_profile,
    },
    _id: "78e3b42c2d5ff49286cc148f",
    userId: "78d2e0bdcf2886efg03e7e98",
    title: "Jordan's Resume",
    public: true,
    professional_summary:
      "Creative and detail-oriented Frontend Engineer with 5+ years of experience crafting responsive, user-centric web applications using React, Vue, and modern CSS frameworks.",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Vue.js",
      "SASS",
      "Tailwind CSS",
      "Figma",
      "Web Accessibility",
      "REST APIs",
    ],
    experience: [
      {
        company: "TechSpark Inc.",
        position: "Lead Frontend Engineer",
        start_date: "2022-02",
        end_date: "Present",
        description:
          "Leading a team of frontend developers to build accessible and scalable user interfaces. Collaborated with UX teams to implement design systems and improve frontend performance.",
        is_current: true,
        _id: "78e3b42c2d5ff49286cc1490",
      },
      {
        company: "PixelForge Labs",
        position: "Frontend Developer",
        start_date: "2018-09",
        end_date: "2022-01",
        description:
          "Developed reusable UI components using React and Vue.js. Worked closely with backend teams to integrate REST APIs and optimize SPA performance.",
        is_current: false,
        _id: "78e3b42c2d5ff49286cc1491",
      },
    ],
    education: [
      {
        institution: "University of Digital Arts",
        degree: "B.Sc.",
        field: "Computer Science",
        graduation_date: "2018-06",
        gpa: "3.8",
        _id: "78e3b42c2d5ff49286cc1492",
      },
      {
        institution: "Lincoln High School",
        degree: "High School Diploma",
        field: "Science",
        graduation_date: "2014-05",
        gpa: "",
        _id: "78e3b42c2d5ff49286cc1493",
      },
    ],
    template: "minimal-image",
    accent_color: "#6366F1",
    project: [
      {
        name: "FitTrack - Fitness Dashboard",
        type: "Web Application (Health & Fitness)",
        description:
          "FitTrack is a fitness analytics dashboard that allows users to log workouts, track progress, and visualize performance through interactive charts.",
        _id: "78e3b42c2d5ff49286cc1494",
      },
      {
        name: "ShopEase - E-commerce UI Kit",
        type: "Frontend UI Kit",
        description:
          "ShopEase is a modular e-commerce frontend template with ready-to-use components for product listing, cart management, and responsive navigation.",
        _id: "78e3b42c2d5ff49286cc1495",
      },
    ],
    updatedAt: "2025-09-25T15:10:21.184Z",
    createdAt: "2025-09-25T15:10:21.184Z",
  },
  {
    // ----------------------------------------------------- Resume 3 ------------------------------------------------------
    personal_info: {
      full_name: "Riley Morgan",
      email: "riley.morgan@example.com",
      phone: "0 1122334455",
      location: "Austin, TX, USA",
      linkedin: "https://www.linkedin.com/in/rileymorgan",
      website: "https://www.rileym.dev",
      profession: "Backend Developer",
      image: dummy_profile,
    },
    _id: "89f4c53d3e6gg59397dd259g",
    userId: "89e3f1cedg3997fgh14f8f09",
    title: "Riley's Resume",
    public: true,
    professional_summary:
      "Dedicated Backend Developer with 7+ years of experience building secure, high-performance APIs and microservices using Node.js, Python, and PostgreSQL. Passionate about scalability, automation, and clean architecture.",
    skills: [
      "Node.js",
      "Python",
      "PostgreSQL",
      "MongoDB",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "Redis",
      "GraphQL",
      "AWS",
    ],
    experience: [
      {
        company: "DataNest Solutions",
        position: "Senior Backend Engineer",
        start_date: "2021-03",
        end_date: "Present",
        description:
          "Developed distributed microservices using Node.js and Docker. Implemented API rate limiting, authentication, and background job processing using Redis and Bull.",
        is_current: true,
        _id: "89f4c53d3e6gg59397dd259h",
      },
      {
        company: "CloudCore Systems",
        position: "Backend Developer",
        start_date: "2016-07",
        end_date: "2021-02",
        description:
          "Maintained and scaled backend systems built on Python and PostgreSQL. Automated deployments with GitLab CI/CD and improved API response time by 35%.",
        is_current: false,
        _id: "89f4c53d3e6gg59397dd259i",
      },
    ],
    education: [
      {
        institution: "Texas Institute of Technology",
        degree: "B.E.",
        field: "Information Technology",
        graduation_date: "2016-05",
        gpa: "3.9",
        _id: "89f4c53d3e6gg59397dd259j",
      },
      {
        institution: "Central High School",
        degree: "High School Diploma",
        field: "Science",
        graduation_date: "2012-04",
        gpa: "",
        _id: "89f4c53d3e6gg59397dd259k",
      },
    ],
    template: "minimal-image",
    accent_color: "#F59E0B",
    project: [
      {
        name: "Invoicr - Invoice Management System",
        type: "Web Application (FinTech)",
        description:
          "Invoicr is a secure web platform that allows freelancers and small businesses to generate, track, and automate professional invoices. Built with Node.js, MongoDB, and Stripe integration.",
        _id: "89f4c53d3e6gg59397dd259l",
      },
      {
        name: "API Monitor Dashboard",
        type: "DevOps Tool",
        description:
          "A real-time API monitoring dashboard for microservices. Tracks latency, uptime, and error rates using Prometheus and Grafana.",
        _id: "89f4c53d3e6gg59397dd259m",
      },
    ],
    updatedAt: "2025-09-25T15:26:49.652Z",
    createdAt: "2025-09-25T15:26:49.652Z",
  },
];

export const resumesThemeColor = [
  "#9333ea",
  "#d97776",
  "#dc2626",
  "#0284c7",
  "#16a34a",
];

export const resumeSections = [
  { id: "personal", name: "Personal Info", icon: User },
  { id: "summary", name: "Summary", icon: FileText },
  { id: "experience", name: "Experience", icon: Briefcase },
  { id: "education", name: "Education", icon: GraduationCap },
  { id: "projects", name: "Projects", icon: FolderIcon },
  { id: "skills", name: "Skills", icon: Sparkles },
];

export const personalInfoFormFields = [
  {
    key: "full_name",
    label: "Full Name",
    icon: User,
    type: "text",
    required: true,
  },
  {
    key: "email",
    label: "Email Address",
    icon: Mail,
    type: "email",
    required: true,
  },
  { key: "phone", label: "Phone Number", icon: Phone, type: "tel" },
  { key: "location", label: "Location", icon: MapPin, type: "text" },
  {
    key: "profession",
    label: "Profession",
    icon: BriefcaseBusiness,
    type: "text",
  },
  {
    key: "linkedin",
    label: "Linkedin Profile",
    icon:FaLinkedinIn,
    type: "url",
  },
  { key: "website", label: "Personal Website", icon: Globe2, type: "url" },
];
