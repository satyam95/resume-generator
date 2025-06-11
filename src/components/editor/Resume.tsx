"use client";
import { ResumeData } from "@/types/resume";
import React, { useEffect, useState } from "react";
import EditorHeader from "./EditorHeader";
import EditorForm from "./EditorForm";
import EditorPreview from "./EditorPreview";
import { ResumeProvider } from "@/hooks/useResume";

interface ResumeDataProps {
  initialData: ResumeData;
  resumeId?: string;
}

const Resume = ({ initialData, resumeId }: ResumeDataProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    // Render a placeholder or nothing during SSR to avoid hydration mismatch
    return <div className="min-h-screen w-full bg-gray-50" />;
  }
  return (
    <ResumeProvider initialData={initialData} resumeId={resumeId}>
      <div className="flex flex-col gap-2">
        <EditorHeader />
        <div className="flex h-full gap-6">
          <div className="flex-1 bg-white h-[calc(100vh-5rem)] overflow-y-auto no-scrollbar rounded-md">
            <div className="p-4">
              <EditorForm />
            </div>
          </div>
          <div className="w-[800px] bg-white h-[calc(100vh-5rem)] overflow-y-auto no-scrollbar rounded-md">
            <EditorPreview />
          </div>
        </div>
      </div>
    </ResumeProvider>
  );
};

export default Resume;
