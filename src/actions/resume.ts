// lib/actions/resume.ts
"use server";

import { db } from "@/lib/db";
import { auth } from "@/lib/auth";
import { and, eq } from "drizzle-orm";
import { ResumeData } from "@/types/resume";
import { resumes } from "@/drizzle/schema";

export async function saveResume(
  resumeId: string | undefined,
  resume: ResumeData & { id?: string; createdAt?: string; updatedAt?: string }
) {
  const session = await auth();
  const userId = session?.user.id;
  const userName = session?.user.name;

  if (!userId || !userName) {
    throw new Error("User not authenticated or name missing");
  }

  if (resumeId) {
    // Update existing resume
    await db
      .update(resumes)
      .set({
        name: userName,
        data: resume,
        updatedAt: new Date(),
      })
      .where(and(eq(resumes.id, resumeId), eq(resumes.userId, userId)));
    return { id: resumeId };
  } else {
    // Create new resume
    const newResume = await db
      .insert(resumes)
      .values({
        id: crypto.randomUUID(),
        userId,
        name: userName,
        data: resume,
        createdAt: new Date(),
        updatedAt: new Date(),
      })
      .returning({ id: resumes.id });
    return { id: newResume[0].id };
  }
}

export async function getUserResumes() {
  const session = await auth();
  if (!session?.user?.id) {
    throw new Error("Unauthorized");
  }

  try {
    const userResumes = await db
      .select({
        id: resumes.id,
        data: resumes.data,
        createdAt: resumes.createdAt,
        updatedAt: resumes.updatedAt,
      })
      .from(resumes)
      .where(eq(resumes.userId, session.user.id));
    return userResumes;
  } catch (error) {
    console.error("Error fetching invoices:", error);
    throw new Error("Failed to fetch invoices");
  }
}

export async function copyResume(resumeId: string) {
  const session = await auth();
  const userId = session?.user.id;
  const userName = session?.user.name;

  if (!userId || !userName) {
    throw new Error("User not authenticated or name missing");
  }

  const [resume] = await db
    .select()
    .from(resumes)
    .where(and(eq(resumes.id, resumeId), eq(resumes.userId, userId)))
    .limit(1);

  if (!resume) {
    throw new Error("Resume not found");
  }

  const newResume = await db
    .insert(resumes)
    .values({
      id: crypto.randomUUID(),
      userId,
      name: userName,
      data: { ...resume.data, name: `${resume.data.name} (Copy)` },
      createdAt: new Date(),
      updatedAt: new Date(),
    })
    .returning({ id: resumes.id });

  return newResume[0].id;
}

export async function deleteResume(resumeId: string) {
  const session = await auth();
  const userId = session?.user.id;

  if (!userId) {
    throw new Error("User not authenticated");
  }
  try {
    await db
      .delete(resumes)
      .where(and(eq(resumes.id, resumeId), eq(resumes.userId, userId)));
    return { success: true };
  } catch (error) {
    console.error("Error deleting invoice:", error);
    throw new Error("Failed to delete invoice");
  }
}
