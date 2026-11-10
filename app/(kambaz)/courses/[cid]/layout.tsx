import { ReactNode } from "react";
import CourseShell from "./CourseShell";
export default async function CoursesLayout({
  children,
  params,
}: Readonly<{
  children: ReactNode;
  params: Promise<{ cid: string }>;
}>) {
  const { cid } = await params;
  return <CourseShell cid={cid}>{children}</CourseShell>;
}
