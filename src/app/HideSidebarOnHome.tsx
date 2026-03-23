"use client";
import { useUser } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import Sidebar from "./Sidebar";

export default function HideSidebarOnHome({ children }: { children: React.ReactNode }) {
  const { isSignedIn } = useUser();
  const pathname = usePathname();
  const showSidebar = isSignedIn && pathname !== "/";
  return (
    <>
      {showSidebar && <Sidebar />}
      <main style={{ paddingLeft: showSidebar ? 240 : 0, minHeight: "100vh" }}>{children}</main>
    </>
  );
}
