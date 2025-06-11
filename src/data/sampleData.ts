import type { ResumeData } from "@/types/resume";

const initialResumeData: ResumeData = {
  name: "John Doe",
  templateSettings: {
    templateType: "traditional",
  },
  contactInfo: {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1-555-123-4567",
    location: "San Francisco, CA, USA",
    linkedIn: "https://www.linkedin.com/in/johndoe",
    github: "https://github.com/johndoe",
    website: "https://johndoe.dev",
  },
  summaryInfo: {
    sectionTitle: "Professional Summary",
    isHidden: false,
    content:
      "Results-driven software engineer with 5+ years of experience in full-stack development, specializing in building scalable web applications and optimizing performance. Passionate about leveraging modern technologies to solve complex problems and deliver user-focused solutions.",
  },
  experienceInfo: {
    sectionTitle: "Work Experience",
    experience: [
      {
        id: "exp-001",
        company: "TechCorp Inc.",
        position: "Senior Software Engineer",
        location: "San Francisco, CA",
        duration: "Jan 2022 - Present",
        responsibilities: [
          "Led a team of 5 developers to design and implement a microservices architecture for a SaaS platform, improving scalability by 40%.",
          "Developed RESTful APIs using Node.js and TypeScript, integrating with PostgreSQL and MongoDB databases.",
          "Optimized frontend performance using React, reducing page load times by 25%.",
          "Collaborated with product managers to define feature requirements and ensure timely delivery.",
        ],
      },
      {
        id: "exp-002",
        company: "Innovate Solutions",
        position: "Software Engineer",
        location: "Austin, TX",
        duration: "Jun 2019 - Dec 2021",
        responsibilities: [
          "Built responsive web applications using Angular and TypeScript, serving 10,000+ monthly active users.",
          "Implemented CI/CD pipelines with Jenkins, reducing deployment time by 30%.",
          "Integrated third-party APIs for payment processing and user authentication.",
          "Mentored junior developers, conducting code reviews and pair programming sessions.",
        ],
      },
    ],
  },
  educationInfo: {
    sectionTitle: "Education",
    education: [
      {
        id: "edu-001",
        institution: "University of California, Berkeley",
        degree: "Bachelor of Science in Computer Science",
        duration: "Aug 2015 - May 2019",
      },
    ],
  },
  skillsInfo: {
    sectionTitle: "Skills",
    skills: [
      {
        id: "skill-001",
        title: "Programming Languages",
        skills: "JavaScript, TypeScript, Python, Java",
      },
      {
        id: "skill-002",
        title: "Frameworks & Libraries",
        skills: "React, Angular, Node.js, Express, Django",
      },
      {
        id: "skill-003",
        title: "Tools & Platforms",
        skills: "Git, Docker, AWS, Jenkins, Kubernetes",
      },
      {
        id: "skill-004",
        title: "Databases",
        skills: "PostgreSQL, MongoDB, MySQL",
      },
    ],
  },
  projectsInfo: {
    sectionTitle: "Projects",
    projects: [
      {
        id: "proj-001",
        name: "Task Management App",
        description: [
          "Developed a full-stack task management application with real-time collaboration features.",
          "Implemented a RESTful API with Node.js and Express, and a frontend with React and Redux.",
          "Integrated WebSocket for real-time updates and deployed on AWS EC2.",
        ],
        technologies: "React, Node.js, Express, MongoDB, AWS, WebSocket",
        url: "https://taskmanager.johndoe.dev",
      },
      {
        id: "proj-002",
        name: "E-Commerce Platform",
        description: [
          "Built a scalable e-commerce platform with payment integration and user authentication.",
          "Used Angular for the frontend and Django for the backend, with PostgreSQL as the database.",
          "Implemented Stripe for payment processing and JWT for secure authentication.",
        ],
        technologies: "Angular, Django, PostgreSQL, Stripe, JWT",
        url: "https://ecommerce.johndoe.dev",
      },
    ],
  },
  awardsInfo: {
    sectionTitle: "Awards & Achievements",
    awards: [
      {
        id: "award-001",
        title: "Employee of the Year",
        description:
          "Recognized for outstanding contributions to the development of a high-impact SaaS platform at TechCorp Inc.",
        year: "2023",
      },
      {
        id: "award-002",
        title: "Hackathon Winner",
        description:
          "Won first place in a regional hackathon for developing a real-time collaboration tool.",
        year: "2020",
        url: "https://hackathon2020.example.com",
      },
    ],
  },
};

export default initialResumeData;
