"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface ConditionalLayoutProps {
  children: ReactNode;
}

export default function ConditionalLayout({ children }: ConditionalLayoutProps) {
  const pathname = usePathname();
  
  // Check if we're on a dashboard page
  const isDashboardPage = pathname?.includes('/dashboard');
  
  // If on dashboard page, render only the main content without header and footer
  if (isDashboardPage) {
    // Extract only the main content from children
    const childrenArray = children as ReactNode[];
    if (Array.isArray(childrenArray) && childrenArray.length >= 2) {
      // Return only the main content (index 1) and skip header (index 0) and footer (index 2)
      return <>{childrenArray[1]}</>;
    }
    return <>{children}</>;
  }
  
  // For all other pages, render the full layout with header and footer
  return <>{children}</>;
}
