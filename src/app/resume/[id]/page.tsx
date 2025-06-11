import React from "react";
import { auth } from "@/lib/auth";

import { ResumeData } from "@/types/resume";
import initialResumeData from "@/data/sampleData";
import Resume from "@/components/editor/Resume";
import { db } from "@/lib/db";
import { resumes } from "@/drizzle/schema";
import { and, eq } from "drizzle-orm";

type Params = Promise<{ id: string }>;

const ResumeEditor = async ({ params }: { params: Params }) => {
  const session = await auth();
  const { id } = await params;
  const userId = session?.user.id;

  let initialData: ResumeData = initialResumeData;
  let resumeId: string | undefined;

  if (id !== "new" && userId) {
    const resume = await db
      .select()
      .from(resumes)
      .where(and(eq(resumes.id, id), eq(resumes.userId, userId)))
      .limit(1);

    if (resume.length > 0) {
      initialData = resume[0].data;
      resumeId = resume[0].id;
    }
  }

  return (
    <div className="min-h-screen w-full bg-gray-50">
      <div className="container mx-auto">
        <Resume initialData={initialData} resumeId={resumeId} />
      </div>
    </div>
  );
};

export default ResumeEditor;
