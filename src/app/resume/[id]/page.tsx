import React from "react";

import EditorForm from "@/components/editor/EditorForm";
import EditorHeader from "@/components/editor/EditorHeader";
import EditorPreview from "@/components/editor/EditorPreview";

const ResumeEditor = () => {
  return (
    <div className="min-h-screen w-full bg-gray-50">
      <div className="container mx-auto">
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
      </div>
    </div>
  );
};

export default ResumeEditor;
