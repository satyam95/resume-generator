"use client";
import initialResumeData from "@/data/sampleData";
import type {
  Award,
  ContactInfo,
  Education,
  Project,
  Resume,
  Skill,
  WorkExperience,
} from "@/types/resume";
import type { ReactNode } from "react";
import { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

// Define the context shape
interface ResumeContextType {
  resume: Resume;
  updateContactInfo: (contactInfo: ContactInfo) => void;
  updateSummaryInfo: (summaryInfo: Resume["resumeData"]["summaryInfo"]) => void;
  updateExperienceInfo: (
    experienceInfo: Resume["resumeData"]["experienceInfo"]
  ) => void;
  addExperience: (experience: Omit<WorkExperience, "id">) => void;
  updateExperience: (id: string, experience: Partial<WorkExperience>) => void;
  deleteExperience: (id: string) => void;
  updateEducationInfo: (
    educationInfo: Resume["resumeData"]["educationInfo"]
  ) => void;
  addEducation: (education: Omit<Education, "id">) => void;
  updateEducation: (id: string, education: Partial<Education>) => void;
  deleteEducation: (id: string) => void;
  updateSkillsInfo: (skillsInfo: Resume["resumeData"]["skillsInfo"]) => void;
  addSkill: (skill: Omit<Skill, "id">) => void;
  updateSkill: (id: string, skill: Partial<Skill>) => void;
  deleteSkill: (id: string) => void;
  updateProjectsInfo: (
    projectsInfo: Resume["resumeData"]["projectsInfo"]
  ) => void;
  addProject: (project: Omit<Project, "id">) => void;
  updateProject: (id: string, project: Partial<Project>) => void;
  deleteProject: (id: string) => void;
  updateAwardsInfo: (awardsInfo: Resume["resumeData"]["awardsInfo"]) => void;
  addAward: (award: Omit<Award, "id">) => void;
  updateAward: (id: string, award: Partial<Award>) => void;
  deleteAward: (id: string) => void;
  updateResumeName: (name: string) => void;
}

// Create the context with an initial undefined value
const ResumeContext = createContext<ResumeContextType | undefined>(undefined);

// Resume Provider component
interface ResumeProviderProps {
  children: ReactNode;
}

export const ResumeProvider: React.FC<ResumeProviderProps> = ({ children }) => {
  const [resume, setResume] = useState<Resume>(initialResumeData);

  // Update contact information
  const updateContactInfo = (contactInfo: ContactInfo) => {
    setResume((prev) => ({
      ...prev,
      resumeData: {
        ...prev.resumeData,
        contactInfo,
      },
      updatedAt: new Date().toISOString(),
    }));
  };

  // Update summary information
  const updateSummaryInfo = (
    summaryInfo: Resume["resumeData"]["summaryInfo"]
  ) => {
    setResume((prev) => ({
      ...prev,
      resumeData: {
        ...prev.resumeData,
        summaryInfo,
      },
      updatedAt: new Date().toISOString(),
    }));
  };

  // Update experience information (section title or entire experience list)
  const updateExperienceInfo = (
    experienceInfo: Resume["resumeData"]["experienceInfo"]
  ) => {
    setResume((prev) => ({
      ...prev,
      resumeData: {
        ...prev.resumeData,
        experienceInfo,
      },
      updatedAt: new Date().toISOString(),
    }));
  };

  // Add a new experience entry
  const addExperience = (experience: Omit<WorkExperience, "id">) => {
    setResume((prev) => ({
      ...prev,
      resumeData: {
        ...prev.resumeData,
        experienceInfo: {
          ...prev.resumeData.experienceInfo,
          experience: [
            ...prev.resumeData.experienceInfo.experience,
            { ...experience, id: uuidv4() },
          ],
        },
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
      resumeData: {
        ...prev.resumeData,
        experienceInfo: {
          ...prev.resumeData.experienceInfo,
          experience: prev.resumeData.experienceInfo.experience.map((exp) =>
            exp.id === id ? { ...exp, ...experience } : exp
          ),
        },
      },
      updatedAt: new Date().toISOString(),
    }));
  };

  // Delete an experience entry
  const deleteExperience = (id: string) => {
    setResume((prev) => ({
      ...prev,
      resumeData: {
        ...prev.resumeData,
        experienceInfo: {
          ...prev.resumeData.experienceInfo,
          experience: prev.resumeData.experienceInfo.experience.filter(
            (exp) => exp.id !== id
          ),
        },
      },
      updatedAt: new Date().toISOString(),
    }));
  };

  // Update education information
  const updateEducationInfo = (
    educationInfo: Resume["resumeData"]["educationInfo"]
  ) => {
    setResume((prev) => ({
      ...prev,
      resumeData: {
        ...prev.resumeData,
        educationInfo,
      },
      updatedAt: new Date().toISOString(),
    }));
  };

  // Add a new education entry
  const addEducation = (education: Omit<Education, "id">) => {
    setResume((prev) => ({
      ...prev,
      resumeData: {
        ...prev.resumeData,
        educationInfo: {
          ...prev.resumeData.educationInfo,
          education: [
            ...prev.resumeData.educationInfo.education,
            { ...education, id: uuidv4() },
          ],
        },
      },
      updatedAt: new Date().toISOString(),
    }));
  };

  // Update an existing education entry
  const updateEducation = (id: string, education: Partial<Education>) => {
    setResume((prev) => ({
      ...prev,
      resumeData: {
        ...prev.resumeData,
        educationInfo: {
          ...prev.resumeData.educationInfo,
          education: prev.resumeData.educationInfo.education.map((edu) =>
            edu.id === id ? { ...edu, ...education } : edu
          ),
        },
      },
      updatedAt: new Date().toISOString(),
    }));
  };

  // Delete an education entry
  const deleteEducation = (id: string) => {
    setResume((prev) => ({
      ...prev,
      resumeData: {
        ...prev.resumeData,
        educationInfo: {
          ...prev.resumeData.educationInfo,
          education: prev.resumeData.educationInfo.education.filter(
            (edu) => edu.id !== id
          ),
        },
      },
      updatedAt: new Date().toISOString(),
    }));
  };

  // Update skills information
  const updateSkillsInfo = (skillsInfo: Resume["resumeData"]["skillsInfo"]) => {
    setResume((prev) => ({
      ...prev,
      resumeData: {
        ...prev.resumeData,
        skillsInfo,
      },
      updatedAt: new Date().toISOString(),
    }));
  };

  // Add a new skill entry
  const addSkill = (skill: Omit<Skill, "id">) => {
    setResume((prev) => ({
      ...prev,
      resumeData: {
        ...prev.resumeData,
        skillsInfo: {
          ...prev.resumeData.skillsInfo,
          skills: [
            ...prev.resumeData.skillsInfo.skills,
            { ...skill, id: uuidv4() },
          ],
        },
      },
      updatedAt: new Date().toISOString(),
    }));
  };

  // Update an existing skill entry
  const updateSkill = (id: string, skill: Partial<Skill>) => {
    setResume((prev) => ({
      ...prev,
      resumeData: {
        ...prev.resumeData,
        skillsInfo: {
          ...prev.resumeData.skillsInfo,
          skills: prev.resumeData.skillsInfo.skills.map((s) =>
            s.id === id ? { ...s, ...skill } : s
          ),
        },
      },
      updatedAt: new Date().toISOString(),
    }));
  };

  // Delete a skill entry
  const deleteSkill = (id: string) => {
    setResume((prev) => ({
      ...prev,
      resumeData: {
        ...prev.resumeData,
        skillsInfo: {
          ...prev.resumeData.skillsInfo,
          skills: prev.resumeData.skillsInfo.skills.filter((s) => s.id !== id),
        },
      },
      updatedAt: new Date().toISOString(),
    }));
  };

  // Update projects information
  const updateProjectsInfo = (
    projectsInfo: Resume["resumeData"]["projectsInfo"]
  ) => {
    setResume((prev) => ({
      ...prev,
      resumeData: {
        ...prev.resumeData,
        projectsInfo,
      },
      updatedAt: new Date().toISOString(),
    }));
  };

  // Add a new project entry
  const addProject = (project: Omit<Project, "id">) => {
    setResume((prev) => ({
      ...prev,
      resumeData: {
        ...prev.resumeData,
        projectsInfo: {
          ...prev.resumeData.projectsInfo,
          projects: [
            ...prev.resumeData.projectsInfo.projects,
            { ...project, id: uuidv4() },
          ],
        },
      },
      updatedAt: new Date().toISOString(),
    }));
  };

  // Update an existing project entry
  const updateProject = (id: string, project: Partial<Project>) => {
    setResume((prev) => ({
      ...prev,
      resumeData: {
        ...prev.resumeData,
        projectsInfo: {
          ...prev.resumeData.projectsInfo,
          projects: prev.resumeData.projectsInfo.projects.map((p) =>
            p.id === id ? { ...p, ...project } : p
          ),
        },
      },
      updatedAt: new Date().toISOString(),
    }));
  };

  // Delete a project entry
  const deleteProject = (id: string) => {
    setResume((prev) => ({
      ...prev,
      resumeData: {
        ...prev.resumeData,
        projectsInfo: {
          ...prev.resumeData.projectsInfo,
          projects: prev.resumeData.projectsInfo.projects.filter(
            (p) => p.id !== id
          ),
        },
      },
      updatedAt: new Date().toISOString(),
    }));
  };

  // Update awards information
  const updateAwardsInfo = (awardsInfo: Resume["resumeData"]["awardsInfo"]) => {
    setResume((prev) => ({
      ...prev,
      resumeData: {
        ...prev.resumeData,
        awardsInfo,
      },
      updatedAt: new Date().toISOString(),
    }));
  };

  // Add a new award entry
  const addAward = (award: Omit<Award, "id">) => {
    setResume((prev) => ({
      ...prev,
      resumeData: {
        ...prev.resumeData,
        awardsInfo: {
          ...prev.resumeData.awardsInfo,
          awards: [
            ...prev.resumeData.awardsInfo.awards,
            { ...award, id: uuidv4() },
          ],
        },
      },
      updatedAt: new Date().toISOString(),
    }));
  };

  // Update an existing award entry
  const updateAward = (id: string, award: Partial<Award>) => {
    setResume((prev) => ({
      ...prev,
      resumeData: {
        ...prev.resumeData,
        awardsInfo: {
          ...prev.resumeData.awardsInfo,
          awards: prev.resumeData.awardsInfo.awards.map((a) =>
            a.id === id ? { ...a, ...award } : a
          ),
        },
      },
      updatedAt: new Date().toISOString(),
    }));
  };

  // Delete an award entry
  const deleteAward = (id: string) => {
    setResume((prev) => ({
      ...prev,
      resumeData: {
        ...prev.resumeData,
        awardsInfo: {
          ...prev.resumeData.awardsInfo,
          awards: prev.resumeData.awardsInfo.awards.filter((a) => a.id !== id),
        },
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
