import AuthCard from "@/components/AuthCard";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Copy,
  FileDown,
  GalleryVerticalEnd,
  Pencil,
  Plus,
  Trash2,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-gray-50">
      <div className="container mx-auto">
        <div className="flex flex-col gap-2">
          <div className="h-16 flex items-center justify-between">
            <div className="flex gap-2 items-center">
              <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                <GalleryVerticalEnd className="size-4" />
              </div>
              <div className="flex flex-col gap-0.5 leading-none">
                <span className="font-medium text-sm leading-none">
                  ResumeGen
                </span>
                <span className="text-sm leading-none">v1.0.0</span>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <Button size="sm" asChild>
                <Link href="/resume/new">
                  <Plus className="w-4 h-4" strokeWidth={3} />
                  Create Resume
                </Link>
              </Button>
              <AuthCard />
            </div>
          </div>
          <div className="bg-white h-[calc(100vh-5rem)] rounded-md">
            <div className="p-4">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[5%]">S.No</TableHead>
                    <TableHead className="w-[25%]">Name</TableHead>
                    <TableHead className="w-[15%]">Created</TableHead>
                    <TableHead className="w-[15%]">Modified</TableHead>
                    <TableHead className="w-[7%] text-center">Edit</TableHead>
                    <TableHead className="w-[7%] text-center">
                      Download
                    </TableHead>
                    <TableHead className="w-[7%] text-center">Copy</TableHead>
                    <TableHead className="w-[7%] text-center">Delete</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="py-2">
                    <TableCell className="w-[5%]">1</TableCell>
                    <TableCell className="w-[25%]">John Doe</TableCell>
                    <TableCell className="w-[15%]">
                      2024-01-15T10:00:00Z
                    </TableCell>
                    <TableCell className="w-[15%]">
                      2025-06-09T12:30:00Z
                    </TableCell>
                    <TableCell className="w-[7%]">
                      <div className="w-full flex items-center justify-center">
                        <Link href={`/resume/resume-001`}>
                          <Pencil className="w-5 h-5" strokeWidth={2} />
                        </Link>
                      </div>
                    </TableCell>
                    <TableCell className="w-[7%]">
                      <div className="w-full flex items-center justify-center">
                        <FileDown className="w-5 h-5" strokeWidth={2} />
                      </div>
                    </TableCell>
                    <TableCell className="w-[7%]">
                      <div className="w-full flex items-center justify-center">
                        <Copy className="w-5 h-5" strokeWidth={2} />
                      </div>
                    </TableCell>
                    <TableCell className="w-[7%]">
                      <div className="w-full flex items-center justify-center">
                        <Trash2 className="w-5 h-5" strokeWidth={2} />
                      </div>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
