import {
  BriefcaseBusiness,
  Download,
  GraduationCap,
  Laptop,
  LayoutPanelTop,
  NotebookPen,
  RefreshCw,
  Rocket,
  Star,
} from "lucide-react";

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
