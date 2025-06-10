"use client";
import { useResume } from "@/hooks/useResume";
import React from "react";

const EditorPreview = () => {
  const { resume } = useResume();
  return <div className="p-4">{JSON.stringify(resume)}</div>;
};

export default EditorPreview;
