"use client";
import React from "react";
import { Button } from "../ui/button";
import { ArrowLeft, Download, Save } from "lucide-react";
import { useResume } from "@/hooks/useResume";

const EditorHeader = () => {
  const { resume, updateResumeName } = useResume();
  return (
    <div className="h-16 flex items-center justify-between">
      <div className="flex items-center gap-1">
        <Button size="sm">
          <ArrowLeft size={20} />
          Back
        </Button>
        <input
          type="text"
          className="text-xl font-semibold bg-transparent border-none outline-none focus:bg-white focus:border focus:border-gray-300 focus:rounded px-2 py-1"
          placeholder="Resume Name"
          value={resume.name}
          onChange={(e) => updateResumeName(e.target.value)}
        />
      </div>
      <div className="flex items-center gap-4">
        <Button variant="outline" size="sm" className="w-28">
          <Save className="w-4 h-4" strokeWidth={3} />
          Save
        </Button>
        <Button size="sm" className="w-28">
          <Download className="w-4 h-4" strokeWidth={3} />
          Download
        </Button>
      </div>
    </div>
  );
};

export default EditorHeader;
