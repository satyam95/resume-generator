"use client";
import type {
  Award,
  Certificate,
  ContactInfo,
  Education,
  Project,
  ResumeData,
  Skill,
  WorkExperience,
} from "@/types/resume";
import type { ReactNode } from "react";
import { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

// Define the context shape
interface ResumeContextType {
  resume: ResumeData & { id?: string; createdAt?: string; updatedAt?: string };
  updateContactInfo: (contactInfo: ContactInfo) => void;
  updateSummaryInfo: (summaryInfo: ResumeData["summaryInfo"]) => void;
  updateExperienceInfo: (experienceInfo: ResumeData["experienceInfo"]) => void;
  addExperience: (experience: Omit<WorkExperience, "id">) => void;
  updateExperience: (id: string, experience: Partial<WorkExperience>) => void;
  deleteExperience: (id: string) => void;
  updateEducationInfo: (educationInfo: ResumeData["educationInfo"]) => void;
  addEducation: (education: Omit<Education, "id">) => void;
  updateEducation: (id: string, education: Partial<Education>) => void;
  deleteEducation: (id: string) => void;
  updateSkillsInfo: (skillsInfo: ResumeData["skillsInfo"]) => void;
  addSkill: (skill: Omit<Skill, "id">) => void;
  updateSkill: (id: string, skill: Partial<Skill>) => void;
  deleteSkill: (id: string) => void;
  updateProjectsInfo: (projectsInfo: ResumeData["projectsInfo"]) => void;
  addProject: (project: Omit<Project, "id">) => void;
  updateProject: (id: string, project: Partial<Project>) => void;
  deleteProject: (id: string) => void;
  updateAwardsInfo: (awardsInfo: ResumeData["awardsInfo"]) => void;
  addAward: (award: Omit<Award, "id">) => void;
  updateAward: (id: string, award: Partial<Award>) => void;
  deleteAward: (id: string) => void;
  updateCertificationInfo: (
    certificationInfo: ResumeData["certificationInfo"]
  ) => void; // Added
  addCertificate: (certificate: Omit<Certificate, "id">) => void; // Added
  updateCertificate: (id: string, certificate: Partial<Certificate>) => void; // Added
  deleteCertificate: (id: string) => void; // Added
  updateResumeName: (name: string) => void;
}

// Create the context with an initial undefined value
const ResumeContext = createContext<ResumeContextType | undefined>(undefined);

// Resume Provider component
interface ResumeProviderProps {
  children: ReactNode;
  initialData: ResumeData;
  resumeId?: string;
}

export const ResumeProvider: React.FC<ResumeProviderProps> = ({
  children,
  initialData,
  resumeId,
}) => {
  const [resume, setResume] = useState<
    ResumeData & { id?: string; createdAt?: string; updatedAt?: string }
  >({
    ...initialData,
    id: resumeId,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });

  // Update contact information
  const updateContactInfo = (contactInfo: ContactInfo) => {
    setResume((prev) => ({
      ...prev,
      contactInfo,
      updatedAt: new Date().toISOString(),
    }));
  };

  // Update summary information
  const updateSummaryInfo = (summaryInfo: ResumeData["summaryInfo"]) => {
    setResume((prev) => ({
      ...prev,
      summaryInfo,
      updatedAt: new Date().toISOString(),
    }));
  };

  // Update experience information (section title or entire experience list)
  const updateExperienceInfo = (
    experienceInfo: ResumeData["experienceInfo"]
  ) => {
    setResume((prev) => ({
      ...prev,
      experienceInfo,
      updatedAt: new Date().toISOString(),
    }));
  };

  // Add a new experience entry
  const addExperience = (experience: Omit<WorkExperience, "id">) => {
    setResume((prev) => ({
      ...prev,
      experienceInfo: {
        ...prev.experienceInfo,
        experience: [
          ...prev.experienceInfo.experience,
          { ...experience, id: uuidv4() },
        ],
      },
      updatedAt: new Date().toISOString(),
    }));
  };

  // Update an existing experience entry
  const updateExperience = (
    id: string,
    experience: Partial<WorkExperience>
  ) => {
    setResume((prev) => ({
      ...prev,
      experienceInfo: {
        ...prev.experienceInfo,
        experience: prev.experienceInfo.experience.map((exp) =>
          exp.id === id ? { ...exp, ...experience } : exp
        ),
      },
      updatedAt: new Date().toISOString(),
    }));
  };

  // Delete an experience entry
  const deleteExperience = (id: string) => {
    setResume((prev) => ({
      ...prev,
      experienceInfo: {
        ...prev.experienceInfo,
        experience: prev.experienceInfo.experience.filter(
          (exp) => exp.id !== id
        ),
      },
      updatedAt: new Date().toISOString(),
    }));
  };

  // Update education information
  const updateEducationInfo = (educationInfo: ResumeData["educationInfo"]) => {
    setResume((prev) => ({
      ...prev,
      educationInfo,
      updatedAt: new Date().toISOString(),
    }));
  };

  // Add a new education entry
  const addEducation = (education: Omit<Education, "id">) => {
    setResume((prev) => ({
      ...prev,
      educationInfo: {
        ...prev.educationInfo,
        education: [
          ...prev.educationInfo.education,
          { ...education, id: uuidv4() },
        ],
      },
      updatedAt: new Date().toISOString(),
    }));
  };

  // Update an existing education entry
  const updateEducation = (id: string, education: Partial<Education>) => {
    setResume((prev) => ({
      ...prev,
      educationInfo: {
        ...prev.educationInfo,
        education: prev.educationInfo.education.map((edu) =>
          edu.id === id ? { ...edu, ...education } : edu
        ),
      },
      updatedAt: new Date().toISOString(),
    }));
  };

  // Delete an education entry
  const deleteEducation = (id: string) => {
    setResume((prev) => ({
      ...prev,
      educationInfo: {
        ...prev.educationInfo,
        education: prev.educationInfo.education.filter((edu) => edu.id !== id),
      },
      updatedAt: new Date().toISOString(),
    }));
  };

  // Update skills information
  const updateSkillsInfo = (skillsInfo: ResumeData["skillsInfo"]) => {
    setResume((prev) => ({
      ...prev,
      skillsInfo,
      updatedAt: new Date().toISOString(),
    }));
  };

  // Add a new skill entry
  const addSkill = (skill: Omit<Skill, "id">) => {
    setResume((prev) => ({
      ...prev,
      skillsInfo: {
        ...prev.skillsInfo,
        skills: [...prev.skillsInfo.skills, { ...skill, id: uuidv4() }],
      },
      updatedAt: new Date().toISOString(),
    }));
  };

  // Update an existing skill entry
  const updateSkill = (id: string, skill: Partial<Skill>) => {
    setResume((prev) => ({
      ...prev,
      skillsInfo: {
        ...prev.skillsInfo,
        skills: prev.skillsInfo.skills.map((s) =>
          s.id === id ? { ...s, ...skill } : s
        ),
      },
      updatedAt: new Date().toISOString(),
    }));
  };

  // Delete a skill entry
  const deleteSkill = (id: string) => {
    setResume((prev) => ({
      ...prev,
      skillsInfo: {
        ...prev.skillsInfo,
        skills: prev.skillsInfo.skills.filter((s) => s.id !== id),
      },
      updatedAt: new Date().toISOString(),
    }));
  };

  // Update projects information
  const updateProjectsInfo = (projectsInfo: ResumeData["projectsInfo"]) => {
    setResume((prev) => ({
      ...prev,
      projectsInfo,
      updatedAt: new Date().toISOString(),
    }));
  };

  // Add a new project entry
  const addProject = (project: Omit<Project, "id">) => {
    setResume((prev) => ({
      ...prev,
      projectsInfo: {
        ...prev.projectsInfo,
        projects: [...prev.projectsInfo.projects, { ...project, id: uuidv4() }],
      },
      updatedAt: new Date().toISOString(),
    }));
  };

  // Update an existing project entry
  const updateProject = (id: string, project: Partial<Project>) => {
    setResume((prev) => ({
      ...prev,
      projectsInfo: {
        ...prev.projectsInfo,
        projects: prev.projectsInfo.projects.map((p) =>
          p.id === id ? { ...p, ...project } : p
        ),
      },
      updatedAt: new Date().toISOString(),
    }));
  };

  // Delete a project entry
  const deleteProject = (id: string) => {
    setResume((prev) => ({
      ...prev,
      projectsInfo: {
        ...prev.projectsInfo,
        projects: prev.projectsInfo.projects.filter((p) => p.id !== id),
      },
      updatedAt: new Date().toISOString(),
    }));
  };

  // Update awards information
  const updateAwardsInfo = (awardsInfo: ResumeData["awardsInfo"]) => {
    setResume((prev) => ({
      ...prev,
      awardsInfo,
      updatedAt: new Date().toISOString(),
    }));
  };

  // Add a new award entry
  const addAward = (award: Omit<Award, "id">) => {
    setResume((prev) => ({
      ...prev,
      awardsInfo: {
        ...prev.awardsInfo,
        awards: [...prev.awardsInfo.awards, { ...award, id: uuidv4() }],
      },
      updatedAt: new Date().toISOString(),
    }));
  };

  // Update an existing award entry
  const updateAward = (id: string, award: Partial<Award>) => {
    setResume((prev) => ({
      ...prev,
      awardsInfo: {
        ...prev.awardsInfo,
        awards: prev.awardsInfo.awards.map((a) =>
          a.id === id ? { ...a, ...award } : a
        ),
      },
      updatedAt: new Date().toISOString(),
    }));
  };

  // Delete an award entry
  const deleteAward = (id: string) => {
    setResume((prev) => ({
      ...prev,
      awardsInfo: {
        ...prev.awardsInfo,
        awards: prev.awardsInfo.awards.filter((a) => a.id !== id),
      },
      updatedAt: new Date().toISOString(),
    }));
  };

  // Update resume name
  const updateResumeName = (name: string) => {
    setResume((prev) => ({
      ...prev,
      name,
      updatedAt: new Date().toISOString(),
    }));
  };

  // Update certification information
  const updateCertificationInfo = (
    certificationInfo: ResumeData["certificationInfo"]
  ) => {
    setResume((prev) => ({
      ...prev,
      certificationInfo,
      updatedAt: new Date().toISOString(),
    }));
  };

  // Add a new certificate entry
  const addCertificate = (certificate: Omit<Certificate, "id">) => {
    setResume((prev) => ({
      ...prev,
      certificationInfo: {
        ...prev.certificationInfo,
        certificates: [
          ...prev.certificationInfo.certificates,
          { ...certificate, id: uuidv4() },
        ],
      },
      updatedAt: new Date().toISOString(),
    }));
  };

  // Update an existing certificate entry
  const updateCertificate = (id: string, certificate: Partial<Certificate>) => {
    setResume((prev) => ({
      ...prev,
      certificationInfo: {
        ...prev.certificationInfo,
        certificates: prev.certificationInfo.certificates.map((cert) =>
          cert.id === id ? { ...cert, ...certificate } : cert
        ),
      },
      updatedAt: new Date().toISOString(),
    }));
  };

  // Delete a certificate entry
  const deleteCertificate = (id: string) => {
    setResume((prev) => ({
      ...prev,
      certificationInfo: {
        ...prev.certificationInfo,
        certificates: prev.certificationInfo.certificates.filter(
          (cert) => cert.id !== id
        ),
      },
      updatedAt: new Date().toISOString(),
    }));
  };

  // // Update template settings
  // const updateTemplateSettings = (templateSettings: ResumeData["templateSettings"]) => {
  //   setResume((prev) => ({
  //     ...prev,
  //     templateSettings,
  //     updatedAt: new Date().toISOString(),
  //   }));
  // };

  return (
    <ResumeContext.Provider
      value={{
        resume,
        updateContactInfo,
        updateSummaryInfo,
        updateExperienceInfo,
        addExperience,
        updateExperience,
        deleteExperience,
        updateEducationInfo,
        addEducation,
        updateEducation,
        deleteEducation,
        updateSkillsInfo,
        addSkill,
        updateSkill,
        deleteSkill,
        updateProjectsInfo,
        addProject,
        updateProject,
        deleteProject,
        updateAwardsInfo,
        addAward,
        updateAward,
        deleteAward,
        updateCertificationInfo, // Added
        addCertificate, // Added
        updateCertificate, // Added
        deleteCertificate,
        updateResumeName,
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
};

// Custom hook to use the Resume context
export const useResume = (): ResumeContextType => {
  const context = useContext(ResumeContext);
  if (!context) {
    throw new Error("useResume must be used within a ResumeProvider");
  }
  return context;
};
