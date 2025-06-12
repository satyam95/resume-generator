"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { ArrowLeft, Loader2, Save } from "lucide-react";
import { useResume } from "@/hooks/useResume";
import { useRouter } from "next/navigation";
import { saveResume } from "@/actions/resume";
import { toast } from "sonner";
import PDFDownloadLink from "../pdf/PDFDownloadLink ";

const EditorHeader = () => {
  const [saving, setSaving] = useState(false);
  const { resume, updateResumeName } = useResume();
  const router = useRouter();

  const handleSave = async () => {
    setSaving(true);
    try {
      const { id } = await saveResume(resume.id, resume);
      if (!resume.id) {
        router.push(`/resume/${id}`);
      }
      toast.success(
        resume.id
          ? "Resume updated successfully!"
          : "Resume saved successfully!"
      );
    } catch (error) {
      console.error("Error saving resume:", error);
      toast.error("Failed to save resume.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="h-16 flex items-center justify-between">
      <div className="flex items-center gap-1">
        <Button
          className="cursor-pointer"
          size="sm"
          onClick={() => router.push("/")}
        >
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
        <Button
          variant="outline"
          size="sm"
          className="w-32 cursor-pointer"
          onClick={handleSave}
        >
          {saving ? (
            <span className="inline-flex items-center">
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Saving...
            </span>
          ) : (
            <>
              <Save className="w-4 h-4" strokeWidth={3} />
              {resume.id ? "Update" : "Save"}
            </>
          )}
        </Button>
        <PDFDownloadLink data={resume} className="w-32" />
      </div>
    </div>
  );
};

export default EditorHeader;
