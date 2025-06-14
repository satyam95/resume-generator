export interface ContactInfo {
  name: string;
  email: string;
  phone: string;
  location: string;
  linkedIn?: string;
  github?: string;
  website?: string;
}

export interface WorkExperience {
  id: string;
  company: string;
  position: string;
  location: string;
  duration: string;
  responsibilities: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  duration: string;
}

export interface Skill {
  id: string;
  title: string;
  skills: string;
}

export interface Project {
  id: string;
  name: string;
  description: string[];
  technologies: string;
  url?: string;
}

export interface Award {
  id: string;
  title: string;
  description: string;
  year: string;
  url?: string;
}

export interface Certificate {
  id: string;
  description: string;
  year: string;
  url?: string;
}

export interface ResumeData {
  name: string;
  templateSettings: {
    templateType: string;
  };
  contactInfo: ContactInfo;
  summaryInfo?: {
    sectionTitle: string;
    isHidden: boolean;
    content: string;
  };
  experienceInfo: {
    sectionTitle: string;
    experience: WorkExperience[];
  };
  educationInfo: {
    sectionTitle: string;
    education: Education[];
  };
  skillsInfo: {
    sectionTitle: string;
    skills: Skill[];
  };
  projectsInfo: {
    sectionTitle: string;
    projects: Project[];
  };
  awardsInfo: {
    sectionTitle: string;
    awards: Award[];
  };
  certificationInfo: {
    sectionTitle: string;
    certificates: Certificate[];
  };
}
