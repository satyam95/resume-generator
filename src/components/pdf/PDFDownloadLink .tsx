"use client";

import { Button, buttonVariants } from "@/components/ui/button"; // Import Shadcn Button
import { ResumeData } from "@/types/resume";
import { Download, Loader2 } from "lucide-react";
import dynamic from "next/dynamic";
import ResumePdfTemplate from "./ResumePdfTemplate";
import { VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

interface PDFDownloadLinkProps extends VariantProps<typeof buttonVariants> {
  data: ResumeData;
  asChild?: boolean;
  className?: string;
}

const DynamicPDFDownloadLink = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFDownloadLink),
  { ssr: false }
);

const PDFDownloadLink = ({
  data,
  variant = "default",
  asChild = false,
  size = "sm",
  className,
}: PDFDownloadLinkProps) => {
  const now = new Date();
  const formattedDate = `${String(now.getMonth() + 1).padStart(
    2,
    "0"
  )}-${now.getFullYear()}`;
  const filename = `${data.name}-${formattedDate}.pdf`;

  return (
    <DynamicPDFDownloadLink
      document={<ResumePdfTemplate data={data} />}
      fileName={filename}
    >
      {({ loading }) => (
        <Button
          className={cn("p-0 cursor-pointer", className)}
          variant={variant} // Use passed variant prop
          size={size} // Use passed size prop
          disabled={loading} // Disable button while loading
          asChild={asChild} // Disable button while loading
        >
          {loading ? (
            <span className="inline-flex items-center">
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              <span className="animate-pulse">Generating...</span>
            </span>
          ) : (
            <span className="inline-flex items-center gap-2">
              <Download strokeWidth={3} className=" h-4 w-4" />
              {variant !== "link" && "Download"}
            </span>
          )}
        </Button>
      )}
    </DynamicPDFDownloadLink>
  );
};

export default PDFDownloadLink;
