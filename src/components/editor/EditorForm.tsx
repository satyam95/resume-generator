"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { useResume } from "@/hooks/useResume";
import { Switch } from "../ui/switch";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Plus, Trash2 } from "lucide-react";

const EditorForm = () => {
  const {
    resume,
    updateContactInfo,
    updateSummaryInfo,
    updateExperienceInfo,
    deleteExperience,
    updateExperience,
    addExperience,
    updateSkillsInfo,
    deleteSkill,
    addSkill,
    updateSkill,
    updateProjectsInfo,
    deleteProject,
    updateProject,
    addProject,
    updateEducationInfo,
    deleteEducation,
    updateEducation,
    addEducation,
    updateAwardsInfo,
    deleteAward,
    updateAward,
    addAward,
  } = useResume();
  return (
    <Accordion
      type="multiple"
      className="w-full space-y-4"
      defaultValue={["contactInfo"]}
    >
      <AccordionItem value="contactInfo" className="rounded-lg border shadow">
        <AccordionTrigger className="px-4 py-3">
          <div className="text-lg font-semibold text-gray-900">
            Contact Information
          </div>
        </AccordionTrigger>
        <AccordionContent className="px-4 pb-4">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Full Name"
                value={resume.contactInfo.name}
                onChange={(e) =>
                  updateContactInfo({
                    ...resume.contactInfo,
                    name: e.target.value,
                  })
                }
                className="focus-visible:ring-transparent"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Email"
                value={resume.contactInfo.email}
                onChange={(e) =>
                  updateContactInfo({
                    ...resume.contactInfo,
                    email: e.target.value,
                  })
                }
                className="focus-visible:ring-transparent"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="Phone"
                value={resume.contactInfo.phone}
                onChange={(e) =>
                  updateContactInfo({
                    ...resume.contactInfo,
                    phone: e.target.value,
                  })
                }
                className="focus-visible:ring-transparent"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                type="text"
                placeholder="Location"
                value={resume.contactInfo.location}
                onChange={(e) =>
                  updateContactInfo({
                    ...resume.contactInfo,
                    location: e.target.value,
                  })
                }
                className="focus-visible:ring-transparent"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="linkedIn">LinkedIn (Optional)</Label>
              <Input
                id="linkedIn"
                type="text"
                placeholder="LinkedIn profile url"
                value={resume.contactInfo.linkedIn || ""}
                onChange={(e) =>
                  updateContactInfo({
                    ...resume.contactInfo,
                    linkedIn: e.target.value || undefined,
                  })
                }
                className="focus-visible:ring-transparent"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="github">Github (Optional)</Label>
              <Input
                id="github"
                type="text"
                placeholder="Github profile url"
                value={resume.contactInfo.github || ""}
                onChange={(e) =>
                  updateContactInfo({
                    ...resume.contactInfo,
                    github: e.target.value || undefined,
                  })
                }
                className="focus-visible:ring-transparent"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="website">Personal Website (Optional)</Label>
              <Input
                id="website"
                type="text"
                placeholder="Website url"
                value={resume.contactInfo.website || ""}
                onChange={(e) =>
                  updateContactInfo({
                    ...resume.contactInfo,
                    website: e.target.value || undefined,
                  })
                }
                className="focus-visible:ring-transparent"
              />
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="summary" className="rounded-lg border shadow">
        <AccordionTrigger className="px-4 py-3">
          <div className="text-lg font-semibold text-gray-900">Summary</div>
        </AccordionTrigger>
        <AccordionContent className="px-4 pb-4">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="sectionTitle">Section Title</Label>
              <Input
                id="sectionTitle"
                type="text"
                placeholder="Section Title"
                value={resume.summaryInfo?.sectionTitle || ""}
                onChange={(e) =>
                  updateSummaryInfo({
                    ...resume.summaryInfo!,
                    sectionTitle: e.target.value,
                  })
                }
                className="focus-visible:ring-transparent"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="content">Summary</Label>
                <div className="flex items-center space-x-2">
                  <Label htmlFor="isHidden">
                    <div className="text-xs">Hide</div>
                  </Label>
                  <Switch
                    id="isHidden"
                    checked={resume.summaryInfo?.isHidden || false}
                    onCheckedChange={(checked) =>
                      updateSummaryInfo({
                        ...resume.summaryInfo!,
                        isHidden: checked,
                      })
                    }
                  />
                </div>
              </div>
              <Textarea
                id="content"
                placeholder="summary..."
                value={resume.summaryInfo?.content || ""}
                onChange={(e) =>
                  updateSummaryInfo({
                    ...resume.summaryInfo!,
                    content: e.target.value,
                  })
                }
                className="focus-visible:ring-transparent"
              />
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        value="workExperience"
        className="rounded-lg border shadow"
      >
        <AccordionTrigger className="px-4 py-3">
          <div className="text-lg font-semibold text-gray-900">
            Work Experience
          </div>
        </AccordionTrigger>
        <AccordionContent className="px-4 pb-4">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="sectionTitle">Section Title</Label>
              <Input
                id="sectionTitle"
                type="text"
                placeholder="Section Title"
                value={resume.experienceInfo.sectionTitle}
                onChange={(e) =>
                  updateExperienceInfo({
                    ...resume.experienceInfo,
                    sectionTitle: e.target.value,
                  })
                }
                className="focus-visible:ring-transparent"
              />
            </div>
            {resume.experienceInfo.experience.map((exp, index) => (
              <div className="bg-gray-50 rounded-md p-4" key={exp.id}>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="font-medium">Experience {index + 1}</div>
                    <Button
                      size="sm"
                      variant="outline"
                      className="hover:bg-red-100"
                      onClick={() => deleteExperience(exp.id)}
                    >
                      <Trash2 className="w-2 h-2 text-red-500" />
                    </Button>
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor={`position-${exp.id}`}>Position</Label>
                      <Input
                        id={`position-${exp.id}`}
                        type="text"
                        placeholder="Position Title"
                        value={exp.position}
                        onChange={(e) =>
                          updateExperience(exp.id, {
                            position: e.target.value,
                          })
                        }
                        className="focus-visible:ring-transparent"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor={`company-${exp.id}`}>Company</Label>
                      <Input
                        id={`company-${exp.id}`}
                        type="text"
                        placeholder="Company Name"
                        value={exp.company}
                        onChange={(e) =>
                          updateExperience(exp.id, {
                            company: e.target.value,
                          })
                        }
                        className="focus-visible:ring-transparent"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor={`location-${exp.id}`}>Location</Label>
                      <Input
                        id={`location-${exp.id}`}
                        type="text"
                        placeholder="Location"
                        value={exp.location}
                        onChange={(e) =>
                          updateExperience(exp.id, {
                            location: e.target.value,
                          })
                        }
                        className="focus-visible:ring-transparent"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor={`duration-${exp.id}`}>Duration</Label>
                      <Input
                        id={`duration-${exp.id}`}
                        type="text"
                        placeholder="Start Date - End Date"
                        value={exp.duration}
                        onChange={(e) =>
                          updateExperience(exp.id, {
                            duration: e.target.value,
                          })
                        }
                        className="focus-visible:ring-transparent"
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <Label htmlFor="duration">Responsibilities</Label>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() =>
                            updateExperience(exp.id, {
                              responsibilities: [...exp.responsibilities, ""],
                            })
                          }
                        >
                          <Plus className="w-2 h-2" />
                        </Button>
                      </div>
                      <div className="space-y-1">
                        {exp.responsibilities.map((resp, respIndex) => (
                          <div
                            className="flex justify-between items-center gap-1"
                            key={respIndex}
                          >
                            <Textarea
                              placeholder="Describe your responsibility or achievement..."
                              className="focus-visible:ring-transparent"
                              value={resp}
                              onChange={(e) => {
                                const newResponsibilities = [
                                  ...exp.responsibilities,
                                ];
                                newResponsibilities[respIndex] = e.target.value;
                                updateExperience(exp.id, {
                                  responsibilities: newResponsibilities,
                                });
                              }}
                            />
                            {exp.responsibilities.length > 1 && (
                              <Button
                                size="sm"
                                variant="outline"
                                className="hover:bg-red-100"
                                onClick={() => {
                                  const newResponsibilities =
                                    exp.responsibilities.filter(
                                      (_, i) => i !== respIndex
                                    );
                                  updateExperience(exp.id, {
                                    responsibilities: newResponsibilities,
                                  });
                                }}
                              >
                                <Trash2 className="w-2 h-2 text-red-500" />
                              </Button>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <Button
              size="sm"
              onClick={() =>
                addExperience({
                  company: "",
                  position: "",
                  location: "",
                  duration: "",
                  responsibilities: [""],
                })
              }
            >
              <Plus className="w-4 h-4" strokeWidth={3} /> Add
            </Button>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="skills" className="rounded-lg border shadow">
        <AccordionTrigger className="px-4 py-3">
          <div className="text-lg font-semibold text-gray-900">Skills</div>
        </AccordionTrigger>
        <AccordionContent className="px-4 pb-4">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="sectionTitle">Section Title</Label>
              <Input
                id="sectionTitle"
                type="text"
                placeholder="Section Title"
                value={resume.skillsInfo.sectionTitle}
                onChange={(e) =>
                  updateSkillsInfo({
                    ...resume.skillsInfo,
                    sectionTitle: e.target.value,
                  })
                }
                className="focus-visible:ring-transparent"
              />
            </div>
            {resume.skillsInfo.skills.map((skill, index) => (
              <div className="bg-gray-50 rounded-md p-4" key={skill.id}>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="font-medium">Skill Set {index + 1}</div>
                    <Button
                      size="sm"
                      variant="outline"
                      className="hover:bg-red-100"
                      onClick={() => deleteSkill(skill.id)}
                    >
                      <Trash2 className="w-2 h-2 text-red-500" />
                    </Button>
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor={`title-${skill.id}`}>
                        Skill Set Title
                      </Label>
                      <Input
                        id={`title-${skill.id}`}
                        type="text"
                        placeholder="Skill Set Title eg: Frontend, Backend..."
                        value={skill.title}
                        onChange={(e) =>
                          updateSkill(skill.id, {
                            title: e.target.value,
                          })
                        }
                        className="focus-visible:ring-transparent"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor={`skills-${skill.id}`}>Skills</Label>
                      <Textarea
                        id={`skills-${skill.id}`}
                        placeholder="Skills eg: Html, Css..."
                        className="focus-visible:ring-transparent"
                        value={skill.skills}
                        onChange={(e) =>
                          updateSkill(skill.id, {
                            skills: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <Button
              size="sm"
              onClick={() =>
                addSkill({
                  title: "",
                  skills: "",
                })
              }
            >
              <Plus className="w-4 h-4" strokeWidth={3} /> Add
            </Button>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="projects" className="rounded-lg border shadow">
        <AccordionTrigger className="px-4 py-3">
          <div className="text-lg font-semibold text-gray-900">Projects</div>
        </AccordionTrigger>
        <AccordionContent className="px-4 pb-4">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="sectionTitle">Section Title</Label>
              <Input
                id="sectionTitle"
                type="text"
                placeholder="Section Title"
                value={resume.projectsInfo.sectionTitle}
                onChange={(e) =>
                  updateProjectsInfo({
                    ...resume.projectsInfo,
                    sectionTitle: e.target.value,
                  })
                }
                className="focus-visible:ring-transparent"
              />
            </div>
            {resume.projectsInfo.projects.map((project, index) => (
              <div key={project.id} className="bg-gray-50 rounded-md p-4">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="font-medium">Project {index + 1}</div>
                    <Button
                      size="sm"
                      variant="outline"
                      className="hover:bg-red-100"
                      onClick={() => deleteProject(project.id)}
                    >
                      <Trash2 className="w-2 h-2 text-red-500" />
                    </Button>
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor={`name-${project.id}`}>Project Name</Label>
                      <Input
                        id={`name-${project.id}`}
                        type="text"
                        placeholder="Project Name"
                        value={project.name}
                        onChange={(e) =>
                          updateProject(project.id, {
                            name: e.target.value,
                          })
                        }
                        className="focus-visible:ring-transparent"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor={`url-${project.id}`}>Project Link</Label>
                      <Input
                        id={`url-${project.id}`}
                        type="text"
                        placeholder="Project Url"
                        value={project.url || ""}
                        onChange={(e) =>
                          updateProject(project.id, {
                            url: e.target.value || undefined,
                          })
                        }
                        className="focus-visible:ring-transparent"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor={`technologies-${project.id}`}>
                        Project Stack
                      </Label>
                      <Input
                        id={`technologies-${project.id}`}
                        type="text"
                        placeholder="Project Stack eg: HTML, CSS, JS..."
                        value={project.technologies}
                        onChange={(e) =>
                          updateProject(project.id, {
                            technologies: e.target.value,
                          })
                        }
                        className="focus-visible:ring-transparent"
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <div className="font-medium">Project Description</div>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() =>
                            updateProject(project.id, {
                              description: [...project.description, ""],
                            })
                          }
                        >
                          <Plus className="w-2 h-2" />
                        </Button>
                      </div>
                      <div className="space-y-1">
                        {project.description.map((desc, descIndex) => (
                          <div
                            key={descIndex}
                            className="flex justify-between items-center gap-1"
                          >
                            <Textarea
                              id="description"
                              placeholder="Describe your responsibility or achievement..."
                              className="focus-visible:ring-transparent"
                              value={desc}
                              onChange={(e) => {
                                const newDescription = [...project.description];
                                newDescription[descIndex] = e.target.value;
                                updateProject(project.id, {
                                  description: newDescription,
                                });
                              }}
                            />
                            {project.description.length > 1 && (
                              <Button
                                size="sm"
                                variant="outline"
                                className="hover:bg-red-100"
                                onClick={() => {
                                  const newDescription =
                                    project.description.filter(
                                      (_, i) => i !== descIndex
                                    );
                                  updateProject(project.id, {
                                    description: newDescription,
                                  });
                                }}
                              >
                                <Trash2 className="w-2 h-2 text-red-500" />
                              </Button>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <Button
              size="sm"
              onClick={() =>
                addProject({
                  name: "",
                  description: [""],
                  technologies: "",
                })
              }
            >
              <Plus className="w-4 h-4" strokeWidth={3} /> Add
            </Button>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="education" className="rounded-lg border shadow">
        <AccordionTrigger className="px-4 py-3">
          <div className="text-lg font-semibold text-gray-900">Education</div>
        </AccordionTrigger>
        <AccordionContent className="px-4 pb-4">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="sectionTitle">Section Title</Label>
              <Input
                id="sectionTitle"
                type="text"
                placeholder="Section Title"
                value={resume.educationInfo.sectionTitle}
                onChange={(e) =>
                  updateEducationInfo({
                    ...resume.educationInfo,
                    sectionTitle: e.target.value,
                  })
                }
                className="focus-visible:ring-transparent"
              />
            </div>
            {resume.educationInfo.education.map((edu, index) => (
              <div key={edu.id} className="bg-gray-50 rounded-md p-4">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="font-medium">Education {index + 1}</div>
                    <Button
                      size="sm"
                      variant="outline"
                      className="hover:bg-red-100"
                      onClick={() => deleteEducation(edu.id)}
                    >
                      <Trash2 className="w-2 h-2 text-red-500" />
                    </Button>
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor={`institution-${edu.id}`}>
                        Institution Name
                      </Label>
                      <Input
                        id={`institution-${edu.id}`}
                        type="text"
                        placeholder="Institution Name"
                        value={edu.institution}
                        onChange={(e) =>
                          updateEducation(edu.id, {
                            institution: e.target.value,
                          })
                        }
                        className="focus-visible:ring-transparent"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor={`degree-${edu.id}`}>
                        Degree/Course Name
                      </Label>
                      <Input
                        id={`degree-${edu.id}`}
                        type="text"
                        placeholder="Degree Type (e.g., Bachelor of Science)"
                        value={edu.degree}
                        onChange={(e) =>
                          updateEducation(edu.id, {
                            degree: e.target.value,
                          })
                        }
                        className="focus-visible:ring-transparent"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor={`duration-${edu.id}`}>
                        Degree Duration
                      </Label>
                      <Input
                        id={`duration-${edu.id}`}
                        type="text"
                        placeholder="Start Date - End Date"
                        value={edu.duration}
                        onChange={(e) =>
                          updateEducation(edu.id, {
                            duration: e.target.value,
                          })
                        }
                        className="focus-visible:ring-transparent"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <Button
              size="sm"
              onClick={() =>
                addEducation({
                  institution: "",
                  degree: "",
                  duration: "",
                })
              }
            >
              <Plus className="w-4 h-4" strokeWidth={3} /> Add
            </Button>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="awards" className="rounded-lg border shadow">
        <AccordionTrigger className="px-4 py-3">
          <div className="text-lg font-semibold text-gray-900">
            Awards & Achievements
          </div>
        </AccordionTrigger>
        <AccordionContent className="px-4 pb-4">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="sectionTitle">Section Title</Label>
              <Input
                id="sectionTitle"
                type="text"
                placeholder="Section Title"
                value={resume.awardsInfo.sectionTitle}
                onChange={(e) =>
                  updateAwardsInfo({
                    ...resume.awardsInfo,
                    sectionTitle: e.target.value,
                  })
                }
                className="focus-visible:ring-transparent"
              />
            </div>
            {resume.awardsInfo.awards.map((award, index) => (
              <div className="bg-gray-50 rounded-md p-4">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="font-medium">Award {index + 1}</div>
                    <Button
                      size="sm"
                      variant="outline"
                      className="hover:bg-red-100"
                      onClick={() => deleteAward(award.id)}
                    >
                      <Trash2 className="w-2 h-2 text-red-500" />
                    </Button>
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor={`title-${award.id}`}>Title</Label>
                      <Input
                        id={`title-${award.id}`}
                        type="text"
                        placeholder="Award Title"
                        value={award.title}
                        onChange={(e) =>
                          updateAward(award.id, {
                            title: e.target.value,
                          })
                        }
                        className="focus-visible:ring-transparent"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor={`description-${award.id}`}>
                        Description
                      </Label>
                      <Textarea
                        id={`description-${award.id}`}
                        placeholder="Award Description"
                        value={award.description}
                        onChange={(e) =>
                          updateAward(award.id, {
                            description: e.target.value,
                          })
                        }
                        className="focus-visible:ring-transparent"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor={`year-${award.id}`}>Year</Label>
                      <Input
                        id={`year-${award.id}`}
                        type="text"
                        placeholder="Award Year"
                        value={award.year}
                        onChange={(e) =>
                          updateAward(award.id, {
                            year: e.target.value,
                          })
                        }
                        className="focus-visible:ring-transparent"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor={`url-${award.id}`}>Award Url</Label>
                      <Input
                        id={`url-${award.id}`}
                        type="text"
                        placeholder="Award Url"
                        value={award.url || ""}
                        onChange={(e) =>
                          updateAward(award.id, {
                            url: e.target.value || undefined,
                          })
                        }
                        className="focus-visible:ring-transparent"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <Button
              size="sm"
              onClick={() =>
                addAward({
                  title: "",
                  description: "",
                  year: "",
                })
              }
            >
              <Plus className="w-4 h-4" strokeWidth={3} /> Add
            </Button>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default EditorForm;
