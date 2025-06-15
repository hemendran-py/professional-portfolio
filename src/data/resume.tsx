import { Icons } from "@/components/icons";
import { url } from "inspector";
import { Globe2Icon, GlobeIcon, HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Hemendran S",
  initials: "S",
  url: "https://hemendran.vercel.app",
  location: "Chennai, India",
  locationLink: "https://www.google.com/maps/place/chennai",
  description:
    "20-year old Student Developer. I love building things and helping people.",
  summary: `At the end of my third year in computer science, I shifted my focus from just academics to **building real-world projects and scalable products**. I have interned in **cloud infrastructure**, **security analysis**, and **full-stack development** while consistently learning through hands-on work. Along the way, I&apos;ve built multiple projects. I&apos;m now focused on using my skills to **solve meaningful problems**, contribute to open source, and explore opportunities in **cloud and DevOps**.  
Explore more of my work at [Hemendran.vercel.app](https://hemendran.vercel.app).`,
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "mySQL",
    "cloud computing",
    "Docker",
    "AWS",
    "CI/CD",
    "Java",
    "git",
    "cybersecurity",
    "networking",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    {
      href: "https://hemendran.vercel.app",
      icon: GlobeIcon,
      label: "Personal Website",
    },
  ],
  contact: {
    email: "hemendrankumar@gmail.com",
    tel: "+918428863842",
    social: {
      phone: {
        name: "phone",
        url: "tel:+918428863842",
        icon: Icons.phone,

        navbar: true,
      },
      email: {
        name: "email",
        url: "mailto:hemendrankumar@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/hemendran-s-506102277",
        icon: Icons.linkedin,

        navbar: true,
      },
      GitHub: {
        name: "GitHub",
        url: "https://github.com/hemendran-py",
        icon: Icons.github,

        navbar: true,
      },

      instagram: {
        name: "Instagram",
        url: "https://instagram.com/not._hxm_",
        icon: Icons.instagram,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Precision Infomatics",
      href: "https://www.precisionit.co.in/",
      badges: [],
      location: "Chennai",
      title: "Cloud Computing Intern",
      logoUrl: "/precision.png",
      start: "june 2025",
      end: "july 2025",
      description:
        "Completed a hands-on internship focused on AWS cloud infrastructure. Gained experience in deploying websites using EC2, configuring VPCs, load balancers, security groups, and monitoring tools like Nagios. Developed practical skills in managing secure, scalable cloud environments.",
    },
    {
      company: "Box Office Studios",
      href: "/",
      badges: [],
      location: "Remote",
      title: "Security Analyt Intern",
      logoUrl: "/boxofficestudios.jpg",
      start: "june 2024",
      end: "july 2024",
      description:
        "I worked as a Security Analyst Intern at Box Office Studios, focusing on network security. I used tools like Nmap to scan networks and identify potential vulnerabilities.",
    },
  ],
  education: [
    {
      school: "Hindustan Institute of Technology and Science",
      href: "/",
      degree:
        "B.Tech Computer Science and Engineering ( Specialization in Cybersecurity )",
      logoUrl: "/hindustan.png",
      start: "2026",
      end: "2022",
    },
    {
      school: "St.Johns English School and Junior College",
      href: "/",
      degree: "Higher Secondary Education",
      logoUrl: "/stjohns.png",
      start: "2007",
      end: "2022",
    },
  ],
  projects: [
    {
      title: "FinWise",
      href: "https://github.com/hemendran-py/finwise",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "finance management web app built with Next.js, designed to help users track income and expenses efficiently .",
      technologies: [
        "Next.js",
        "Typescript",
        "MySQL",
        "MongoDB",
        "Prisma",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://github.com/hemendran-py/finwise",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/finwise.jpg",
      video: "",
    },
    {
      title: "SkillScan",
      href: "https://github.com/hemendran-py/SkillScan",
      dates: "June 2023 - Present",
      active: true,
      description:
        "A simple Skill Gap Analyzer that compares your skills with job roles and suggests what to learn next.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "CSS",
        "Shadcn UI",
        "node.js",
      ],
      links: [
        {
          type: "Website",
          href: "https://github.com/hemendran-py/SkillScan",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/hemendran-py/SkillScan",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/skillscan.png",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "Spotify Status Component",
      href: "https://github.com/hemendran-py/spotify-webapp-component",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "A lightweight Spotify widget that displays your recently played tracks — easily embeddable on personal websites or blogs.",
      technologies: ["Next.js", "spotify-web-api", "OAuth", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://github.com/hemendran-py/spotify-webapp-component",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/spotifywebappcomponent.jpg",
      video: "",
    },
    {
      title: "Personal Website",
      href: "https://hemendran.vercel.app",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "A clean and responsive personal site showcasing my projects, skills, and experiences in tech.",
      technologies: [
        "Next.js",
        "Typescript",
        "vercel",

        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://hemendran.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/personalwebsite.jpg",
      video: "",
    },
    {
      title: "Phishing URL Checker",
      href: "https://github.com/hemendran-py/detect-phishing-url",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "machine learning-based system designed to classify URLs as phishing or legitimate.",
      technologies: [
        "Python",
        "scikit-learn",
        "pandas",
        "Flask",
        "Decision Tree",
      ],
      links: [
        {
          type: "Website",
          href: "https://github.com/hemendran-py/detect-phishing-url",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/hemendran-py/detect-phishing-url",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
  ],
} as const;
