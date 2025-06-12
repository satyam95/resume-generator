"use client";
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import Link from "next/link";
import { Copy, FileDown, Pencil, Trash2 } from "lucide-react";
import { ResumeData } from "@/types/resume";
import { copyResume, deleteResume, getUserResumes } from "@/actions/resume";
import { format } from "date-fns";
import { toast } from "sonner";
import { Button } from "./ui/button";
import PDFDownloadLink from "./pdf/PDFDownloadLink ";

type ResumeProps = {
  id: string;
  data: ResumeData;
  createdAt: Date;
  updatedAt: Date;
};

const ResumesTable = () => {
  const [resumes, setResumes] = useState<ResumeProps[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchResumes() {
      try {
        setLoading(true);
        const data = await getUserResumes();
        setResumes(data);
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "An unexpected error occurred";
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    }
    fetchResumes();
  }, []);

  const handleCopy = async (id: string) => {
    try {
      setLoading(true);
      await copyResume(id);
      const data = await getUserResumes();
      setResumes(data);
      toast.success("Resume copied successfully!");
    } catch (err) {
      setError("Failed to copy resume");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      setLoading(true);
      const response = await deleteResume(id);
      if (response.success) {
        setResumes(resumes.filter((resume) => resume.id !== id));
        toast.success("Resume deleted successfully!");
      }
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Failed to delete resume";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = (resume: ResumeProps) => {
    // Placeholder for download functionality
    toast.error(
      `Download functionality for ${resume.data.name} is not implemented yet.`
    );
  };

  if (error) return <div>Error: {error}</div>;

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="flex justify-center items-center">
          <div
            className="w-8 h-8 border-4 border-t-blue-500 border-gray-200 rounded-full animate-spin"
            role="status"
            aria-label="Loading"
          ></div>
        </div>
      </div>
    );
  }

  if (resumes.length === 0) {
    return (
      <div className="text-center py-4">
        No Resume found. Please create new invoice.
      </div>
    );
  }
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[5%]">S.No</TableHead>
          <TableHead className="w-[25%]">Name</TableHead>
          <TableHead className="w-[15%]">Created</TableHead>
          <TableHead className="w-[15%]">Modified</TableHead>
          <TableHead className="w-[7%] text-center">Edit</TableHead>
          <TableHead className="w-[7%] text-center">Download</TableHead>
          <TableHead className="w-[7%] text-center">Copy</TableHead>
          <TableHead className="w-[7%] text-center">Delete</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {resumes.map((resume, index) => (
          <TableRow className="py-2" key={index}>
            <TableCell className="w-[5%]">{index + 1}</TableCell>
            <TableCell className="w-[25%]">{resume.data.name}</TableCell>
            <TableCell className="w-[15%]">
              {format(resume.createdAt, "MMM dd, yyyy")}
            </TableCell>
            <TableCell className="w-[15%]">
              {format(resume.updatedAt, "MMM dd, yyyy")}
            </TableCell>
            <TableCell className="w-[7%]">
              <div className="w-full flex items-center justify-center">
                <Link href={`/resume/${resume.id}`}>
                  <Pencil className="w-5 h-5" strokeWidth={2} />
                </Link>
              </div>
            </TableCell>
            <TableCell className="w-[7%]">
              <div className="w-full flex items-center justify-center">
                <div className="w-fit">
                  <PDFDownloadLink variant="link" className="has-[>svg]:p-0" data={resume.data} asChild/>
                </div>
              </div>
            </TableCell>
            <TableCell className="w-[7%]">
              <div className="w-full flex items-center justify-center">
                <Button
                  className="p-0 cursor-pointer"
                  variant="link"
                  onClick={() => handleCopy(resume.id)}
                  asChild
                >
                  <Copy className="w-5 h-5" strokeWidth={2} />
                </Button>
              </div>
            </TableCell>
            <TableCell className="w-[7%]">
              <div className="w-full flex items-center justify-center">
                <Button
                  className="p-0 cursor-pointer"
                  variant="link"
                  onClick={() => handleDelete(resume.id)}
                  asChild
                >
                  <Trash2 className="w-5 h-5" strokeWidth={2} />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ResumesTable;
