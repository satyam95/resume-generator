import AuthCard from "@/components/AuthCard";
import ResumesTable from "@/components/ResumesTable";
import { Button } from "@/components/ui/button";
import { GalleryVerticalEnd, Plus } from "lucide-react";
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
              <ResumesTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
