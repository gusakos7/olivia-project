import { cn } from "@/lib/utils";
import React from "react";

interface PageWrapperProps {
  children?: React.ReactNode;
  className?: string;
}

export const PageWrapper: React.FC<PageWrapperProps> = ({
  children,
  className = "",
}) => {
  return (
    <div className={cn("container mx-auto px-2 lg:px-12", className)}>
      {children}
    </div>
  );
};
