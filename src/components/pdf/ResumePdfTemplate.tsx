"use client";
import React from "react";
import { ResumeData } from "@/types/resume";
import { Document, Page, Text, View } from "@react-pdf/renderer";


const ResumePdfTemplate = ({ data }: { data: ResumeData }) => {
  return (
    <Document title={data.name}>
      <Page size="A4">
        <View>
          <Text>{data.name}</Text>
        </View>
      </Page>
    </Document>
  );
};

export default ResumePdfTemplate;
