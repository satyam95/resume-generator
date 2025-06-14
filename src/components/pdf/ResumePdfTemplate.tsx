"use client";
import React from "react";
import { ResumeData } from "@/types/resume";
import { Document, Link, Page, Text, View } from "@react-pdf/renderer";
import { styles } from "./PDFStyles";

const ResumePdfTemplate = ({ data }: { data: ResumeData }) => {
  return (
    <Document title={data.name}>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <View style={styles.headerBlock}>
            <View style={styles.nameBlock}>
              <Text style={styles.name}>{data.contactInfo.name}</Text>
              <Text style={styles.role}>Frontend Developer</Text>
            </View>
            <View style={styles.linkBlock}>
              <Link href={`tel:${data.contactInfo.phone}`} style={styles.link}>
                {data.contactInfo.phone}
              </Link>
              <Link
                href={`mailto:${data.contactInfo.email}`}
                style={styles.link}
              >
                {data.contactInfo.email}
              </Link>
              <Link href={data.contactInfo.linkedIn} style={styles.link}>
                {data.contactInfo.linkedIn}
              </Link>
              <Link href={data.contactInfo.github} style={styles.link}>
                {data.contactInfo.github}
              </Link>
              <Link href={data.contactInfo.website} style={styles.link}>
                {data.contactInfo.website}
              </Link>
            </View>
          </View>
        </View>
        <View style={styles.contentBlock}>
          <View style={styles.leftCol}>
            <View style={styles.innerColumnContainer}>
              {!data.summaryInfo?.isHidden && (
                <View style={styles.sectionContainer}>
                  <Text style={styles.sectionTitle}>
                    {data.summaryInfo?.sectionTitle}
                  </Text>
                  <Text style={styles.body}>{data.summaryInfo?.content}</Text>
                </View>
              )}
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>
                  {data.skillsInfo.sectionTitle}
                </Text>
                <View style={styles.skillBlockGroup}>
                  {data.skillsInfo.skills.map((skill) => (
                    <View key={skill.id}>
                      <Text style={styles.textBodyHead}>{skill.title}:</Text>
                      <Text style={styles.body}>{skill.skills}</Text>
                    </View>
                  ))}
                </View>
              </View>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>
                  {data.educationInfo.sectionTitle}
                </Text>
                {data.educationInfo.education.map((edu) => (
                  <View key={edu.id}>
                    <Text style={styles.textBodyHead}>{edu.institution}</Text>
                    <Text style={styles.body}>
                      {edu.duration} - {edu.degree}
                    </Text>
                  </View>
                ))}
              </View>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>
                  {data.awardsInfo.sectionTitle}
                </Text>
                {data.awardsInfo.awards.map((award) => (
                  <View key={award.id}>
                    <Text style={styles.textBodyHead}>
                      {award.title} - {award.year}
                    </Text>
                    <Text style={styles.body}>{award.description}</Text>
                  </View>
                ))}
              </View>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>
                  {data.certificationInfo.sectionTitle}
                </Text>
                <View style={styles.list}>
                  {data.certificationInfo.certificates.map((certificate) => (
                    <View key={certificate.id} style={styles.bulletContainer}>
                      <Text style={styles.bulletSmall}>•</Text>
                      <Text style={styles.textBodySmall}>
                        {certificate.description} - ({certificate.year})
                      </Text>
                    </View>
                  ))}
                </View>
              </View>
            </View>
          </View>
          <View style={styles.rightCol}>
            <View style={styles.innerColumnContainer}>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>
                  {data.experienceInfo.sectionTitle}
                </Text>
                <View style={styles.blockMain}>
                  {data.experienceInfo.experience.map((exp) => (
                    <View key={exp.id}>
                      <View style={styles.blockContentMain}>
                        <View style={styles.headBlock}>
                          <Text style={styles.heading}>
                            {exp.position} - {exp.company}
                          </Text>
                          <Text style={styles.subHeading}>
                            {exp.duration} - {exp.location}
                          </Text>
                        </View>
                        <View style={styles.list}>
                          {exp.responsibilities.map((responsibility, idx) => (
                            <View key={idx} style={styles.bulletContainer}>
                              <Text style={styles.bullet}>•</Text>
                              <Text style={styles.textBody}>
                                {responsibility}
                              </Text>
                            </View>
                          ))}
                        </View>
                      </View>
                    </View>
                  ))}
                </View>
              </View>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>
                  {data.projectsInfo.sectionTitle}
                </Text>
                <View style={styles.blockMain}>
                  {data.projectsInfo.projects.map((project) => (
                    <View key={project.id}>
                      <View style={styles.blockContentMain}>
                        <View style={styles.headContainer}>
                          <View style={styles.headBlock}>
                            <Text style={styles.heading}>{project.name}</Text>
                            <Text style={styles.subHeading}>
                              {project.technologies}
                            </Text>
                          </View>
                          <Link href={project.url} style={styles.urlText}>
                            bit.ly/ecom
                          </Link>
                        </View>
                        <View style={styles.list}>
                          {project.description.map((descp, idx) => (
                            <View key={idx} style={styles.bulletContainer}>
                              <Text style={styles.bullet}>•</Text>
                              <Text style={styles.textBody}>{descp}</Text>
                            </View>
                          ))}
                        </View>
                      </View>
                    </View>
                  ))}
                </View>
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default ResumePdfTemplate;
