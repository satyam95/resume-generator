"use client";
import { useResume } from "@/hooks/useResume";
import React from "react";
import PDFPreview from "../pdf/PDFPreview";

const EditorPreview = () => {
  const { resume } = useResume();
  return (
    <div className="h-[calc(100vh-5rem)]">
      <PDFPreview resume={resume} />
    </div>
  );
};

export default EditorPreview;
