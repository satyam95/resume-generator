import { ResumeData } from "@/types/resume";
import dynamic from "next/dynamic";
import React from "react";
import ResumePdfTemplate from "./ResumePdfTemplate";

const ResumePDFViewer = dynamic(
  () => import("./ResumePDFViewer").then((mod) => mod.ResumePDFViewer),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-[580px] w-full items-center justify-center border border-gray-200 bg-gray-200 lg:h-[620px] 2xl:h-[700px]">
        <div className="text-center">
          <div className="mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-4 border-blue-500 border-t-transparent" />
          <p className="text-gray-600">Loading PDF viewer...</p>
        </div>
      </div>
    ),
  }
);

const PDFPreview = ({ resume }: { resume: ResumeData }) => {
  return (
    <ResumePDFViewer>
      <ResumePdfTemplate data={resume} />
    </ResumePDFViewer>
  );
};

export default PDFPreview;
